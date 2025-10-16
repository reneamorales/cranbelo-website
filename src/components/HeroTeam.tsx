import { useState, useEffect } from "react"
import ImageHero from "../assets/img/team/hero-team.webp"

const rotatingWords = ["emprendedor/a", "lider", "experto/a"]

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ImageHero}
          alt="Hero team workspace"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className=" relative z-10 h-full flex items-end justify-center px-4 md:px-6 lg:px-24">
        <div className="absolute text-center max-w-4xl xl:px-32 mb-[100px] md:mb-[80px] lg:mb-[60px] text-balance">
          <h1 className="text-2xl md:text-4xl xl:text-5xl leading-lh-2xl md:leading-lh-4xl xl:leading-lh-5xl font-extrabold">
            <span className="text-neutral-primary">En Cranbelo, te ayudamos a convertirte en un </span>
            <span
              className="text-brand-primary-strong inline-block transition-all duration-500 ease-in-out transform"
              key={currentWordIndex}
            >
              {rotatingWords[currentWordIndex]}
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
