import imageHero from '../assets/img/hero/hero.webp';

export const Hero = () => {
    return (
        <section className="flex justify-center items-center px-4 md:px-6 xl:px-8 py-9 md:py-12 xl:px-16 bg-white w-full h-[768px] md:h-[1024px] xl:h-[896px]">
            <div className="relative rounded-2xl border-2 w-full md:max-w-[768px] xl:max-w-[1024px] aspect-[3/4] md:aspect-[2/3] xl:aspect-[16/9] max-h-full mx-auto overflow-hidden">
                <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={imageHero}
                    alt="Hero"
                />
                <span className="absolute bottom-4 left-6 md:bottom-8 md:left-10 xl:bottom-[68px] xl:left-[84px] text-base md:text-3xl xl:text-5xl font-extrabold color-animated">
                    Curso en vivo
                </span>
            </div>
        </section>
    );
};
