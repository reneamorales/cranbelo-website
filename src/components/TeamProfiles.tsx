import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Ana García",
    role: "CEO & Fundadora",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    description: "Experta en estrategia empresarial con más de 15 años de experiencia.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Tecnología",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Líder en innovación tecnológica y transformación digital.",
  },
  {
    name: "María López",
    role: "Directora de Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    description: "Especialista en marketing digital y crecimiento empresarial.",
  },
  {
    name: "David Chen",
    role: "Director Financiero",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "Experto en finanzas corporativas y análisis de inversiones.",
  },
  {
    name: "Sofia Martínez",
    role: "Directora de Operaciones",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    description: "Especialista en optimización de procesos y gestión operativa.",
  },
  {
    name: "Roberto Silva",
    role: "Director de Ventas",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    description: "Líder en desarrollo de negocios y relaciones comerciales.",
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
              <div className="text-center spacing-medium">
                <div className="relative w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 mx-auto mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl leading-lh-xl md:leading-lh-2xl xl:leading-lh-altxl font-bold text-inverse-neutral-primary">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base xl:text-lg leading-lh-sm md:leading-lh-base xl:leading-lh-xl text-brand-primary-strong font-medium">
                  {member.role}
                </p>
                <p className="text-sm md:text-base leading-lh-sm md:leading-lh-base text-fg-neutral-secondary">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
