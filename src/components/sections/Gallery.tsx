import { gallery } from "../../constants";
import { SectionTitle } from "../ui";

export const Gallery = () => {
  return (
    <section
      id="galería"
      className="py-20 bg-gradient-to-b from-dark to-secondary-light/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle>
            Nuestras <span className="text-primary">Instalaciones</span>
          </SectionTitle>
          <p className="text-xl text-gray-400">
            Espacios diseñados para tu comodidad y rendimiento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};