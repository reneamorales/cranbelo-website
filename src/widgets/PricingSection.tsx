import type { PricingOption } from "../types/PricingDataProps";
import { PricingCard } from "../shared/components/PricingCard";

/* Data fija */
const cardsData = {
  cardUniquePay: {
    description: "Realiza un único pago y accede a todo el contenido del curso de inmediato.",
    items: [
      "Acceso a todo el contenido del curso",
      "Sin costos adicionales.",
      "Certificación al finalizar el curso.",
    ],
  },
  cardSubcribePay: {
    description: "Divide el costo total del curso en pagos mensuales cómodos.",
    items: [
      "Acceso progresivo a los módulos del curso",
      "Acceso gradual a los módulos.",
      "Certificación al finalizar el curso.",
    ],
  },
};

export const PricingSection = ({ pricing, title }: { pricing: PricingOption[]; title: string }) => {
  return (
    <section className="flex flex-col items-center bg-darkGray w-full section'">
      <div className="container">
        <h2 className="text-center text-xl font-bold mb-6 text-brand-secondary-strong h2">Adquiere el curso que necesitas</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
          {pricing.map((pr, idx) => (
            <PricingCard
              key={`${pr.plan}-${idx}`}
              plan={pr.plan}
              price={pr.price}
              courseTitle={title}
              description={
                pr.plan === "Pago Único"
                  ? cardsData.cardUniquePay.description
                  : cardsData.cardSubcribePay.description
              }
              items={
                pr.plan === "Pago Único"
                  ? cardsData.cardUniquePay.items
                  : cardsData.cardSubcribePay.items
              }
            />
          ))}

        </div>
      </div>
    </section>
  );
};
