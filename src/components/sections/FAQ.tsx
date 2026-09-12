import { useState } from 'react';
import styled from 'styled-components';
import { faqs } from '../../constants';
import { SectionTitle, Button } from '../ui';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const Section = styled.section`
  position: relative;
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  border-top: 2px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.media.sm} {
    padding: 7rem 0;
  }
`;

const Container = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;

  ${({ theme }) => theme.media.sm} {
    padding: 0 1.5rem;
  }
`;

const HeaderBlock = styled.div`
  text-align: center;
  max-width: 40rem;
  margin: 0 auto 3rem auto;

  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.muted};
    margin-top: 1rem;
    line-height: 1.6;

    ${({ theme }) => theme.media.sm} {
      font-size: 1rem;
    }
  }
`;

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const AccordionItem = styled.div<{ $isOpen: boolean }>`
  border: 2px solid
    ${({ $isOpen, theme }) =>
      $isOpen ? theme.colors.primary.main : 'rgba(255, 255, 255, 0.1)'};
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.dark.card : 'rgba(16, 20, 29, 0.6)'};
  box-shadow: ${({ $isOpen, theme }) =>
    $isOpen ? theme.shadows.brutalPrimary : 'none'};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ $isOpen, theme }) =>
      $isOpen ? theme.colors.primary.main : 'rgba(255, 255, 255, 0.3)'};
  }
`;

const SummaryButton = styled.button`
  width: 100%;
  padding: 1.25rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  user-select: none;

  ${({ theme }) => theme.media.sm} {
    padding: 1.5rem;
  }
`;

const QuestionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  .index {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main};
    flex-shrink: 0;
  }

  .questionText {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    font-size: clamp(0.9375rem, 2vw, 1.125rem);
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.01em;
  }
`;

const IconToggleBox = styled.div<{ $isOpen: boolean }>`
  height: 2rem;
  width: 2rem;
  flex-shrink: 0;
  border: 2px solid
    ${({ $isOpen, theme }) =>
      $isOpen ? theme.colors.primary.main : 'rgba(255, 255, 255, 0.2)'};
  background-color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.primary.main : theme.colors.dark.surface};
  color: ${({ $isOpen }) => ($isOpen ? '#000000' : '#94A3B8')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
`;

const AnswerBox = styled.div`
  padding: 0.5rem 1.25rem 1.5rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text.secondary};

  ${({ theme }) => theme.media.sm} {
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    font-size: 0.9375rem;
  }
`;

const SupportBox = styled.div`
  margin-top: 2.5rem;
  padding: 1.5rem;
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
  }

  .textGroup {
    h4 {
      font-family: ${({ theme }) => theme.fonts.display};
      font-weight: 700;
      font-size: 1.125rem;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 0.25rem;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.body};
      font-size: 0.8125rem;
      color: ${({ theme }) => theme.colors.text.muted};
    }
  }
`;

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq">
      <Container>
        <HeaderBlock>
          <SectionTitle tag="05 // RESOLUCIÓN INMEDIATA">
            PREGUNTAS <span className="highlight">FRECUENTES</span>
          </SectionTitle>
          <p>
            Todo lo que necesitas saber sobre horarios, biometría, congelamiento y beneficios.
          </p>
        </HeaderBlock>

        <AccordionList>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AccordionItem key={idx} $isOpen={isOpen}>
                <SummaryButton
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <QuestionGroup>
                    <span className="index">/{String(idx + 1).padStart(2, '0')}</span>
                    <span className="questionText">{faq.q}</span>
                  </QuestionGroup>

                  <IconToggleBox $isOpen={isOpen}>
                    {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                  </IconToggleBox>
                </SummaryButton>

                {isOpen && (
                  <AnswerBox>
                    <p>{faq.a}</p>
                  </AnswerBox>
                )}
              </AccordionItem>
            );
          })}
        </AccordionList>

        <SupportBox>
          <div className="textGroup">
            <h4>¿TIENES OTRA PREGUNTA?</h4>
            <p>Nuestro equipo de soporte te responde en menos de 10 minutos.</p>
          </div>
          <Button asChild size="sm">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageCircle size={16} />
              <span>CONSULTA DIRECTA</span>
            </a>
          </Button>
        </SupportBox>
      </Container>
    </Section>
  );
};