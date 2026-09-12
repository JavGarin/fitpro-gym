import { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

/* ═══════════════════════════════════════════════════════
   FITPRO GYM — Premium Loading / Splash Screen
   Brutalist-modern aesthetic with micro-animations.
   ═══════════════════════════════════════════════════════ */

const fadeOut = keyframes`
  0%   { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
`;

const slideUp = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-100%); }
`;

const progressGrow = keyframes`
  0%   { width: 0%; }
  60%  { width: 85%; }
  100% { width: 100%; }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 1; }
`;

const gridFlicker = keyframes`
  0%, 90% { opacity: 0.04; }
  95%     { opacity: 0.08; }
  100%    { opacity: 0.04; }
`;

const Overlay = styled.div<{ $exiting: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg};
  animation: ${({ $exiting }) => ($exiting ? fadeOut : 'none')} 0.5s ease forwards,
    ${({ $exiting }) => ($exiting ? slideUp : 'none')} 0.6s 0.35s ease-in-out forwards;

  /* Cyber grid BG */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-size: 32px 32px;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
    animation: ${gridFlicker} 4s linear infinite;
    pointer-events: none;
  }
`;

const AmbientGlow = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(80vw, 500px);
  height: min(80vw, 500px);
  background: radial-gradient(
    circle,
    rgba(255, 94, 0, 0.18) 0%,
    transparent 70%
  );
  filter: blur(80px);
  pointer-events: none;
  animation: ${pulseGlow} 2.5s ease-in-out infinite;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoIconBox = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 3px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.brutalWhite};

  svg {
    transform: rotate(-12deg);
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 900;
  font-size: 2rem;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1;

  .dot {
    color: ${({ theme }) => theme.colors.primary.main};
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`;

const SubBrand = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.cyan.main};
  margin-top: 0.2rem;
`;

/* Progress Bar (Brutalist style) */
const ProgressContainer = styled.div`
  width: min(80vw, 320px);
  height: 6px;
  background-color: ${({ theme }) => theme.colors.dark.surface};
  border: 1px solid rgba(255, 255, 255, 0.12);
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary.main},
    ${({ theme }) => theme.colors.cyan.main}
  );
  animation: ${progressGrow} 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const StatusLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.muted};
  animation: ${pulseGlow} 1.5s ease-in-out infinite;
`;

const VersionTag = styled.div`
  position: absolute;
  bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.625rem;
  color: ${({ theme }) => theme.colors.text.subtle};
  letter-spacing: 0.1em;
`;

/* Dumbbell SVG inline to avoid extra imports */
const DumbbellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
);

interface LoadingScreenProps {
  /** Minimum display time in ms (allows animations to complete) */
  minDisplay?: number;
  /** Maximum display time in ms (failsafe) */
  maxDisplay?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  minDisplay = 1800,
  maxDisplay = 3500,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const startExit = useCallback(() => {
    setIsExiting(true);
    // Remove from DOM after exit animation completes
    setTimeout(() => setIsVisible(false), 900);
  }, []);

  useEffect(() => {
    let minTimerDone = false;
    let domReady = false;

    const tryExit = () => {
      if (minTimerDone && domReady) startExit();
    };

    // Min display timer
    const minTimer = setTimeout(() => {
      minTimerDone = true;
      tryExit();
    }, minDisplay);

    // DOM readiness check
    const checkDom = () => {
      domReady = true;
      tryExit();
    };

    if (document.readyState === 'complete') {
      // Use rAF to ensure first paint happened
      requestAnimationFrame(() => {
        requestAnimationFrame(checkDom);
      });
    } else {
      window.addEventListener('load', () => {
        requestAnimationFrame(checkDom);
      });
    }

    // Failsafe max timer
    const maxTimer = setTimeout(startExit, maxDisplay);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [minDisplay, maxDisplay, startExit]);

  if (!isVisible) return null;

  return (
    <Overlay $exiting={isExiting} aria-hidden="true">
      <AmbientGlow />
      <Content>
        <LogoContainer>
          <LogoIconBox>
            <DumbbellIcon />
          </LogoIconBox>
          <LogoText>
            <BrandName>
              FITPRO<span className="dot">.</span>
            </BrandName>
            <SubBrand>HIGH PERFORMANCE</SubBrand>
          </LogoText>
        </LogoContainer>

        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>

        <StatusLabel>INICIALIZANDO SISTEMA...</StatusLabel>
      </Content>

      <VersionTag>SYS_V2.1 // SANTIAGO, CL</VersionTag>
    </Overlay>
  );
};
