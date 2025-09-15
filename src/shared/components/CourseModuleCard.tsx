import type { CourseModuleCardProps } from '../../types/CourseModuleCardProps';

export const CourseModuleCard: React.FC<CourseModuleCardProps> = ({ id, title, description, lessons, duration }) => {
  const cardClasses = [
    "flex flex-col",
    "border-solid border-brand-secondary-strong",
    "border-[1px] md:border-[1.4px] xl:border-[1.6px]",
    "px-5 py-4 md:px-5 md:py-6 xl:px-6 xl:py-8",
    "spacing-subtle",
    "rounded-lg md:rounded-xl xl:rounded-3xl"
  ].join(" ");

  return (
    <article className={cardClasses}>
      <h4 className="text-neutral-primary font-extrabold h4">
        {title}
      </h4>

      <div className="flex flex-col spacing-subtle">
        <p className="text-neutral-secondary agenda-card-body">
          {description}
        </p>

        <ul className="list-disc pl-5">
          {lessons.map((lesson, index) => (
            <li
              key={`${id}-item-${lesson}-${index}`}
              className="text-neutral-secondary agenda-card-body"
            >
              {lesson}
            </li>
          ))}
        </ul>

        <p className="italic text-neutral-secondary">
          {duration}
        </p>
      </div>
    </article>
  );
}