"use client"

import { useState } from "react"

export function VideoPresentation() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center spacing-medium">
        <h2 className="text-brand-primary-strong mb-6 md:mb-8 xl:mb-10 h2">Conoce Más Sobre Nosotros</h2>

        <div
          className={`relative bg-surface-cran-black rounded-lg md:rounded-xl xl:rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300 ${isHovered ? "scale-102" : "scale-100"
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex aspect-video flex items-center justify-center">
            <div className="flex flex-col items-center justify-center spacing-medium">
              <div
                className={`w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-brand-primary-subtle
                  }`}
              >
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 ml-1 text-brand-primary-medium hover:text-brand-primary-strong"
                  fill="currentColor"
                  viewBox="0 0 60 52"
                >
                  <path d="M54.5899 23.0642C56.8102 24.1673 56.8102 27.3346 54.5899 28.4377L19.3328 45.9531C17.3385 46.9438 14.998 45.4931 14.998 43.2663V8.2356C14.998 6.00883 17.3385 4.55816 19.3328 5.54888L54.5899 23.0642Z" fill="currentColor" />
                </svg>
              </div>
              <p className="font-medium text-fg-neutral-secondary text-lg md:text-xl xl:text-2xl leading-lh-xl md:leading-lh-2xl xl:leading-lh-altxl">
                Video Presentación del Equipo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
