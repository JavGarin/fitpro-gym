import { useState } from 'react';
import styled from 'styled-components';
import { plans, type Plan } from '../../constants';
import { Phone, Check, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import {
  Button,
  SectionTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui';

const Section = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;

  ${({ theme }) => theme.media.sm} {
    padding: 7rem 0;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;

  ${({ theme }) => theme.media.sm} {
    padding: 0 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    padding: 0 2rem;
  }
`;

const HeaderBlock = styled.div`
  text-align: center;
  max-width: 44rem;
  margin: 0 auto 3rem auto;

  ${({ theme }) => theme.media.sm} {
    margin-bottom: 4rem;
  }
`;

const HeaderParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  color: ${({ theme }) => theme.colors.text.muted};
  margin-top: 1rem;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm} {
    font-size: clamp(1rem, 2vw, 1.125rem);
  }
`;

const BillingToggleWrapper = styled.div`
  margin-top: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.375rem;
  background-color: ${({ theme }) => theme.colors.dark.card};
  border: 2px solid rgba(255, 255, 255, 0.15);
  box-shadow: ${({ theme }) => theme.shadows.brutalDark};
`;

const BillingToggleButton = styled.button<{ $active: boolean; $isAnnual?: boolean }>`
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  ${({ $active, $isAnnual, theme }) =>
    $active
      ? `
    background-color: ${$isAnnual ? theme.colors.cyan.main : theme.colors.primary.main};
    color: #000000;
    border: 2px solid #000000;
    box-shadow: ${theme.shadows.brutalDark};
  `
      : `
    background-color: transparent;
    color: ${theme.colors.text.muted};
    border: 2px solid transparent;
    &:hover { color: #FFFFFF; }
  `}

  .discountBadge {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #000000;
    font-size: 0.625rem;
    padding: 0.125rem 0.35rem;
    font-weight: 900;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  align-items: stretch;
  padding-top: 1.5rem;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    gap: 2rem;
  }
`;

const FloatingCard = styled.div<{ $isFeatured: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.75rem;
  border: 2px solid
    ${({ $isFeatured, theme }) =>
      $isFeatured ? theme.colors.primary.main : 'rgba(255, 255, 255, 0.15)'};
  box-shadow: ${({ $isFeatured, theme }) =>
    $isFeatured ? theme.shadows.brutalPrimary : theme.shadows.brutalDark};
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.35s ease, border-color 0.25s ease;
  will-change: transform;

  ${({ theme }) => theme.media.sm} {
    padding: 2rem;
  }

  ${({ $isFeatured, theme }) =>
    $isFeatured &&
    `
    ${theme.media.lg} {
      transform: translateY(-0.75rem);
      z-index: 10;
    }
  `}

  &:hover {
    transform: translateY(-8px) scale(1.015);
    border-color: ${({ $isFeatured, theme }) =>
      $isFeatured ? theme.colors.primary.light : 'rgba(255, 255, 255, 0.4)'};
    box-shadow: ${({ $isFeatured, theme }) =>
      $isFeatured ? theme.shadows.brutalPrimaryLg : theme.shadows.brutalWhite};
  }
`;

const PopularRibbon = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #000000;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 900;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.375rem 1rem;
  border: 2px solid #000000;
  box-shadow: ${({ theme }) => theme.shadows.brutalDark};
  display: flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;
`;

const CardMetaHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .codeTag {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.muted};
    letter-spacing: 0.05em;
  }

  .pingDot {
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const PlanTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 900;
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
`;

const PlanHighlight = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 1.5rem;
`;

const PriceBox = styled.div`
  padding: 1.25rem 0;
  margin: 1rem 0;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.02);

  .valRow {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
  }

  .currency {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .amount {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 900;
    font-size: clamp(2.25rem, 4vw, 3rem);
    color: #FFFFFF;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .period {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.muted};
    text-transform: uppercase;
  }

  .savings {
    display: block;
    margin-top: 0.35rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6875rem;
    color: ${({ theme }) => theme.colors.cyan.main};
  }
`;

const FeatureList = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  .label {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .item {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.4;

    .iconBox {
      margin-top: 0.125rem;
      height: 1rem;
      width: 1rem;
      flex-shrink: 0;
      background-color: rgba(255, 94, 0, 0.2);
      border: 1px solid ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.main};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const TrustBar = styled.div`
  margin-top: 3rem;
  padding: 1.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.dark.card};
  border: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;

  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    text-align: left;
    padding: 1.25rem 1.5rem;
  }

  .left {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.text.secondary};
    word-break: break-word;
    overflow-wrap: break-word;
    text-align: left;

    .indicator {
      height: 0.75rem;
      width: 0.75rem;
      min-width: 0.75rem;
      background-color: ${({ theme }) => theme.colors.cyan.main};
      margin-top: 0.125rem;
    }

    ${({ theme }) => theme.media.sm} {
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      align-items: center;

      .indicator {
        margin-top: 0;
      }
    }
  }

  .right {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: underline;
    text-underline-offset: 4px;
    display: flex;
    align-items: center;
    gap: 0.35rem;
    white-space: nowrap;

    &:hover {
      color: #FFFFFF;
    }
  }
`;

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isAnnual, setIsAnnual] = useState(false);

  const formatCLP = (val: number) => {
    return new Intl.NumberFormat('es-CL').format(val);
  };

  return (
    <Section id="planes">
      <Container>
        <HeaderBlock>
          <SectionTitle tag="03 // MEMBRESÍAS">
            PLANES DE <span className="highlight">ALTO RENDIMIENTO</span>
          </SectionTitle>
          <HeaderParagraph>
            Sin letras chicas ni contratos ocultos. Elige tu nivel de compromiso y transforma tu físico hoy.
          </HeaderParagraph>

          <BillingToggleWrapper>
            <BillingToggleButton
              type="button"
              $active={!isAnnual}
              onClick={() => setIsAnnual(false)}
            >
              MENSUAL
            </BillingToggleButton>
            <BillingToggleButton
              type="button"
              $active={isAnnual}
              $isAnnual
              onClick={() => setIsAnnual(true)}
            >
              <span>ANUAL</span>
              <span className="discountBadge">-20%</span>
            </BillingToggleButton>
          </BillingToggleWrapper>
        </HeaderBlock>

        <CardsGrid>
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isFeatured = plan.popular;

            return (
              <FloatingCard key={plan.id} $isFeatured={isFeatured}>
                {isFeatured && (
                  <PopularRibbon>
                    <Sparkles size={14} />
                    <span>{plan.badge || 'MÁS ELEGIDO'}</span>
                  </PopularRibbon>
                )}

                <div>
                  <CardMetaHeader>
                    <span className="codeTag">
                      {plan.code} // {plan.tag}
                    </span>
                    {isFeatured && <span className="pingDot" />}
                  </CardMetaHeader>

                  <PlanTitle>{plan.name}</PlanTitle>
                  <PlanHighlight>{plan.highlight}</PlanHighlight>

                  <PriceBox>
                    <div className="valRow">
                      <span className="currency">$</span>
                      <span className="amount">{formatCLP(price)}</span>
                      <span className="period">/ {plan.period}</span>
                    </div>
                    {isAnnual && (
                      <span className="savings">
                        Facturado anualmente (Ahorras ${formatCLP((plan.priceMonthly - plan.priceAnnual) * 12)}/año)
                      </span>
                    )}
                  </PriceBox>

                  <FeatureList>
                    <span className="label">INCLUYE:</span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="item">
                        <div className="iconBox">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </FeatureList>
                </div>

                <div style={{ paddingTop: '1rem', marginTop: 'auto' }}>
                  <Button
                    fullWidth
                    variant={isFeatured ? 'default' : 'outline'}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    <span>SELECCIONAR PLAN</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </FloatingCard>
            );
          })}
        </CardsGrid>

        <TrustBar>
          <div className="left">
            <span className="indicator" />
            <span>GARANTÍA DE 7 DÍAS // CANCELACIÓN SIN PENALIZACIÓN EN PLANES MENSUALES</span>
          </div>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="right"
          >
            <MessageSquare size={16} />
            <span>¿Dudas? Habla con un asesor</span>
          </a>
        </TrustBar>

        {/* Modal de confirmación */}
        <Dialog
          open={!!selectedPlan}
          onOpenChange={(isOpen) => !isOpen && setSelectedPlan(null)}
        >
          <DialogContent>
            <DialogHeader>
              <div
                style={{
                  border: '1px solid #FF5E00',
                  backgroundColor: 'rgba(255, 94, 0, 0.1)',
                  padding: '0.25rem 0.5rem',
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: '0.75rem',
                  color: '#FF5E00',
                  fontWeight: 700,
                  width: 'fit-content',
                }}
              >
                INSCRIPCIÓN // {selectedPlan?.code}
              </div>
              <DialogTitle>¡VAMOS POR ESE OBJETIVO!</DialogTitle>
              <DialogDescription>
                Has seleccionado el{' '}
                <strong style={{ color: '#FFFFFF' }}>{selectedPlan?.name}</strong> en modalidad{' '}
                <strong style={{ color: '#00E5FF' }}>
                  {isAnnual ? 'Anual (-20% OFF)' : 'Mensual'}
                </strong>{' '}
                por un valor de{' '}
                <strong style={{ color: '#FF5E00' }}>
                  ${selectedPlan ? formatCLP(isAnnual ? selectedPlan.priceAnnual : selectedPlan.priceMonthly) : ''}{' '}
                  CLP/{selectedPlan?.period}
                </strong>
                .
              </DialogDescription>
            </DialogHeader>

            <div
              style={{
                padding: '0.875rem',
                backgroundColor: '#1D2333',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '0.75rem',
                color: '#CBD5E1',
                lineHeight: 1.5,
              }}
            >
              <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '0.25rem' }}>
                BENEFICIO EXCLUSIVO WEB:
              </div>
              <div>✓ Matrícula 100% Bonificada ($0)</div>
              <div>✓ Evaluación física + Bioimpedancia de regalo</div>
            </div>

            <DialogFooter>
              <Button asChild size="lg">
                <a
                  href={`https://wa.me/56912345678?text=Hola!%20Quiero%20inscribirme%20en%20el%20${encodeURIComponent(selectedPlan?.name || '')}%20de%20FitPro%20Gym`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <MessageSquare size={16} />
                  <span>CONTINUAR POR WHATSAPP</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="tel:+56912345678"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Phone size={16} />
                  <span>LLAMAR AHORA</span>
                </a>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  );
};