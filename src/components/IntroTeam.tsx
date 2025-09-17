import { useEffect, useRef, useState } from "react"

export function IntroTeamsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col justify-center transition-all duration-1000  px-4 md:px-6 lg:px-24 xl:px-32 h-[600px] md:h-[380px] xl:h-[642px] section ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center spacing-medium text-inverse-neutral-tertiary text-balance">
        <p className="font-medium text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl">
          En Cranbelo, somos más que una plataforma educativa. Somos un equipo de apasionados por el aprendizaje, dedicados a crear experiencias educativas que inspiran y transforman. Nuestro compromiso es contigo, para ayudarte a alcanzar tus metas empresariales y profesionales.
        </p>
        <p className="font-bold text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl mt-2 md:mt-3 xl:mb-4 text-brand-secondary-strong">
          Conoce al equipo detrás de todo esto.
        </p>
      </div>
    </section>
  )
}
