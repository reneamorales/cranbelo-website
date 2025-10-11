import PlusCircle from "../icons/PlusCircle";
import CloseCircle from "../icons/CloseCircle";

const faqData = [
    {
        title: "🎓 Aprendizaje y experiencia",
        questions: [
            "¿Puedo avanzar a mi propio ritmo o los módulos se habilitan progresivamente?",
            "¿Qué pasa si no puedo asistir a una clase en vivo, la puedo ver después?",
            "¿Los cursos incluyen proyectos prácticos o solo teoría?",
            "¿Cómo recibo retroalimentación sobre mis ejercicios o trabajos?",
            "¿Puedo seguir aprendiendo una vez finalizado el curso o se corta el acceso?",
        ],
    },
    {
        title: "💳 Pagos y acceso",
        questions: [
            "Si pago una suscripción, ¿tengo acceso a todos los cursos o solo a uno?",
            "¿Puedo cambiar de plan sin perder mi progreso?",
            "¿Qué ocurre si se interrumpe mi suscripción por falta de pago?",
            "¿Los precios cambian según la cantidad de cursos que tomo?",
        ],
    },
    {
        title: "🧑‍💻 Comunidad y acompañamiento",
        questions: [
            "¿Hay espacios para interactuar con otros alumnos o con los instructores?",
            "¿Los instructores corrigen los proyectos o solo orientan?",
            "¿Puedo compartir mis avances o proyectos dentro de la plataforma?",
        ],
    },
    {
        title: "🧭 Plataforma y soporte",
        questions: [
            "¿Qué hago si el video no carga o el material no se descarga correctamente?",
            "¿Dónde puedo ver las actualizaciones o nuevas versiones de un curso que ya tomé?",
            "¿La plataforma guarda mi progreso automáticamente o debo hacerlo manualmente?",
        ],
    },
];

export const FaqSection = () => {
    return (
        <section className="flex flex-center justify-center bg-neutral-primary section">
            <div className="container">
                <h1 className="text-semantic-info-bold text-center h2">Preguntas Frecuentes</h1>
                <div className="items grid spacing-large max-w-4xl mx-auto">
                    {faqData.map((section, idx) => (
                        <div key={idx} className="mb-8">
                            <span className="font-bold text-base leading-lh-base md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl text-inverse-neutral-primary block mb-4">
                                {section.title}
                            </span>
                            {section.questions.map((q, qIdx) => (
                                <div
                                    key={qIdx}
                                    className="item flex flex-row bg-neutral-secondary border-2 border-b-neutral-secondary px-4 py-3 rounded-xl justify-between items-center spacing-medium mb-3"
                                >
                                    <p className="font-medium text-start text-inverse-neutral-secondary text-base leading-lh-base md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl title">
                                        {q}
                                    </p>
                                    <PlusCircle className="text-neutral-disabled text-center w-[24px] h-[24px] md:w-[28px] md:h-[28px] xl:w-[32px] xl:h-[32px] hover:text-inverse-neutral-primary active:text-b-info" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

