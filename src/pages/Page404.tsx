import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="flex flex-center flex-col items-center section h-full">
      <h1 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl xl:text-6xl">404</h1>
      <h2 className="text-b-info h2">Página no encontrada</h2>
      <p className="text-sm text-leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <Link className="mt-3 px-3 py-2 md:px-4 md:py-3 xl:px-5 xl:py-4 bg-neutral-secondary text-b-info rounded-md hover:text-info-cran-800 hover:bg-neutral-tertiary transition-all duration-300" to="/">Volver al inicio</Link>
    </section>
  )
}

export default Page404