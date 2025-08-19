export const Report = () => {
  return (
    <section className="bg-white px-4 md:px-6 lg:px-24 xl:px-32 w-full py-9 md:py-12 xl:py-16 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 md:gap-10 text-center text-black justify-items-center items-center items-stretch">
        <h2 id="our-commitment-title" className="sr-only">
          Reporte de Impacto
        </h2>

        {/* Bloque 1 */}
        <div className="card-report">
          <div className="font-bold text-3xl md:text-4xl xl:text-5xl text-orange-accent">
            +1200
          </div>
          <p className="text-xs md:text-sm xl:text-base text-gray-800">
            Cursos completos en diversas áreas para emprendedores y profesionales en constante evolución.
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="card-report">
          <div className="font-bold text-3xl md:text-4xl xl:text-5xl text-orange-accent">+950</div>
          <p className="text-xs md:text-sm xl:text-base text-gray-800">
            Estudiantes satisfechos es testimonio de la calidad y efectividad de nuestros programas.
          </p>
        </div>

        {/* Bloque 3 */}
        <div className="card-report">
          <div className="font-bold text-3xl md:text-4xl xl:text-5xl text-orange-accent">+250</div>
          <p className="text-xs md:text-sm xl:text-base text-gray-800">
            Empresas y profesionales activos, eligiendo nuestra plataforma para su desarrollo.
          </p>
        </div>

      </div>
    </section >
  )
}
