import { ChevronLeft, ChevronRight } from "../icons/Chevrons"
import { TestimonialPlatformCard } from "../shared/components/TestimonialPlatformCard"

export const TestimonialsPlatforms = () => {
    return (
        <section className="bg-[#f5f5f5] px-4 md:px-6 lg:px-24 xl:px-32 w-full py-9 md:py-12 xl:py-16 h-auto">
            <div>
                <h2 className="text-lg leading-7 md:text-2xl md:leading-9 xl:text-4xl xl:leading-14 font-bold text-center mb-6">Lo que dicen nuestros alumnos sobre Cranbelo</h2>
                <div className="flex justify-center">
                    <ChevronLeft />
                    <div className="grid grid-cols-9 gap-4 md:gap-6 xl:gap-8">
                        <TestimonialPlatformCard />
                    </div>
                    <ChevronRight />
                </div>
            </div>
        </section>
    )
}

