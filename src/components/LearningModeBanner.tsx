export const LearningModeBanner = () => {
    return (
        <section
            aria-labelledby="courses-banner-title"
            className="flex items-center justify-center bg-black w-full"
        >
            <div className="text-center font-medium px-4 md:px-6 lg:px-24 py-9 md:py-12 lg:py-16 w-full">
                <h2 id="courses-banner-title" className="sr-only">
                    Información sobre los cursos
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white">
                    Nuestros cursos son dictados bajo modalidad <span className="underline">online</span> a través de Zoom.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-white mt-2">
                    Aprende desde cualquier lugar con horarios flexibles y acceso a recursos exclusivos.
                </p>
            </div>
        </section>
    );
};
