import type { Course } from "../../types/Course";
import { CourseCard } from "../../shared/components/CourseCard";

type Props = {
  courses: Course[];
};

export const CoursesLists = ({ courses }: Props) => {
  return (
    <section
      aria-labelledby="our-commitment-title"
      className="flex items-center justify-center bg-[#e9e9e9] px-4 md:px-6 lg:px-24 xl:px-32 w-full h-auto py-9 md:py-12 xl:py-16 "
    >
      <div className="max-w-6xl w-full text-black text-sm md:text-base xl:text-lg">
        <h2
          id="our-commitment-title"
          className="text-center text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4 md:mb-5 xl:mb-6"
        >
          Cursos Disponibles
        </h2>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
