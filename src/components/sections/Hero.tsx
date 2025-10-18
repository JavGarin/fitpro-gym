import { ChevronDown, Star, Trophy, Users } from "lucide-react";
import WomanGym from "../../../assets/video/womangym.mp4";
import { Button } from "../ui";

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/20 via-dark to-primary-light/10" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-dark rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-block">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                🔥 Ofertas Especiales de Otoño
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transforma tu
              <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Cuerpo y Mente
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              El gimnasio más moderno de Santiago. Equipamiento de última
              generación, entrenadores certificados y una comunidad que te
              motiva cada día.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50">
                Clase Gratis
              </Button>
              <Button variant="outline" size="lg" className="rounded-full font-semibold text-lg transition-all duration-300 border border-white/20">
                Ver Planes
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Users, label: "5000+", desc: "Miembros" },
                { icon: Trophy, label: "15+", desc: "Años" },
                { icon: Star, label: "4.9", desc: "Rating" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-1000 animate-tilt"></div>
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                loop
                autoPlay
                muted
              >
                <source src={WomanGym} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </a>
    </section>
  );
};