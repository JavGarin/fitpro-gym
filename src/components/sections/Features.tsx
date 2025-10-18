import { features } from "../../constants";
import { SectionTitle } from "../ui";

export const Features = () => {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-dark to-secondary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle>
            ¿Por qué elegir
            <span className="text-primary"> FitPro?</span>
          </SectionTitle>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ofrecemos todo lo que necesitas para alcanzar tus objetivos fitness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};