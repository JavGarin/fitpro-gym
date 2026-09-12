import { useState } from 'react';
import styled from 'styled-components';
import { Dumbbell, Mail, MapPin, Phone, ChevronDown, ArrowUpRight } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark.card};
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
`;

const TopBar = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 1rem;
  max-width: 80rem;
  margin: 0 auto;

  ${({ theme }) => theme.media.sm} {
    padding: 2rem 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 2rem;
  }
`;

const TopBarInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    align-items: center;
  }
`;

const BrandBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .iconBox {
    height: 2.5rem;
    width: 2.5rem;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme }) => theme.shadows.brutalDark};
  }

  .brandName {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 900;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: -0.01em;

    .dot {
      color: ${({ theme }) => theme.colors.primary.main};
      font-family: ${({ theme }) => theme.fonts.mono};
    }
  }

  .metaSub {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6875rem;
    color: ${({ theme }) => theme.colors.text.muted};
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
`;

const TopActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.cyan.glow};
    background-color: ${({ theme }) => theme.colors.cyan.subtle};
    padding: 0.35rem 0.75rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.cyan.main};
    text-transform: uppercase;
    font-weight: 700;

    .dot {
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.cyan.main};
    }
  }

  .joinBtn {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    color: #000000;
    background-color: ${({ theme }) => theme.colors.primary.main};
    padding: 0.45rem 0.875rem;
    border: 2px solid #000000;
    box-shadow: ${({ theme }) => theme.shadows.brutalWhite};
    transition: all ${({ theme }) => theme.transitions.fast};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

const MainContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem 3rem 1rem;

  ${({ theme }) => theme.media.sm} {
    padding: 3rem 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 3rem 2rem;
  }
`;

/* MOBILE COLLAPSIBLE ACCORDION */
const MobileCollapsibleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;

const AccordionBlock = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(29, 35, 51, 0.3);
`;

const AccordionHeaderBtn = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: #FFFFFF;
  cursor: pointer;

  .titleWithNum {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .num {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
    transition: transform ${({ theme }) => theme.transitions.fast};
  }
`;

const AccordionBody = styled.div`
  padding: 0.25rem 1rem 1rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.muted};

  a {
    transition: color ${({ theme }) => theme.transitions.fast};
    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  .hoursRow {
    display: flex;
    justify-content: space-between;
    .val { color: #FFFFFF; }
  }

  .badge247 {
    padding: 0.5rem;
    border: 1px solid rgba(255, 94, 0, 0.4);
    background-color: rgba(255, 94, 0, 0.1);
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

/* DESKTOP 4-COLUMNS GRID */
const DesktopGrid = styled.div`
  display: none;

  ${({ theme }) => theme.media.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  h4 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.muted};
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.muted};

    a {
      transition: color ${({ theme }) => theme.transitions.fast};
      &:hover { color: #FFFFFF; }
    }

    .contactItem {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.text.secondary};

      svg {
        color: ${({ theme }) => theme.colors.primary.main};
        flex-shrink: 0;
      }
      &:hover { color: ${({ theme }) => theme.colors.primary.main}; }
    }

    .timeRow {
      display: flex;
      justify-content: space-between;
      span.val { color: #FFFFFF; }
    }
  }

  .pro247Badge {
    border: 1px solid rgba(255, 94, 0, 0.4);
    background-color: rgba(255, 94, 0, 0.1);
    color: ${({ theme }) => theme.colors.primary.main};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6875rem;
    font-weight: 700;
    padding: 0.35rem;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

const BottomBar = styled.div`
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.text.subtle};

  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: ${({ theme }) => theme.colors.text.muted};
      transition: color ${({ theme }) => theme.transitions.fast};
      &:hover { color: ${({ theme }) => theme.colors.primary.main}; }
    }
  }
`;

export const Footer = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    links: false,
    contact: false,
    hours: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <FooterWrapper>
      <TopBar>
        <TopBarInner>
          <BrandBlock>
            <div className="iconBox">
              <Dumbbell size={20} color="#000000" />
            </div>
            <div>
              <div className="brandName">
                FITPRO GYM<span className="dot">.</span>
              </div>
              <div className="metaSub">SANTIAGO // EST. 2010 // HIGH PERFORMANCE</div>
            </div>
          </BrandBlock>

          <TopActions>
            <div className="status">
              <span className="dot" />
              SEDE OPERATIVA 24/7
            </div>
            <a href="#planes" className="joinBtn">
              <span>INICIAR AHORA</span>
              <ArrowUpRight size={14} />
            </a>
          </TopActions>
        </TopBarInner>
      </TopBar>

      <MainContent>
        {/* MOBILE VIEW: Collapsible Minimalist Accordions (< sm) */}
        <MobileCollapsibleSection>
          {/* Section 1: Enlaces */}
          <AccordionBlock>
            <AccordionHeaderBtn
              type="button"
              onClick={() => toggleSection('links')}
            >
              <div className="titleWithNum">
                <span className="num">01.</span>
                <span>ENLACES RÁPIDOS</span>
              </div>
              <ChevronDown
                size={16}
                style={{
                  transform: openSections.links ? 'rotate(180deg)' : 'none',
                }}
              />
            </AccordionHeaderBtn>
            {openSections.links && (
              <AccordionBody>
                <a href="#inicio">→ INICIO</a>
                <a href="#servicios">→ SERVICIOS Y ÁREAS</a>
                <a href="#planes">→ PLANES Y TARIFAS</a>
                <a href="#galería">→ GALERÍA FOTOGRÁFICA</a>
                <a href="#faq">→ PREGUNTAS FRECUENTES</a>
              </AccordionBody>
            )}
          </AccordionBlock>

          {/* Section 2: Contacto */}
          <AccordionBlock>
            <AccordionHeaderBtn
              type="button"
              onClick={() => toggleSection('contact')}
            >
              <div className="titleWithNum">
                <span className="num">02.</span>
                <span>CONTACTO & SEDE</span>
              </div>
              <ChevronDown
                size={16}
                style={{
                  transform: openSections.contact ? 'rotate(180deg)' : 'none',
                }}
              />
            </AccordionHeaderBtn>
            {openSections.contact && (
              <AccordionBody>
                <a href="tel:+56912345678" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} color="#FF5E00" />
                  <span>+56 9 1234 5678</span>
                </a>
                <a href="mailto:info@fitpro.cl" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} color="#FF5E00" />
                  <span>info@fitpro.cl</span>
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <MapPin size={14} color="#FF5E00" style={{ marginTop: '2px' }} />
                  <span>Av. Providencia 1234, Providencia, Santiago</span>
                </div>
              </AccordionBody>
            )}
          </AccordionBlock>

          {/* Section 3: Horarios */}
          <AccordionBlock>
            <AccordionHeaderBtn
              type="button"
              onClick={() => toggleSection('hours')}
            >
              <div className="titleWithNum">
                <span className="num">03.</span>
                <span>HORARIOS DE ATENCIÓN</span>
              </div>
              <ChevronDown
                size={16}
                style={{
                  transform: openSections.hours ? 'rotate(180deg)' : 'none',
                }}
              />
            </AccordionHeaderBtn>
            {openSections.hours && (
              <AccordionBody>
                <div className="hoursRow">
                  <span>LUNES - VIERNES:</span>
                  <span className="val">6:00 - 23:00</span>
                </div>
                <div className="hoursRow">
                  <span>SÁBADOS:</span>
                  <span className="val">8:00 - 20:00</span>
                </div>
                <div className="hoursRow">
                  <span>DOMINGOS:</span>
                  <span className="val">9:00 - 18:00</span>
                </div>
                <div className="badge247">PLANES PRO / ELITE: ACCESO 24/7</div>
              </AccordionBody>
            )}
          </AccordionBlock>
        </MobileCollapsibleSection>

        {/* DESKTOP VIEW: Minimalist Architectural Grid (hidden sm:grid) */}
        <DesktopGrid>
          <FooterCol>
            <h4>[ FITPRO GYM ]</h4>
            <p>
              Transformando atletas y acondicionando campeones desde 2010 en el corazón de Providencia.
            </p>
            <div
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '0.6875rem',
                color: '#64748B',
                marginTop: '0.5rem',
              }}
            >
              SISTEMA BIO-PASS CERTIFICADO
            </div>
          </FooterCol>

          <FooterCol>
            <h4>[ NAVEGACIÓN ]</h4>
            <ul>
              <li><a href="#inicio">01 // INICIO</a></li>
              <li><a href="#servicios">02 // SERVICIOS</a></li>
              <li><a href="#planes">03 // PLANES</a></li>
              <li><a href="#galería">04 // GALERÍA</a></li>
              <li><a href="#faq">05 // FAQ</a></li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h4>[ CONTACTO ]</h4>
            <ul>
              <li>
                <a href="tel:+56912345678" className="contactItem">
                  <Phone size={14} />
                  <span>+56 9 1234 5678</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@fitpro.cl" className="contactItem">
                  <Mail size={14} />
                  <span>info@fitpro.cl</span>
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#94A3B8' }}>
                <MapPin size={14} style={{ color: '#FF5E00', marginTop: '2px' }} />
                <span>
                  Av. Providencia 1234<br />
                  Santiago, Chile
                </span>
              </li>
            </ul>
          </FooterCol>

          <FooterCol>
            <h4>[ HORARIOS ]</h4>
            <ul>
              <li className="timeRow">
                <span>LUN - VIE:</span>
                <span className="val">6:00 - 23:00</span>
              </li>
              <li className="timeRow">
                <span>SÁBADO:</span>
                <span className="val">8:00 - 20:00</span>
              </li>
              <li className="timeRow">
                <span>DOMINGO:</span>
                <span className="val">9:00 - 18:00</span>
              </li>
            </ul>
            <div className="pro247Badge">PRO & ELITE: ACCESO 24/7</div>
          </FooterCol>
        </DesktopGrid>

        <BottomBar>
          <p>© 2025 FITPRO GYM // TODOS LOS DERECHOS RESERVADOS. SANTIAGO, CHILE.</p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              [ INSTAGRAM ]
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              [ TIKTOK ]
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              [ YOUTUBE ]
            </a>
          </div>
        </BottomBar>
      </MainContent>
    </FooterWrapper>
  );
};