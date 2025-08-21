import Star from "../../icons/Star"

export const TestimonialPlatformCard = () => {
  return (
    <div className="flex-shrink-0 bg-gradient-to-tr from-turkey-light to-pink-lilac max-w-[336px] md:max-w-[354px] xl:max-w-[384px] px-5 py-12 md:px-6 md:py-16 xl:px-8 xl:py-[72px] rounded-md md:rounded-lg xl:rounded-xl h-auto ">
      <div className=" text-blue-dark grid gap-10 md:gap-12 xl:gap-16 h-auto">
        <div className="grid gap-3.5">
          <p className="text-center text-xs leading-lh-xs md:text-sm md:leading-lh-sm lg:text-base lg:leading-lh-base font-medium">
            Cranbelo ha transformado mi forma de aprender. Los cursos son claros,
            concisos y muy prácticos. ¡Recomiendo esta plataforma a todos mis
            colegas!"
          </p>
          <div className="flex justify-center items-center gap-1 md:gap-1.5 xl:gap-2">
            <Star /> <Star /> <Star /> <Star /> <Star />
          </div></div>

        <div className="py-2 md:py-3 xl:py-4">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww"
            alt="User Avatar"
            className="w-[46px] h-[46px] md:w-[54px] md:h-[54px] xl:w-[62px] xl:h-[62px] object-cover rounded-full"
          />
          <p className="text-base leading-lh-base md:text-lg  md:leading-lh-lg xl:text-xl md:leading-lh-xl font-bold">Juan Pérez</p>
          <p className="text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl font-medium">—Desarrollador Web</p>
        </div>
      </div>
    </div>
  )
}


