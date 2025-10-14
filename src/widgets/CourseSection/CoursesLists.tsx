import type { CourseList } from "../../types/CourseList";
import { CourseCard } from "../../shared/components/CourseCard";
import { Link } from "react-router-dom";

type Props = {
  courses: CourseList[];
};

export const CoursesLists = ({ courses }: Props) => {
  return (
    <section
      aria-labelledby="our-commitment-title"
      className="flex items-center justify-center bg-neutral-secondary px-4 md:px-6 lg:px-24 xl:px-32 w-full h-auto py-9 md:py-12 xl:py-16 "
    >
      <div className="max-w-6xl w-full text-black text-sm md:text-base xl:text-lg">
        <h2
          id="our-commitment-title"
          className="h2 text-secondary-cran-700 mb-6 md:mb-8 xl:mb-12 text-center"
        >
          Cursos Disponibles
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course}
              cta={
                <Link
                  to={`/course/${course.slug}`}
                  className="mt-auto text-center font-semibold text-sm md:text-lg xl:text-[26px] sm:px-4 px-5 py-1 md:px-20 md:py-4 xl:px-12 xl:py-2.5 bg-brand-secondary-strong/15 hover:bg-brand-secondary-strong/20 text-neutral-primary hover:text-brand-secondary-strong border-[1.6px] md:border-[1.8px] xl:border-2 border-transparent hover:border-brand-secondary-strong active:border-transparent active:bg-neutral-secondary active:text-secondary-cran-900 w-full inline-block rounded-md transition-all duration-300 ease-in-out"
                >
                  Ver más detalles
                </Link>
              } />
          ))}
        </div>
      </div>
    </section>
  );
};
