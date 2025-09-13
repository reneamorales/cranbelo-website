import IntroCourse from "../components/IntroCourse";
import type { IntroCourseProps } from "../types/IntroCourseProps";

export const IntroCourseSection = ({ sections, title }: { sections: IntroCourseProps[] }) => {
  return (
    <section className="flex flex-col items-center bg-darkGray section">
      <span className="font-bold text-base leading-lh-base md:text-xl md:leading-lh-2xl  xl:text-altxl xl:leading-lh-altxl text-surface-cran-white block mb-2">{label}</span>
      <h2 className="text-brand-support-strong content-start-start mb-3 h2">{title}</h2>
      {sections.map((block, index) => (
        <IntroCourse key={index} {...block} />
      ))}
    </section>
  );
};
