import type { CourseList } from "../../types/CourseList";

export const CourseCard = ({ id, title, description, image, cta}: CourseList) => (

  <article id={id.toString()} className="bg-inverse-neutral-primary rounded-lg md:rounded-xl xl:rounder-2xl shadow-md">
    <img src={image} alt="" className="rounded-t-lg md:rounded-t-xl xl:rounded-t-2xl w-full h-auto" />

    <div className="flex flex-col gap-2 md:gap-3 xl:gap-4 py-2 md:py-4 px-3 xs:px-4 md:px-6 xl:px-4 w-full">

      <h1 className="text-base md:text-2xl xl:text-3xl font-bold text-neutral-primary min-h-[3em] flex items-center">
        {title}
      </h1>
      <p className="font-medium text-neutral-secondary text-xs md:text-base xl:text-2xl min-h-[12em]">
        {description}
      </p>
      {cta && <div className="mt-4">{cta}</div>}
    </div>
  </article>
);