export const theme = {
  colors: {
    bg: '#090B0E',
    dark: {
      default: '#090B0E',
      card: '#10141D',
      elevated: '#171C28',
      surface: '#1D2333',
      border: 'rgba(255, 255, 255, 0.12)',
      borderHover: 'rgba(255, 255, 255, 0.35)',
    },
    primary: {
      main: '#FF5E00',
      light: '#FF7E33',
      dark: '#D94B00',
      glow: 'rgba(255, 94, 0, 0.35)',
      subtle: 'rgba(255, 94, 0, 0.1)',
    },
    cyan: {
      main: '#00E5FF',
      light: '#5CF0FF',
      dark: '#00B8CC',
      glow: 'rgba(0, 229, 255, 0.35)',
      subtle: 'rgba(0, 229, 255, 0.1)',
    },
    accent: {
      lime: '#D2FF00',
      purple: '#8B5CF6',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E2E8F0',
      muted: '#94A3B8',
      subtle: '#64748B',
    },
  },
  fonts: {
    display: "'Syne', sans-serif",
    body: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    mono: "'Space Grotesk', monospace",
  },
  shadows: {
    brutalPrimary: '4px 4px 0px #FF5E00',
    brutalPrimaryLg: '6px 6px 0px #FF5E00',
    brutalCyan: '4px 4px 0px #00E5FF',
    brutalWhite: '4px 4px 0px #FFFFFF',
    brutalDark: '5px 5px 0px #000000',
    brutalBorder: '3px 3px 0px rgba(255, 255, 255, 0.2)',
    glowPrimary: '0 0 30px -5px rgba(255, 94, 0, 0.45)',
    glowCyan: '0 0 30px -5px rgba(0, 229, 255, 0.45)',
  },
  breakpoints: {
    xs: '360px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  media: {
    xs: '@media (min-width: 360px)',
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    mobileOnly: '@media (max-width: 639px)',
    tabletOnly: '@media (min-width: 640px) and (max-width: 1023px)',
  },
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    spring: '0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export type AppTheme = typeof theme;
