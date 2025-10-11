import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Clock, Users, Trophy, MapPin, Phone, Mail, ChevronDown, Star, Calendar, Zap, Heart } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      name: 'Plan Básico',
      price: '24.990',
      period: 'mes',
      features: ['Acceso ilimitado', 'Área de pesas', 'Vestuarios premium', 'WiFi gratis'],
      popular: false
    },
    {
      name: 'Plan Pro',
      price: '39.990',
      period: 'mes',
      features: ['Todo Plan Básico', 'Clases grupales', 'Asesoría nutricional', 'App móvil', 'Acceso 24/7'],
      popular: true
    },
    {
      name: 'Plan Elite',
      price: '54.990',
      period: 'mes',
      features: ['Todo Plan Pro', 'Entrenador personal', 'Zona VIP', 'Masajes deportivos', 'Estacionamiento'],
      popular: false
    }
  ];

  const faqs = [
    {
      q: '¿Cuál es el horario de atención?',
      a: 'Estamos abiertos de Lunes a Viernes de 6:00 AM a 11:00 PM, Sábados de 8:00 AM a 8:00 PM y Domingos de 9:00 AM a 6:00 PM. Plan Pro y Elite tienen acceso 24/7.'
    },
    {
      q: '¿Ofrecen clases de prueba?',
      a: 'Sí, ofrecemos una clase de prueba gratuita para que conozcas nuestras instalaciones y servicios. Agenda tu visita.'
    },
    {
      q: '¿Necesito experiencia previa?',
      a: 'No, tenemos programas para todos los niveles. Nuestros entrenadores te guiarán desde el primer día.'
    },
    {
      q: '¿Puedo congelar mi membresía?',
      a: 'Sí, puedes congelar tu membresía por razones médicas o viajes, con un máximo de 2 meses al año.'
    }
  ];

  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                FitPro Gym
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Inicio', 'Servicios', 'Planes', 'Galería', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Únete Ahora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark/98 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-6 space-y-4">
              {['Inicio', 'Servicios', 'Planes', 'Galería', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold">
                Únete Ahora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-dark to-primary/10" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
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
                <span className="block bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Cuerpo y Mente
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                El gimnasio más moderno de Santiago. Equipamiento de última generación, entrenadores certificados y una comunidad que te motiva cada día.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50">
                  Clase Gratis
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20">
                  Ver Planes
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { icon: Users, label: '5000+', desc: 'Miembros' },
                  { icon: Trophy, label: '15+', desc: 'Años' },
                  { icon: Star, label: '4.9', desc: 'Rating' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.label}</div>
                    <div className="text-gray-400 text-sm">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Dumbbell className="w-48 h-48 text-white/20" />
                </div>
                <div className="absolute bottom-8 left-8 bg-dark/80 backdrop-blur-md p-6 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-2xl font-bold">150 BPM</div>
                      <div className="text-gray-400 text-sm">Ritmo Cardíaco</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#servicios" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </a>
      </section>

      {/* Features Section */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-dark to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué elegir
              <span className="text-primary"> FitPro?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ofrecemos todo lo que necesitas para alcanzar tus objetivos fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Equipamiento Premium',
                desc: 'Máquinas de última tecnología importadas directamente',
                color: 'from-primary to-orange-500'
              },
              {
                icon: Users,
                title: 'Entrenadores Expertos',
                desc: 'Profesionales certificados internacionalmente',
                color: 'from-blue-500 to-secondary'
              },
              {
                icon: Clock,
                title: 'Horarios Flexibles',
                desc: 'Abierto cuando tú lo necesites, 24/7 disponible',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Heart,
                title: 'Comunidad Activa',
                desc: 'Miles de miembros motivados como tú',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Planes <span className="text-primary">Flexibles</span>
            </h2>
            <p className="text-xl text-gray-400">
              Elige el plan perfecto para tu estilo de vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-primary shadow-2xl shadow-primary/30 scale-105'
                    : 'border-white/10 hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-primary">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary hover:bg-orange-600 text-white shadow-lg shadow-primary/50'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Seleccionar Plan
                </button>
              </div>
            ))}
          </div>

          {selectedPlan && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-dark border-2 border-primary rounded-3xl p-8 max-w-md w-full">
                <h3 className="text-2xl font-bold mb-4">¡Excelente elección!</h3>
                <p className="text-gray-300 mb-6">
                  Has seleccionado el <span className="text-primary font-bold">{selectedPlan}</span>.
                  Contáctanos para completar tu inscripción.
                </p>
                <div className="space-y-3">
                  <a href="tel:+56912345678" className="flex items-center justify-center space-x-2 bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
                    <Phone className="w-5 h-5" />
                    <span>Llamar Ahora</span>
                  </a>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galería" className="py-20 bg-gradient-to-b from-dark to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestras <span className="text-primary">Instalaciones</span>
            </h2>
            <p className="text-xl text-gray-400">
              Espacios diseñados para tu comodidad y rendimiento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Zona de Pesas', desc: '500m² de área libre' },
              { title: 'Cardio Premium', desc: 'Equipos Technogym' },
              { title: 'Clases Grupales', desc: 'Salas climatizadas' },
              { title: 'Zona Funcional', desc: 'CrossFit & HIIT' },
              { title: 'Spinning', desc: '30 bicicletas' },
              { title: 'Vestuarios', desc: 'Duchas y lockers' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/60 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="w-24 h-24 text-white/30 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Todo lo que necesitas saber
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-primary group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/10 border-t border-white/10 py-12">
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
                <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
                <li><a href="#planes" className="hover:text-primary transition-colors">Planes</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
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
                  <span>Av. Providencia 1234<br/>Providencia, Santiago</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-primary">Horarios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lun - Vie: 6:00 - 23:00</li>
                <li>Sábado: 8:00 - 20:00</li>
                <li>Domingo: 9:00 - 18:00</li>
                <li className="text-primary font-semibold">Planes Pro/Elite: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FitPro Gym. Todos los derechos reservados. Santiago, Chile</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
