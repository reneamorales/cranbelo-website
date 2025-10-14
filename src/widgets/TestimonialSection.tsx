import { ChevronLeft, ChevronRight } from "../icons/Chevrons";
import type { TestimonialPlatformCardProps } from "../types/TestimonialPlatformCardProps";
import { TestimonialPlatformCard } from "../shared/components/TestimonialPlatformCard";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";

export const TestimonialSection = ({ testimonialsPlatform }: { testimonialsPlatform: TestimonialPlatformCardProps[];}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Función para scrollear
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };

  // Actualiza estados de los botones según scroll
  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // margen de error
  };

  useEffect(() => {
    updateScrollState();
    scrollRef.current?.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      scrollRef.current?.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="relative bg-darkGray px-4 md:px-6 lg:px-24 xl:px-32 w-full py-9 md:py-12 xl:py-16 h-auto">
      <h2 className="text-lg leading-7 md:text-2xl md:leading-9 xl:text-4xl xl:leading-14 font-bold text-center mb-6 text-purple-light underline">
        Lo que dicen nuestros alumnos sobre Cranbelo
      </h2>

      {/* Botón izquierda */}
      <button
        onClick={() => scroll("left")}
        disabled={atStart}
        className={clsx(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md text-white transition-all duration-200 transform",
          atStart
            ? "bg-surface-cran-700 cursor-not-allowed scale-100"
            : "bg-surface-cran-400 hover:bg-surface-cran-300 hover:scale-105 active:bg-surface-cran-200 active:scale-95"
        )}
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>

      {/* Contenedor scrolleable */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 md:gap-6 xl:gap-8 py-2 md:py-3 xl:py-4 scroll-smooth scrollbar-hide bg-deepGray"
      >
       {testimonialsPlatform.map((t, index) => (
        <TestimonialPlatformCard key={index} {...t} />
      ))}
      </div>

      {/* Botón derecha */}
      <button
        onClick={() => scroll("right")}
        disabled={atEnd}
        className={clsx(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md text-white transition-all duration-200 transform",
          atEnd
            ? "bg-surface-cran-700 cursor-not-allowed scale-100"
            : "bg-surface-cran-400 hover:bg-surface-cran-300 hover:scale-105 active:bg-surface-cran-200 active:scale-95"
        )}
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
      </button>
    </section>
  );
};

