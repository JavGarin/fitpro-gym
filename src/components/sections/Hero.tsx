import { useRef, useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, Star, Trophy, Users, Play, Pause, ArrowUpRight, Flame } from 'lucide-react';
import WomanGym from '../../../assets/video/womangym.mp4';
import posterGym from '../../../assets/images/zonadepesas.avif';
import { Button } from '../ui';
import styles from '../../styles/cyber.module.css';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 4.75rem;
  padding-bottom: 2rem;
  overflow: hidden;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.bg};

  ${({ theme }) => theme.media.sm} {
    padding-top: 5.5rem;
    padding-bottom: 3rem;
  }

  ${({ theme }) => theme.media.lg} {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  /* Prevent any child from breaking out horizontally */
  overflow-x: hidden;
  box-sizing: border-box;

  ${({ theme }) => theme.media.sm} {
    padding: 0 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 0 2rem;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: center;

  ${({ theme }) => theme.media.sm} {
    gap: 2.5rem;
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3.5rem;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.media.sm} {
    gap: 1.75rem;
  }
`;

const SeasonBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  max-width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.primary.subtle};
  padding: 0.25rem 0.65rem;
  box-shadow: ${({ theme }) => theme.shadows.brutalDark};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.primary.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  svg {
    flex-shrink: 0;
  }

  ${({ theme }) => theme.media.xs} {
    font-size: 0.625rem;
    letter-spacing: 0.045em;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 0.35rem 0.875rem;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }
`;

const HeroHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.625rem, 5.5vw, 2.5rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: #FFFFFF;
  word-break: break-word;
  overflow-wrap: break-word;

  .gradientText {
    display: block;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary.main} 0%,
      ${({ theme }) => theme.colors.primary.light} 50%,
      ${({ theme }) => theme.colors.cyan.main} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .accentDot {
    color: ${({ theme }) => theme.colors.primary.main};
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  ${({ theme }) => theme.media.sm} {
    font-size: clamp(2.25rem, 6vw, 4.5rem);
  }
`;

const HeroParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  max-width: 42rem;

  strong {
    color: #FFFFFF;
    font-weight: 700;
  }

  ${({ theme }) => theme.media.sm} {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding-top: 0.25rem;
  width: 100%;

  /* Full-width buttons on mobile with touch-friendly responsive sizing */
  a, button {
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    height: 2.875rem;
    font-size: 0.8125rem;
    padding: 0 1.25rem;
  }

  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    width: auto;
    gap: 0.75rem;
    padding-top: 0.5rem;

    a, button {
      width: auto;
      height: 3.25rem;
      font-size: 0.9375rem;
      padding: 0 2rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.media.sm} {
    gap: 1rem;
    padding-top: 1rem;
  }
`;

const StatCard = styled.div`
  background-color: rgba(16, 20, 29, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.brutalDark};

  ${({ theme }) => theme.media.sm} {
    padding: 1rem;
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2rem;

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
    width: 1rem;
    height: 1rem;
  }

  .code {
    display: none;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.5625rem;
    color: ${({ theme }) => theme.colors.text.subtle};

    ${({ theme }) => theme.media.sm} {
      display: inline;
    }
  }

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 0.25rem;
    svg {
      width: 1.15rem;
      height: 1.15rem;
    }
  }
`;

const StatValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1rem, 3.2vw, 1.5rem);
  font-weight: 900;
  color: #FFFFFF;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.5rem, 1.6vw, 0.75rem);
  color: ${({ theme }) => theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.media.sm} {
    font-size: clamp(0.5625rem, 1.8vw, 0.75rem);
    letter-spacing: 0.04em;
    white-space: nowrap;
    display: block;
    -webkit-line-clamp: unset;
  }
`;

const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0;

  ${({ theme }) => theme.media.sm} {
    padding-bottom: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const MediaOffsetShadow = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: -0.75rem;
  bottom: -0.75rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  transform: translate(0.75rem, 0.75rem);

  ${({ theme }) => theme.media.sm} {
    display: block;
  }
`;

const MediaCard = styled.div`
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: ${({ theme }) => theme.colors.dark.card};
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
`;

const MediaTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.dark.surface};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .dots {
    display: flex;
    gap: 0.35rem;
    span {
      height: 0.55rem;
      width: 0.55rem;
    }
  }

  .statusText {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.58rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.text.muted};
  }

  ${({ theme }) => theme.media.sm} {
    padding: 0.5rem 0.875rem;

    .dots span {
      height: 0.625rem;
      width: 0.625rem;
    }

    .statusText {
      font-size: 0.625rem;
      letter-spacing: 0.1em;
    }
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000000;

  ${({ theme }) => theme.media.sm} {
    aspect-ratio: 3 / 4;
    max-height: 480px;
  }

  ${({ theme }) => theme.media.lg} {
    aspect-ratio: 4 / 5;
    max-height: 520px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const VideoGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 50%, rgba(0, 0, 0, 0.2) 100%);
  pointer-events: none;
`;

const VideoStatusFooter = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;

  .infoBadge {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(16, 20, 29, 0.9);
    backdrop-filter: blur(8px);
    padding: 0.25rem 0.5rem;

    .title {
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #FFFFFF;
      display: block;
    }
    .sub {
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 0.55rem;
      color: ${({ theme }) => theme.colors.cyan.main};
      display: block;
    }
  }

  .liveTag {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #000000;
    padding: 0.2rem 0.5rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.625rem;
    font-weight: 900;
    text-transform: uppercase;
  }

  ${({ theme }) => theme.media.sm} {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;

    .infoBadge {
      padding: 0.35rem 0.75rem;
      .title {
        font-size: 0.75rem;
      }
      .sub {
        font-size: 0.625rem;
      }
    }

    .liveTag {
      padding: 0.25rem 0.625rem;
      font-size: 0.6875rem;
    }
  }
`;

const ScrollLink = styled.a`
  display: none;

  ${({ theme }) => theme.media.lg} {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme.colors.text.muted};
    transition: color ${({ theme }) => theme.transitions.fast};

    span {
      font-family: ${({ theme }) => theme.fonts.mono};
      font-size: 0.625rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    svg {
      color: ${({ theme }) => theme.colors.primary.main};
      animation: bounce 1.5s infinite;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
`;

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <Section id="inicio" className={styles.cyberGrid}>
      {/* Background radial ambient lights using CSS module */}
      <div className={styles.ambientGlowTop} />
      <div className={styles.ambientGlowBottom} />

      <ContentContainer>
        <HeroGrid>
          {/* Text Content */}
          <TextBlock>
            <SeasonBadge>
              <Flame size={16} />
              <span>TEMPORADA 2025 // MATRÍCULA COSTO CERO</span>
            </SeasonBadge>

            <HeroHeading>
              FUERZA REAL.{' '}
              <span className="gradientText">DISCIPLINA</span>
              SIN EXCUSAS<span className="accentDot">.</span>
            </HeroHeading>

            <HeroParagraph>
              El centro de entrenamiento de alto rendimiento más avanzado de Santiago.
              Máquinas biomecánicas certificadas, comunidad de poder y acceso total{' '}
              <strong>24 horas al día</strong>.
            </HeroParagraph>

            <ActionButtons>
              <Button asChild size="lg">
                <a href="#planes">
                  <span>ACTIVAR CLASE GRATIS</span>
                  <ArrowUpRight size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#servicios">
                  <span>CONOCER MÁS</span>
                </a>
              </Button>
            </ActionButtons>

            <StatsGrid>
              {[
                { icon: Users, label: '+5.000', desc: 'ATLETAS ACTIVOS', code: 'MEMBERS' },
                { icon: Trophy, label: '+15 AÑOS', desc: 'LIDERANDO FITNESS', code: 'LEGACY' },
                { icon: Star, label: '4.9 / 5', desc: 'RATING GOOGLE', code: 'SCORE' },
              ].map((stat, idx) => (
                <StatCard key={idx}>
                  <StatHeader>
                    <stat.icon />
                    <span className="code">{stat.code}</span>
                  </StatHeader>
                  <StatValue>{stat.label}</StatValue>
                  <StatLabel>{stat.desc}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </TextBlock>

          {/* Media Video Showcase */}
          <MediaContainer>
            <MediaOffsetShadow />
            <MediaCard>
              <MediaTopBar>
                <div className="dots">
                  <span style={{ backgroundColor: '#FF5E00' }} />
                  <span style={{ backgroundColor: '#00E5FF' }} />
                  <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                </div>
                <span className="statusText">LIVE_FEED // ZONE_01</span>
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                  style={{ color: '#94A3B8', display: 'flex', alignItems: 'center' }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
              </MediaTopBar>

              <VideoWrapper>
                <video
                  ref={videoRef}
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                  poster={posterGym}
                >
                  <source src={WomanGym} type="video/mp4" />
                </video>

                <VideoGradientOverlay />

                <VideoStatusFooter>
                  <div className="infoBadge">
                    <span className="title">ZONA DE POTENCIA</span>
                    <span className="sub">ÁREA CLIMATIZADA</span>
                  </div>
                  <div className="liveTag">
                    <span
                      style={{
                        height: '6px',
                        width: '6px',
                        backgroundColor: '#000',
                        borderRadius: '50%',
                      }}
                    />
                    EN VIVO
                  </div>
                </VideoStatusFooter>
              </VideoWrapper>
            </MediaCard>
          </MediaContainer>
        </HeroGrid>
      </ContentContainer>

      <ScrollLink href="#servicios" aria-label="Ir a servicios">
        <span>EXPLORAR</span>
        <ChevronDown size={18} />
      </ScrollLink>
    </Section>
  );
};