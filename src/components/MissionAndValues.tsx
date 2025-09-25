"use client"

import { useEffect, useRef, useState } from "react"

export function MissionAndValues() {
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
      className={`flex flex-col justify-center px-4 md:px-6 lg:px-24 xl:px-32 h-[600px] md:h-[380px] xl:h-[642px] section bg-neutral-secondary transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="spacing-medium text-center">
          <h2 className="h2 sr-only">Nuestros Valores</h2>
          <p className="font-medium italic text-lg leading-lh-lg md:text-xl md:leading-lh-xl xl:text-2xl xl:leading-lh-2xl">
            Nos guiamos por valores como la <strong>innovación, la colaboración y la excelencia.</strong> Nuestro objetivo es empoderar a  cada estudiante para que logre sus sueños profesionales.
          </p>
        </div>
      </div>
    </section>
  )
}
