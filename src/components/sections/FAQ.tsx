import { ChevronDown } from "lucide-react";
import { faqs } from "../../constants";
import { SectionTitle } from "../ui";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle>
            Preguntas <span className="text-primary">Frecuentes</span>
          </SectionTitle>
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
  );
};