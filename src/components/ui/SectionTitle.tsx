import type { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  children: ReactNode;
  tag?: string;
  className?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TagBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.primary.subtle};
  padding: 0.25rem 0.75rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary.main};
  text-transform: uppercase;
`;

const PingDot = styled.span`
  height: 0.375rem;
  width: 0.375rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.3;
      transform: scale(1.4);
    }
  }
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.1;

  .highlight {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, tag, className }) => {
  return (
    <Container className={className}>
      {tag && (
        <TagBadge>
          <PingDot />
          {tag}
        </TagBadge>
      )}
      <Heading>{children}</Heading>
    </Container>
  );
};