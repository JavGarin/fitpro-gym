import { useState } from "react";
import { plans } from "../../constants";
import { Phone } from "lucide-react";
import {
  Button,
  SectionTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui";

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="planes" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle>
            Planes <span className="text-primary">Flexibles</span>
          </SectionTitle>
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
                  ? "border-primary shadow-2xl shadow-primary/30 scale-105"
                  : "border-white/10 hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light text-white px-6 py-2 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-primary">
                    ${plan.price}
                  </span>
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

              <Button
                onClick={() => setSelectedPlan(plan.name)}
                variant={plan.popular ? "default" : "outline"}
                className="w-full rounded-full font-semibold transition-all duration-300"
              >
                Seleccionar Plan
              </Button>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedPlan}
          onOpenChange={(isOpen) => !isOpen && setSelectedPlan(null)}
        >
          <DialogContent className="bg-dark border-primary text-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                ¡Excelente elección!
              </DialogTitle>
              <DialogDescription className="text-gray-300">
                Has seleccionado el plan{" "}
                <span className="font-bold text-white">{selectedPlan}</span>.
                Contáctanos para completar tu inscripción.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col gap-3 sm:flex-col sm:space-x-0 pt-4">
              <Button asChild size="lg" className="w-full">
                <a
                  href="tel:+56912345678"
                  className="flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar Ahora</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setSelectedPlan(null)}
                className="w-full"
              >
                Cerrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};