export type PricingOption = {
  plan: "Pago Único" | "Suscripción";
  price: number;
};

export type PricingDataProps = {
  id: number;
  title: string;
  pricing: PricingOption[];
};