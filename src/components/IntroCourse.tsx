import type { IntroCourseProps } from "../types/IntroCourseProps";

const IntroCourse = ({subtitle, body }: IntroCourseProps) => {
  return (
    <div className="flex flex-col w-full">

      <h3 className="font-medium text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl text-info-cran-500 mb-4">{subtitle}</h3>
      {Array.isArray(body) ? (
        <ul className="list-disc list-inside space-y-2">
          {body.map((item, i) => (
            <li key={i} className="font-regular text-neutral-primary text-sm text-leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="font-regular text-neutral-primary text-sm text-leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl mb-3 md:mb-4 xl:mb-5">{body}</p>
      )}
    </div>
  );
};

export default IntroCourse;
