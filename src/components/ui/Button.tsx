import { forwardRef, type ButtonHTMLAttributes, type ElementType } from 'react';
import styled, { css } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

export type ButtonVariant = 'default' | 'cyan' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  asChild?: boolean;
}

const variantStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #000000;
    border: 2px solid #000000;
    box-shadow: ${({ theme }) => theme.shadows.brutalWhite};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light};
      box-shadow: ${({ theme }) => theme.shadows.brutalCyan};
    }
  `,
  cyan: css`
    background-color: ${({ theme }) => theme.colors.cyan.main};
    color: #000000;
    border: 2px solid #000000;
    box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.cyan.light};
    }
  `,
  outline: css`
    background-color: rgba(16, 20, 29, 0.85);
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    box-shadow: ${({ theme }) => theme.shadows.brutalBorder};

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.dark.surface};
    color: #FFFFFF;
    border: 2px solid rgba(255, 255, 255, 0.1);

    &:hover {
      border-color: rgba(255, 255, 255, 0.3);
      background-color: ${({ theme }) => theme.colors.dark.elevated};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.secondary};
    border: 2px solid transparent;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
      background-color: rgba(255, 255, 255, 0.05);
    }

    &:active {
      transform: none !important;
    }
  `,
  link: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary.main};
    border: none;
    padding: 0;
    height: auto;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      transform: none !important;
    }
  `,
};

const sizeStyles = {
  sm: css`
    height: 2.25rem;
    padding: 0 0.875rem;
    font-size: 0.75rem;
  `,
  default: css`
    height: 2.75rem;
    padding: 0 1.35rem;
    font-size: 0.8125rem;
  `,
  lg: css`
    height: 3.25rem;
    padding: 0 2rem;
    font-size: 0.9375rem;
    box-shadow: ${({ theme }) => theme.shadows.brutalPrimary};
  `,
  icon: css`
    height: 2.75rem;
    width: 2.75rem;
    padding: 0;
  `,
};

/* Shared base styles applied to both <button> and <Slot> (asChild) */
const baseStyles = css<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none !important;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}>`
  ${baseStyles}
`;

const StyledSlot = styled(Slot).withConfig({
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}>`
  ${baseStyles}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', fullWidth = false, asChild = false, className, ...props }, ref) => {
    const Comp = (asChild ? StyledSlot : StyledButton) as ElementType;
    return (
      <Comp
        ref={ref}
        className={className}
        $variant={variant}
        $size={size}
        $fullWidth={fullWidth}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';