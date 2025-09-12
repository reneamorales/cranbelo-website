export const Modality = () => {
    const modalityData = [
        {
            title: "1. Flexibilidad Virtual",
            description: "La cursada es completamente en línea, diseñada para que puedas aprender a tu propio ritmo y desde cualquier lugar. Tendrás acceso a todos los materiales de estudio las 24 horas del día, los 7 días de la semana, lo que te permite organizar tus horarios según tus necesidades personales y laborales."
        },
        {
            title: "2. Clases en Vivo y Grabadas",
            description: [
                "Participa en clases sincrónicas en vivo con instructores especializados para interactuar y resolver dudas en tiempo real. Si no puedes asistir, no te preocupes, todas las sesiones se graban y se suben a la plataforma.",
                "Estas grabaciones te permiten repasar los contenidos, ver las clases que te perdiste y reforzar tu aprendizaje en el momento que te resulte más conveniente, sin la presión de un horario fijo."
            ]
        },
        {
            title: "3. Acompañamiento Personalizado",
            description: "Contarás con un equipo de tutores y asistentes que te guiarán a lo largo de tu formación. A través de foros y chats, podrás recibir apoyo constante para resolver inquietudes técnicas o académicas."
        },
        {
            title: "4. Evaluación y Certificación",
            description: [
                "La evaluación se realiza mediante una combinación de trabajos prácticos, proyectos finales y cuestionarios en línea. Al completar y aprobar todos los módulos, recibirás un certificado oficial que valida tus conocimientos.",
                "Nuestro sistema de evaluación está diseñado para medir tu progreso de manera continua, asegurando que adquieras las habilidades y competencias necesarias para el mundo profesional. El certificado que obtendrás acredita tu preparación y te da una ventaja competitiva en el mercado laboral."
            ]
        }
    ];

    return (
        <section className='flex flex-col bg-darkGray section items-center'>
            <h2 className="container bg-brand-support-strong text-inverse-neutral-primary text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold mb-0 underline">Modalidad de Cursada</h2>
            <div className="container border-solid border-brand-support-strong border-t[1px] md:border-[1.4px] xl:border-[1.6px]">
                <div className="flex flex-col container-inner spacing-large text-neutral-primary">
                    {modalityData.map((item, index) => (
                        <div className="spacing-subtle" key={index}>
                            <h3 className="font-medium text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl">{item.title}</h3>
                            {Array.isArray(item.description) ?
                                item.description.map((paragraph, pIndex) => (
                                    <p className="text-neutral-secondary font-regular text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl" key={pIndex}>{paragraph}</p>
                                ))
                                :
                                <p className="text-neutral-secondary font-regular text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl" >{item.description}</p>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};