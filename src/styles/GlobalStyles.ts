import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-bg: ${({ theme }) => theme.colors.bg};
    --color-primary: ${({ theme }) => theme.colors.primary.main};
    --color-cyan: ${({ theme }) => theme.colors.cyan.main};
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text.primary};
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Athletic dark custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #090B0E;
  }
  ::-webkit-scrollbar-thumb {
    background: #1F2637;
    border-radius: 4px;
    border: 2px solid #090B0E;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.main};
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #000000;
  }

  /* Accessibility skip link */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  .sr-only:focus {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 9999;
    width: auto;
    height: auto;
    padding: 0.75rem 1.25rem;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #000;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 700;
    border: 2px solid #000;
    box-shadow: ${({ theme }) => theme.shadows.brutalWhite};
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
