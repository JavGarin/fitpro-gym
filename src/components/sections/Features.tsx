import styled from 'styled-components';
import { features } from '../../constants';
import { SectionTitle } from '../ui';
import { ArrowUpRight } from 'lucide-react';

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

const HeaderRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
`;

const HeaderDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.muted};
  max-width: 28rem;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm} {
    font-size: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.dark.card};
  border: 2px solid rgba(255, 255, 255, 0.12);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 4px 0px 0px rgba(255, 255, 255, 0.06);
  transition: all ${({ theme }) => theme.transitions.normal};

  ${({ theme }) => theme.media.sm} {
    padding: 1.75rem;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};
  }
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.text.muted};
    transition: color ${({ theme }) => theme.transitions.fast};
  }

  .accentBlock {
    height: 0.5rem;
    width: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primary.main};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  ${Card}:hover & {
    .code {
      color: ${({ theme }) => theme.colors.primary.main};
    }
    .accentBlock {
      opacity: 1;
    }
  }
`;

const IconBox = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border: 2px solid #000000;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.brutalWhite};
  transition: all ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    box-shadow: ${({ theme }) => theme.shadows.brutalCyan};
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 900;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  color: #FFFFFF;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  transition: color ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const CardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.muted};
`;

const CardFooter = styled.div`
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.subtle};
  transition: color ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.cyan.main};
  }
`;

export const Features = () => {
  return (
    <Section id="servicios">
      <Container>
        <HeaderRow>
          <SectionTitle tag="02 // PILARES DE ÉLITE">
            ¿POR QUÉ ELEGIR <span className="highlight">FITPRO?</span>
          </SectionTitle>
          <HeaderDesc>
            Fusionamos ciencia aplicada al entrenamiento con equipamiento de nivel olímpico
            para maximizar cada hora de tu tiempo.
          </HeaderDesc>
        </HeaderRow>

        <Grid>
          {features.map((feature, idx) => (
            <Card key={idx}>
              <div>
                <CardMeta>
                  <span className="code">
                    {feature.code} // {feature.tag}
                  </span>
                  <span className="accentBlock" />
                </CardMeta>

                <IconBox>
                  <feature.icon size={26} strokeWidth={2.5} />
                </IconBox>

                <CardTitle>{feature.title}</CardTitle>
                <CardDesc>{feature.desc}</CardDesc>
              </div>

              <CardFooter>
                <span>ESTÁNDAR CERTIFICADO</span>
                <ArrowUpRight size={16} />
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};