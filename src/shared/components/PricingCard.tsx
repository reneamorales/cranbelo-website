type PricingCardProps = {
  plan: string;
  price: string;
  courseTitle: string;
  description: string;
  items: string[];
};
{/*bg-gradient-to-br from-pink-lilac to-turkey-light */ }
export const PricingCard = ({ plan, price, courseTitle, description, items }: PricingCardProps) => (
  <div className="min-h-screen flex items-center justify-center bg-darkGray w-full flex-shrink-0">
    <div className="relative p-0.5 overflow-hidden rounded-lg bg-gradient-to-r from-turkey-light via-support-cran-300 to-turkey-light drop-shadow-sky-400 drop-shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-turkey-light via-support-cran-300 to-turkey-light spin-slow"></div>
      
      <article className="grid spacind-medium relative pricing-card py-3.5 xl:py-6 border rounded-md bg-deepGray min-w-[292px] md:m-w-[292px] max-w-[330px] xl:max-w-[380px]">

        <span className="flex items-center justify-center text-center text-xl font-bold mb-6 text-inverse-neutral-primary bg-brand-primary-strong h-[42px]">{courseTitle}</span>

        <div className="grid spacing-large px-3.5">

          <div className="px-3 text-neutral-secondary">

            <div className="spacing-subtle py-2 xl:py-4 font-medium italic">

              <p className="text-sm">{description}</p>

              <p className="text-sm">Beneficios:</p>

              <ul className="mt-2 list-disc pl-5 text-sm">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="py-2">
              <label className="inline-block rounded-full bg-b-support-inverse text-b-support font-medium px-1 md:px-2 xl:px-3">{plan}</label>
              <p className="text-bold text-base leading-lh-base text-neutral-primary">Precio: ${price}</p>
            </div>

          </div>


          <div className="flex flex-col gap-2">
            <a
              href="/addToCart"
              className="inline-flex w-full items-center justify-center font-semibold text-sm md:text-lg bg-brand-secondary-strong/15 hover:bg-brand-secondary-strong/20 text-neutral-primary border border-transparent hover:border-brand-secondary-strong rounded-md py-1 px-2 transition h-[40px]"
            >
              Agregar al Carrito
            </a><a
              href="/cart"
              className="inline-flex w-full items-center justify-center font-semibold text-sm md:text-lg bg-neutral-primary/80 hover:bg-neutral-primary text-inverse-neutral-primary border border-transparent hover:border-neutral-primary rounded-md py-1 px-2 transition h-[40px]"
            >
              Comprar
            </a>
          </div>
        </div>

      </article>
    </div>
  </div>
);
