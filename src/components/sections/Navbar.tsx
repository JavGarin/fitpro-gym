import { Dumbbell, Menu, X } from "lucide-react";
import { useMenu } from "../../hooks/useMenu";
import { useScroll } from "../../hooks/useScroll";
import { Button } from "../ui";

export const Navbar = () => {
  const scrolled = useScroll();
  const { isMenuOpen, toggleMenu, setIsMenuOpen } = useMenu();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              FitPro Gym
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Inicio", "Servicios", "Planes", "Galería", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <Button className="rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Únete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark/98 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {["Inicio", "Servicios", "Planes", "Galería", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full rounded-full font-semibold">
              Únete Ahora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};