export const CourseModuleCard = () => {
    return (
        <article className="flex flex-col border-[1px] md:border-[1.4px] xl:border-[1.6px]  border-solid border-brand-secondary-strong px-5 py-4 md:px-5 md:py-6 xl:px-6 xl:py-8 spacing-subtle rounded-lg md:rounded-xl xl:rounded-3xl">

            <h4 className="text-neutral-primary font-extrabold h4">Modulo 1</h4>
            <div className="flex flex-col spacing-subtle">
                <p className="text-neutral-secondary agenda-card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, cum ea aperiam exercitationem rem necessitatibus ad in tempora.</p>
                <ul className="list-disc">
                    <li className="text-neutral-secondary agenda-card-body">Scipit possimus! Nostrum cupiditate do.</li>
                    <li className="text-neutral-secondary agenda-card-body">Scipit possimus! Nostrum cupiditate do.</li>
                    <li className="text-neutral-secondary agenda-card-body">Scipit possimus! Nostrum cupiditate do.</li>
                    <li className="text-neutral-secondary agenda-card-body">Scipit possimus! Nostrum cupiditate do.</li>
                </ul>

                <p className="text-neutral-secondary"></p>

            </div>
        </article>
    )
}