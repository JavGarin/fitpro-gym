import {
  Navbar,
  Hero,
  Features,
  Pricing,
  Gallery,
  FAQ,
  Footer,
} from "./components/sections";

export default function App() {
  return (
    <div className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}