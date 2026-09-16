# FitPro Gym - Landing Page

A modern, responsive, and attractive landing page for a fictional gym named **FitPro**. Built with cutting-edge web technologies to deliver a smooth user experience and optimal performance.

---

### Preview

![FitPro Gym Website Preview](./public/screenshot_opengraph.avif)

<p align="center">
  <img src="./public/mobile_screenshot.avif" alt="FitPro Gym - Vista Mobile" width="320" />
</p>

> 📱 **Vista Mobile** — Diseño 100% responsive optimizado para dispositivos móviles.

---

## ➤ Tech Stack

This project is built with a modern and efficient stack, focusing on performance, mobile-first responsiveness, and developer experience.

- **Package Manager:** [pnpm](https://pnpm.io/) (v11.3+)
- **Frontend Framework:** [React](https://react.dev/) (v18.3)
- **Development Environment:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **CSS Styling & Design System:** [Styled Components](https://styled-components.com/) + CSS Modules (`*.module.css`) + Typed Theme System
- **Typography:** Syne, Plus Jakarta Sans, Space Grotesk (Google Fonts)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (accessible dialog and slot primitives)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## ⚡ Quick Start (pnpm)

```bash
# Install dependencies with pnpm
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

---

## 📂 Project Structure

```
/gym-landing
├── assets/              # Optimized static assets (images, videos, posters).
├── src/
│   ├── components/      # Reusable React components.
│   │   ├── sections/    # Main page sections (Navbar, Hero, Features, Pricing, Gallery, FAQ, Footer).
│   │   └── ui/          # Accessible UI primitives (Button, Modal, SectionTitle).
│   ├── constants/       # Typed application constants (plans, FAQs, features, gallery).
│   ├── hooks/           # Custom React hooks (useScroll, useMenu, useBodyScrollLock).
│   ├── lib/             # Utility functions (cn classnames).
│   ├── styles/          # Styled-components theme, global styles and CSS modules:
│   │   ├── theme.ts         # Strongly typed Neo-Brutalist design tokens.
│   │   ├── styled.d.ts      # TypeScript declarations for DefaultTheme.
│   │   ├── GlobalStyles.ts  # Theme-aware resets, scrollbars and selection.
│   │   └── cyber.module.css # CSS Module for GPU-accelerated background patterns.
│   ├── App.tsx          # Main semantic layout assembler.
│   ├── main.tsx         # React application entry point with ThemeProvider.
│   └── index.css        # Minimal global base styles.
├── pnpm-lock.yaml       # pnpm dependency lockfile.
├── pnpm-workspace.yaml  # pnpm workspace configuration.
├── package.json         # Project metadata and pnpm packageManager field.
└── vite.config.ts       # Vite bundler configuration.
```

---

© 2025 Javier Garin Software developer