import IntroCourse from "../components/IntroCourse";
import type { IntroCourseProps } from "../types/IntroCourseProps";

export const IntroCourseSection = ({ sections, title }: { sections: IntroCourseProps[]; title: string }) => {
  return (
    <section className="flex flex-col items-center bg-darkGray section">
      <div className="container">
        <span className="font-bold text-base leading-lh-base md:text-xl md:leading-lh-2xl  xl:text-altxl xl:leading-lh-altxl text-surface-cran-white block mb-2">Curso</span>
        <h1 className="text-brand-support-strong content-start-start mb-3 h1">{title}</h1>
        {sections.map((block, index) => (
          <IntroCourse key={index} {...block} />
        ))}
      </div>
    </section>
  );
};
