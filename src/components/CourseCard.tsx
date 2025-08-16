export const CourseCard = ({id, name, description, image}) => {
  return (
    <article id={id} className="bg-white rounded-lg md:rounded-xl xl:rounder-2xl shadow-md">
      <img src={image} alt="" className="rounded-t-lg md:rounded-t-xl xl:rounded-t-2xl w-full h-auto" />
      <div className="p-2 md:p-3 xl:p-4">
        <h1 className="text-base md:text-2xl xl:text-3xl font-bold mt-4">{name}</h1>
        <p className="font-secondary font-medium text-xs md:text-base xl:text-2xl text-gray-700 mt-2">{description}</p>
        <a href="#" className="px-5 py-1 bg-o text-blue-500 hover:text-blue-700 mt-4 inline-block">Ver más detalles</a>
      </div>
    </article>
  )
}

