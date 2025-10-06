import imageImpact from '../assets/img/team/image-impact.webp';
export const Impact = () => {
    return (
        <section className="flex flex-center flex-col text-center bg-neutral-secondary section">
            <h2 className=" text-brand-secondary-strong h2">Nuestro Impacto</h2>
            <div className='max-w-4xl mx-auto text-center grid spacing-large text-inverse-neutral-secondary'>
                <div className="intro-impact">
                    <p className="font-medium text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl text-balance">Desde que encendimos el primer servidor, nuestra misión ha sido clara: <strong>democratizar la educación de alto nivel y propulsar carreras con futuro.</strong> No somos solo un bootcamp; somos el catalizador que convierte la ambición en una habilidad tangible y un camino profesional.</p>
                    <br />
                    <p className="font-medium text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl text-balance">Hemos impactado positivamente en la vida de miles de estudiantes y profesionales, equipándolos con el conocimiento, las herramientas y la mentalidad necesarios para no solo navegar, sino liderar la ola de la innovación tecnológica.</p>
                </div>

                <div className="flex flex-center justify-center container-image-impact">
                    <img src={imageImpact} alt="Imagen de impacto social" className='w-full h-auto object-cover ' />
                </div>

                <div className="final-impact text-start grid spacing-medium">
                    <p className="font-bold text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl">La Evidencia de Nuestro Éxito:</p>
                    <p className="font-medium text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-xl xl:leading-lh-xl">
                    Nos enorgullece profundamente el éxito de nuestra comunidad. Ver a nuestros graduados liderar proyectos, innovar en sus campos y transformar sus industrias es la prueba de que nuestro método funciona.</p>
                    <ul className="font-medium text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-xl xl:leading-lh-xl list-disc list-inside space-y-2">
                        <li className=''><strong>Impacto Laboral:</strong> Un alto porcentaje de nuestros egresados consigue empleo en roles tecnológicos de alto valor en tiempo récord. Muchos de ellos acceden a nuevas carreras con salarios significativamente superiores a los anteriores.</li>
                        <li className=''><strong>Innovación Constante:</strong> Nuestros alumnos no solo se adaptan, sino que crean. Lideran equipos en startups disruptivas y corporaciones globales, llevando el pensamiento crítico y la ejecución de proyectos ágiles a la vanguardia de sus organizaciones.</li>
                        <li className=''><strong>Comunidad Global:</strong> Hemos construido una red de mentores, alumni y partners de la industria que va más allá de la pantalla, ofreciendo oportunidades de networking y crecimiento profesional de por vida.</li>
                    </ul>
                    <br />
                    <p className="font-medium  text-center text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl"> <i>Hemos impactado positivamente en la vida de miles de estudiantes y profesionales, <u className='font-bold'>equipándolos con el conocimiento, las herramientas y la mentalidad necesarios para no solo navegar, sino liderar la ola de la innovación tecnológica.</u></i></p>
                </div>
            </div>

        </section>
    )
}

