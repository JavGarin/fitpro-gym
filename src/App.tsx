import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { LoadingScreen } from './components/ui/LoadingScreen';

/* ═══════════════════════════════════════════════════════
   Lazy-loaded sections (below the fold).
   Reduces initial JS bundle — loaded on demand.
   ═══════════════════════════════════════════════════════ */
const Features = lazy(() =>
  import('./components/sections/Features').then((m) => ({ default: m.Features }))
);
const Pricing = lazy(() =>
  import('./components/sections/Pricing').then((m) => ({ default: m.Pricing }))
);
const Gallery = lazy(() =>
  import('./components/sections/Gallery').then((m) => ({ default: m.Gallery }))
);
const FAQ = lazy(() =>
  import('./components/sections/FAQ').then((m) => ({ default: m.FAQ }))
);
const Footer = lazy(() =>
  import('./components/sections/Footer').then((m) => ({ default: m.Footer }))
);

/* ═══════════════════════════════════════════════════════
   Invisible fallback for Suspense — avoids layout shift
   while lazy chunks download.
   ═══════════════════════════════════════════════════════ */
const SuspenseFallback = styled.div`
  min-height: 40vh;
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  width: 100%;
`;

export default function App() {
  return (
    <>
      {/* Premium Loading Splash */}
      <LoadingScreen minDisplay={1800} maxDisplay={3500} />

      <AppContainer>
        {/* Accessible skip to main content */}
        <a href="#main-content" className="sr-only">
          SALTAR AL CONTENIDO PRINCIPAL
        </a>

        {/* Eagerly loaded: above the fold */}
        <Navbar />

        <MainContent id="main-content">
          <Hero />

          {/* Lazy loaded: below the fold */}
          <Suspense fallback={<SuspenseFallback />}>
            <Features />
            <Pricing />
            <Gallery />
            <FAQ />
          </Suspense>
        </MainContent>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </AppContainer>
    </>
  );
}