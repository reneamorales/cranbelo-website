import type { Course } from "../../types/Course";

export const CourseCard = ({ id, title, description, image }: Course) => (

  <article id={id.toString()} className="bg-white rounded-lg md:rounded-xl xl:rounder-2xl shadow-md">
    <img src={image} alt="" className="rounded-t-lg md:rounded-t-xl xl:rounded-t-2xl w-full h-auto" />
    <div className="p-2 md:p-3 xl:p-4 gap-2 md:gap-4 xl:gap-3">
      <h1 className="text-base md:text-2xl xl:text-3xl font-bold">
        {title}
      </h1>
      <p className="font-secondary font-medium text-xs md:text-base xl:text-2xl text-gray-700 ">
        {description}
      </p>
      <a
        href="#"
        className="text-center text-sm md:text-lg xl:text-[26px] px-5 py-1 md:px-20 md:py-4 xl:px-12 xl:py-2.5 bg-o text-blue-500 hover:text-blue-700 w-full inline-block"
      >
        Ver más detalles
      </a>
    </div>
  </article>
);


