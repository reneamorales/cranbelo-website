export type CardsData = {
    cardUniquePay: {
      description: string;
      items: string[];
    }[];
    cardSubcribePay: {
      description: string;
      items: string[];
    }[];
  };
  
  export const cardsCourseData: CardsData = {
    cardUniquePay: [
      {
        description:
          "Realiza un único pago y accede a todo el contenido del curso de inmediato.",
        items: [
          "Acceso a todo el contenido del curso",
          "Sin costos adicionales.",
          "Certificación al finalizar el curso.",
        ],
      },
    ],
    cardSubcribePay: [
      {
        description:
          "Divide el costo total del curso en pagos mensuales cómodos.",
        items: [
          "Acceso progresivo a los módulos del curso",
          "Acceso gradual a los módulos.",
          "Certificación al finalizar el curso.",
        ],
      },
    ],
  };