import type { IntroCourseProps } from "../types/IntroCourseProps";

const IntroCourse = ({ label, title, subtitle, body }: IntroCourseProps) => {
  return (
    <div className="flex flex-col w-full">
      <span className="font-bold text-base leading-lh-base md:text-xl md:leading-lh-2xl  xl:text-altxl xl:leading-lh-altxl text-surface-cran-white block mb-2">{label}</span>
      <h2 className="text-brand-support-strong content-start-start mb-3 h2">{title}</h2>
      <h3 className="font-medium text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl text-info-cran-500 mb-4">{subtitle}</h3>

      {Array.isArray(body) ? (
        <ul className="list-disc list-inside space-y-2">
          {body.map((item, i) => (
            <li key={i} className="font-regular text-neutral-primary text-sm text-leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="font-regular text-neutral-primary text-sm text-leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl">{body}</p>
      )}
    </div>
  );
};

export default IntroCourse;
