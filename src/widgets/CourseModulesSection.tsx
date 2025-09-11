import type { CourseModuleCardProps } from '../types/CourseModuleCardProps';
import { CourseModuleCard } from '../shared/components/CourseModuleCard';

interface CourseModulesSectionProps {
    modules: CourseModuleCardProps[];
}

export const CourseModulesSection = ({ modules }: CourseModulesSectionProps) => {
    return (
        <section className='flex flex-col items-center bg-darkGray w-full section'>

            <div className="container">
                <h2 className="text-secondary-cran-700 bg-neutral-secondary h2 text-center">Temario</h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
                    {modules.map((t, index) => (
                        <CourseModuleCard key={index} {...t} />
                    ))}

                </div>
            </div>

        </section>
    )
}
