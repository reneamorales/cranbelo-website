import { useEffect, useRef, useState } from "react"
import member1 from "../assets/img/team/profile-team/member-1.webp"
import member2 from "../assets/img/team/profile-team/member-2.webp"
import member3 from "../assets/img/team/profile-team/member-3.webp"
import member4 from "../assets/img/team/profile-team/member-4.webp"
import member5 from "../assets/img/team/profile-team/member-5.webp"
import member6 from "../assets/img/team/profile-team/member-6.webp"

const teamMembers = [
  {
    name: "Javier Mendoza",
    role: "Fundador & CEO (Chief Executive Officer)",
    image: member1,
    expertise: "Estrategia de Negocios y Marketing Digital",
    description: "Visionario de la plataforma. Define la estrategia de negocio y supervisa la efectividad de las campañas de Marketing Digital Avanzado.",
  },
  {
    name: "Andrea Reyes",
    role: "Co-Fundadora & CTO",
    image: member2,
    expertise: "Programación Backend y Arquitectura Cloud",
    description: "Lidera la infraestructura tecnológica, enfocándose en la escalabilidad del servidor y la seguridad de los sistemas de datos.",
  },
  {
    name: "Carlos Torres",
    role: "Co-Fundador & CMO",
    image: member3,
    expertise: "Estrategias de SEO y Growth Hacking",
    description: "Experto en adquisición de usuarios. Se enfoca en optimizar el posicionamiento orgánico (SEO) y las estrategias de crecimiento rápido (Growth).",
  },
  {
    name: "Sofía Alarcón",
    role: "Co-Fundadora & CPO",
    image: member4,
    expertise: "Diseño UX/UI y Gestión de Proyectos Ágiles",
    description: "Define la visión del producto y la experiencia de usuario (UX/UI). Aplica metodologías Ágiles (Scrum) para la ejecución del desarrollo.",
  },
  {
    name: "Ricardo Castro",
    role: "Miembro del Equipo & Lead Developer",
    image: member5,
    expertise: "Programación Frontend y Chatbot Development",
    description: "Arquitecto de las interfaces interactivas (Frontend). También es responsable de implementar el soporte conversacional con Chatbots e IA.",
  },
  {
    name: "Laura Vidal",
    role: "Miembro del Equipo & Lead Instructor",
    image: member6,
    expertise: "Ciencia de Datos y Fundamentos de Machine Learning",
    description: "Máxima experta en Data Science. Diseña los currículos de Machine Learning y la aplicación práctica del análisis de datos.",
  },
]

export function TeamProfiles() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(new Array(6).fill(false))
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setTimeout(() => {
                setCardsVisible((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, index * 100)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref)
    })

    return () => cardObserver.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div className="max-w-4xl mx-auto text-center spacing-medium">
        <div className="text-center mb-12">
          <h2
            className={`text-brand-support-strong mb-6 md:mb-8 xl:mb-10 h2 transition-all duration-500 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            Nuestro Equipo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className={`card-report bg-white transition-all duration-800 ease-out ${
                cardsVisible[index] ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"
              }`}
            >
              <article className="text-start spacing-subtle">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs md:text-sm xl:text-base leading-lh-xs md:leading-lh-sm xl:leading-lh-base font-bold text-black">
                  {member.name}
                </h3>
                <p className="text-xs md:text-sm xl:text-base leading-lh-xs md:leading-lh-sm xl:leading-lh-base font-bold text-inverse-neutral-secondary">
                  {member.role}
                </p>
                <p className="text-sm md:text-base leading-lh-sm md:leading-lh-base text-fg-neutral-secondary">
                  {member.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
