import type { Course } from "../../types/Course";

export const CourseCard = ({ id, title, description, image }: Course) => (

  <article id={id.toString()} className="bg-inverse-neutral-primary rounded-lg md:rounded-xl xl:rounder-2xl shadow-md">
    <img src={image} alt="" className="rounded-t-lg md:rounded-t-xl xl:rounded-t-2xl w-full h-auto" />

    <div className="flex flex-col gap-2 md:gap-3 xl:gap-4 py-2 md:py-4 px-3 xs:px-4 md:px-6 xl:px-4 w-full">

      <h1 className="text-base md:text-2xl xl:text-3xl font-bold text-neutral-primary min-h-[3em] flex items-center">
        {title}
      </h1>
      <p className="font-medium text-neutral-secondary text-xs md:text-base xl:text-2xl min-h-[12em]">
        {description}
      </p>
      <a
        href="#"
        className="mt-auto text-center font-semibold text-sm md:text-lg xl:text-[26px] sm:px-4 px-5 py-1 md:px-20 md:py-4 xl:px-12 xl:py-2.5 bg-o bg-brand-secondary-strong/15 hover:bg-brand-secondary-strong/20   text-neutral-primary hover:text-brand-secondary-strong border-[1.6px] md:border-[1.8px] xl:border-2 border-transparent hover:border-brand-secondary-strong active:border-transparent active:bg-neutral-secondary active:text-secondary-cran-900 w-full inline-block rounded-md trasnsition-all duration-300 ease-in-out"
      >
        Ver más detalles
      </a>
    </div>
  </article>
);