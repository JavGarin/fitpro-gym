import { Dumbbell, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary-dark/10 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">FitPro Gym</span>
            </div>
            <p className="text-gray-400">
              Transformando vidas desde 2010 en Santiago de Chile
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-primary transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-primary transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@fitpro.cl</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>
                  Av. Providencia 1234
                  <br />
                  Providencia, Santiago
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Horarios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lun - Vie: 6:00 - 23:00</li>
              <li>Sábado: 8:00 - 20:00</li>
              <li>Domingo: 9:00 - 18:00</li>
              <li className="text-primary font-semibold">
                Planes Pro/Elite: 24/7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 FitPro Gym. Todos los derechos reservados. Santiago,
            Chile
          </p>
        </div>
      </div>
    </footer>
  );
};