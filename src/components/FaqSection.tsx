import { useState } from "react";
import PlusCircle from "../icons/PlusCircle";
import CloseX from "../icons/CloseX";

const faqDataAndResolve = [
    {
        title: "🎓 Aprendizaje y experiencia",
        questions: [
            {
                question: "¿Puedo avanzar a mi propio ritmo o los módulos se habilitan progresivamente?",
                answer: "Sí, puedes **avanzar a tu propio ritmo**. Todos los módulos de los cursos están disponibles desde el inicio, permitiéndote organizar tu tiempo de estudio según tus necesidades y completarlo a la velocidad que prefieras."
            },
            {
                question: "¿Qué pasa si no puedo asistir a una clase en vivo, la puedo ver después?",
                answer: "¡No hay problema! **Todas las clases en vivo quedan grabadas** y se suben a la plataforma en un plazo de 24 a 48 horas, para que puedas verlas o repasarlas cuando lo necesites."
            },
            {
                question: "¿Los cursos incluyen proyectos prácticos o solo teoría?",
                answer: "Nuestros cursos están diseñados con un enfoque práctico. Incluyen **proyectos, ejercicios y desafíos** que te permiten aplicar la teoría inmediatamente y construir un portafolio de trabajo."
            },
            {
                question: "¿Cómo recibo retroalimentación sobre mis ejercicios o trabajos?",
                answer: "La retroalimentación se brinda a través de **foros dedicados, sesiones de revisión en vivo** o por parte de los instructores o tutores, dependiendo del plan de suscripción que elijas. Detalles específicos se encuentran en la descripción de cada curso."
            },
            {
                question: "¿Puedo seguir aprendiendo una vez finalizado el curso o se corta el acceso?",
                answer: "Mientras mantengas tu **suscripción activa**, el acceso a los cursos que hayas iniciado (o a todo el catálogo, según el plan) se mantiene, permitiéndote repasar el material y consultar las actualizaciones."
            },
        ],
    },
    {
        title: "💳 Pagos y acceso",
        questions: [
            {
                question: "Si pago una suscripción, ¿tengo acceso a todos los cursos o solo a uno?",
                answer: "Depende del plan de suscripción que adquieras. La mayoría de nuestros planes de suscripción **ofrecen acceso completo a todo el catálogo de cursos** activos, pero siempre recomendamos revisar los detalles del plan al momento de la compra."
            },
            {
                question: "¿Puedo cambiar de plan sin perder mi progreso?",
                answer: "Sí. Puedes **cambiar de plan en cualquier momento** (ya sea para subir de nivel o degradar), y tu progreso en los cursos, ejercicios y proyectos se mantendrá intacto, ya que está asociado a tu cuenta de usuario."
            },
            {
                question: "¿Qué ocurre si se interrumpe mi suscripción por falta de pago?",
                answer: "Si tu suscripción se interrumpe, **el acceso a los cursos se suspende** temporalmente. Tendrás un período de gracia para reactivarla. Una vez que la reactives, retomarás tu progreso exactamente donde lo dejaste."
            },
            {
                question: "¿Los precios cambian según la cantidad de cursos que tomo?",
                answer: "Generalmente no. Nuestros planes de suscripción ofrecen **acceso ilimitado al contenido** por una tarifa fija (mensual o anual). Solo si adquieres cursos individuales fuera de una suscripción, el precio será por curso."
            },
        ],
    },
    {
        title: "🧑‍💻 Comunidad y acompañamiento",
        questions: [
            {
                question: "¿Hay espacios para interactuar con otros alumnos o con los instructores?",
                answer: "Sí, fomentamos la interacción a través de **foros de discusión, grupos privados** (Discord o similar) y secciones de comentarios en cada módulo, donde puedes interactuar tanto con otros alumnos como con los instructores y asistentes."
            },
            {
                question: "¿Los instructores corrigen los proyectos o solo orientan?",
                answer: "Los instructores ofrecen **orientación detallada y crítica constructiva** sobre los proyectos clave. En algunos planes premium o cursos específicos, la corrección y retroalimentación es más directa e individualizada."
            },
            {
                question: "¿Puedo compartir mis avances o proyectos dentro de la plataforma?",
                answer: "¡Por supuesto! La plataforma incluye **galerías o secciones dedicadas** donde los alumnos pueden subir y mostrar sus proyectos finalizados para recibir el reconocimiento de la comunidad y retroalimentación."
            },
        ],
    },
    {
        title: "🧭 Plataforma y soporte",
        questions: [
            {
                question: "¿Qué hago si el video no carga o el material no se descarga correctamente?",
                answer: "En caso de problemas técnicos, te recomendamos primero **limpiar la caché de tu navegador** y verificar tu conexión a internet. Si el problema persiste, contacta a nuestro **equipo de soporte técnico** a través del chat o correo, y te ayudarán a solucionarlo."
            },
            {
                question: "¿Dónde puedo ver las actualizaciones o nuevas versiones de un curso que ya tomé?",
                answer: "Todas las **actualizaciones y nuevas versiones** de un curso existente se cargan directamente en el módulo del curso dentro de la plataforma. Recibirás una notificación por correo electrónico o en la plataforma si se añaden cambios significativos."
            },
            {
                question: "¿La plataforma guarda mi progreso automáticamente o debo hacerlo manualmente?",
                answer: "La plataforma utiliza tecnología de seguimiento para **guardar tu progreso automáticamente**. Cada vez que completas un video, un ejercicio o sales del curso, el sistema registra tu último punto de avance para que retomes sin problemas."
            },
        ],
    },
];

export const FaqSection = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const toggleItem = (sectionIdx: number, questionIdx: number) => {
        const itemId = `${sectionIdx}-${questionIdx}`;
        setActiveItem(activeItem === itemId ? null : itemId);
    };

    return (
        <section className="flex flex-center justify-center bg-neutral-primary section">
            <div className="container">
                <h1 className="text-semantic-info-bold text-center h2">Preguntas Frecuentes</h1>
                <div className="items grid spacing-large max-w-4xl mx-auto">
                    {faqDataAndResolve.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="mb-8">
                            <span className="font-bold text-base leading-lh-base md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl text-inverse-neutral-primary block mb-4">
                                {section.title}
                            </span>
                            {section.questions.map((item, questionIdx) => {
                                const itemId = `${sectionIdx}-${questionIdx}`;
                                const isActive = activeItem === itemId;

                                return (
                                    <div key={questionIdx} className="mb-3">
                                        <div
                                            onClick={() => toggleItem(sectionIdx, questionIdx)}
                                            className={`item flex flex-row px-4 py-3 rounded-xl justify-between items-center spacing-medium cursor-pointer transition-all duration-300 ${isActive
                                                    ? "bg-gradient-to-r from-mint-light to-sky-lilac border-2 border-semantic-info"
                                                    : "bg-neutral-secondary border-2 border-neutral-primary"
                                                }`}
                                        >
                                            <p className="font-medium text-start text-inverse-neutral-secondary text-base leading-lh-base md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl title">
                                                {item.question}
                                            </p>
                                            <div className="transition-transform duration-300">
                                                {isActive ? (
                                                    <CloseX className="text-b-info-inverse w-[24px] h-[24px] md:w-[28px] md:h-[28px] xl:w-[32px] xl:h-[32px]" />
                                                ) : (
                                                    <PlusCircle className="text-neutral-disabled hover:text-inverse-neutral-primary w-[24px] h-[24px] md:w-[28px] md:h-[28px] xl:w-[32px] xl:h-[32px]" />
                                                )}
                                            </div>
                                        </div>
                                        {isActive && (
                                            <div className="answer-container px-4 py-3 mt-2 bg-neutral-primary rounded-xl">
                                                <p className="text-inverse-neutral-secondary text-base md:text-lg xl:text-xl">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

