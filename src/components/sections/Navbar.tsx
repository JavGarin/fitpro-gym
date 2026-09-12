import styled from 'styled-components';
import { Dumbbell, Menu, X, ArrowRight } from 'lucide-react';
import { useMenu, useScroll, useBodyScrollLock } from '../../hooks';
import { Button } from '../ui';

const navItems = [
  { label: 'Inicio', href: '#inicio', code: '01' },
  { label: 'Servicios', href: '#servicios', code: '02' },
  { label: 'Planes', href: '#planes', code: '03' },
  { label: 'Galería', href: '#galería', code: '04' },
  { label: 'FAQ', href: '#faq', code: '05' },
];

const Header = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all ${({ theme }) => theme.transitions.normal};
  padding: ${({ $scrolled }) => ($scrolled ? '0.75rem 0' : '1.15rem 0')};
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(9, 11, 14, 0.95)' : 'rgba(9, 11, 14, 0.65)'};
  backdrop-filter: blur(12px);
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled
      ? `2px solid ${theme.colors.primary.main}`
      : '1px solid rgba(255, 255, 255, 0.1)'};
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.brutalDark : 'none'};
`;

const NavContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.media.sm} {
    padding: 0 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 0 2rem;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 4px;
  }
`;

const LogoIconBox = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.brutalWhite};
  transition: all ${({ theme }) => theme.transitions.fast};

  svg {
    transform: rotate(-12deg);
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  ${LogoLink}:hover & {
    box-shadow: ${({ theme }) => theme.shadows.brutalCyan};
    svg {
      transform: rotate(0deg);
    }
  }
`;

const LogoTextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoBrand = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 900;
  font-size: 1.35rem;
  text-transform: uppercase;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  line-height: 1;

  .dot {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  ${LogoLink}:hover & {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const LogoTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.cyan.main};
  margin-top: 0.15rem;
`;

const DesktopNav = styled.nav`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const DesktopNavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.text.muted};
  padding: 0.5rem 0.75rem;
  border: 1px solid transparent;
  transition: all ${({ theme }) => theme.transitions.fast};

  .num {
    color: ${({ theme }) => theme.colors.primary.main};
    margin-right: 0.25rem;
  }

  &:hover {
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
  }
`;

const RightActions = styled.div`
  display: none;

  ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const StatusPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.cyan.glow};
  background-color: ${({ theme }) => theme.colors.cyan.subtle};
  padding: 0.35rem 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.cyan.main};
  text-transform: uppercase;
`;

const StatusDot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  background-color: ${({ theme }) => theme.colors.cyan.main};
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

const MobileMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  width: 2.75rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.dark.card};
  color: #FFFFFF;
  box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};
  cursor: pointer;

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

const MobileDrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  top: 65px;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

const MobileDrawerContent = styled.div`
  background-color: ${({ theme }) => theme.colors.dark.card};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary.main};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
`;

const DrawerMetaHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary.main};
`;

const DrawerLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DrawerLinkItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(29, 35, 51, 0.4);
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: all ${({ theme }) => theme.transitions.fast};

  .index {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &:hover, &:active {
    border-color: ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.dark.surface};
    transform: translateX(4px);
  }
`;

export const Navbar = () => {
  const scrolled = useScroll();
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useMenu();

  useBodyScrollLock(isMenuOpen);

  return (
    <Header $scrolled={scrolled}>
      <NavContainer>
        {/* Brand Logo */}
        <LogoLink href="#inicio">
          <LogoIconBox>
            <Dumbbell size={22} color="#000000" strokeWidth={2.5} />
          </LogoIconBox>
          <LogoTextBlock>
            <LogoBrand>
              FITPRO<span className="dot">.</span>
            </LogoBrand>
            <LogoTag>HIGH PERFORMANCE</LogoTag>
          </LogoTextBlock>
        </LogoLink>

        {/* Desktop Menu Links */}
        <DesktopNav>
          {navItems.map((item) => (
            <DesktopNavLink key={item.label} href={item.href}>
              <span className="num">{item.code}.</span>
              {item.label}
            </DesktopNavLink>
          ))}
        </DesktopNav>

        {/* Desktop Actions */}
        <RightActions>
          <StatusPill>
            <StatusDot />
            ACCESO 24/7 ACTIVO
          </StatusPill>
          <Button asChild size="sm">
            <a href="#planes">
              ÚNETE AHORA
              <ArrowRight size={14} />
            </a>
          </Button>
        </RightActions>

        {/* Mobile Hamburger Toggle */}
        <MobileMenuBtn
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} color="#FF5E00" /> : <Menu size={24} color="#FFFFFF" />}
        </MobileMenuBtn>
      </NavContainer>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <MobileDrawerBackdrop onClick={() => setIsMenuOpen(false)}>
          <MobileDrawerContent onClick={(e) => e.stopPropagation()}>
            <DrawerMetaHeader>
              <span>[ NAVEGACIÓN PRINCIPAL ]</span>
              <span style={{ color: '#00E5FF' }}>● SEDE CENTRAL</span>
            </DrawerMetaHeader>

            <DrawerLinkList>
              {navItems.map((item) => (
                <DrawerLinkItem
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="index">/{item.code}</span>
                </DrawerLinkItem>
              ))}
            </DrawerLinkList>

            <Button
              asChild
              fullWidth
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#planes" style={{ justifyContent: 'space-between' }}>
                <span>INSCRÍBETE CON BENEFICIOS</span>
                <ArrowRight size={18} />
              </a>
            </Button>
          </MobileDrawerContent>
        </MobileDrawerBackdrop>
      )}
    </Header>
  );
};