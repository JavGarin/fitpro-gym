/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        primary: {
          DEFAULT: '#ff6600',
          light: '#ff8533',
          dark: '#cc5200',
        },
        secondary: {
          DEFAULT: '#007bff',
          light: '#3395ff',
          dark: '#0062cc',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        tilt: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(1deg)',
          },
        },
      },
    },
  },
  plugins: [],
}