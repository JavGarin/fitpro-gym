import { forwardRef, type ElementRef, type ComponentPropsWithoutRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const StyledOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 200ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const StyledContent = styled(DialogPrimitive.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: min(92vw, 32rem);
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${({ theme }) => theme.colors.dark.card};
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};
  padding: 1.5rem;
  animation: ${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);

  ${({ theme }) => theme.media.sm} {
    padding: 2rem;
  }
`;

const CloseButton = styled(DialogPrimitive.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2.25rem;
  width: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark.surface};
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: #FFFFFF;
  }
`;

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>((props, ref) => <StyledOverlay ref={ref} {...props} />);
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <StyledContent ref={ref} {...props}>
      {children}
      <CloseButton aria-label="Cerrar modal">
        <X size={18} />
      </CloseButton>
    </StyledContent>
  </DialogPortal>
));
DialogContent.displayName = 'DialogContent';

const DialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

const DialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${({ theme }) => theme.media.sm} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const DialogTitle = styled(DialogPrimitive.Title)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const DialogDescription = styled(DialogPrimitive.Description)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.muted};
`;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};