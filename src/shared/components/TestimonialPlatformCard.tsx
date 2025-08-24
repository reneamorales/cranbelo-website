import { Star } from "../../icons/Star"
import type { TestimonialPlatformCardProps } from "../../types/TestimonialPlatformCardProps"

export const TestimonialPlatformCard = ({
  testimonial,
  user,
  rating,
  state = "active",
}: TestimonialPlatformCardProps) => {
  // Array de 5 posiciones para mapear estrellas
  const stars = Array.from({ length: 5 }, (_, i) => i < rating)

  return (
    <div
      className={`flex-shrink-0 max-w-[336px] md:max-w-[354px] xl:max-w-[384px] min-h-[446px] md:min-h-[476px] xl:min-h-[541px] px-5 py-12 md:px-6 md:py-16 xl:px-8 xl:py-[72px] rounded-md md:rounded-lg xl:rounded-xl h-auto 
        ${state === "active"
          ? "bg-gradient-to-tr from-turkey-light to-pink-lilac text-blue-dark"
          : "bg-darkGray text-[#f0f0f0]"}
      `}
    >
      <div className="grid gap-10 md:gap-12 xl:gap-16 h-full">
        {/* Testimonial */}
        <div className="grid gap-2 md:gap-3 xl:gap-3.5 h-full">
          <p className="text-center text-xs leading-lh-xs md:text-sm md:leading-lh-sm lg:text-base lg:leading-lh-base font-medium h-[114.42px]">
            {testimonial}
          </p>

          {/* Stars */}
          <div className="flex justify-center items-center gap-1 md:gap-1.5 xl:gap-2">
            {stars.map((selected, i) => (
              <Star
                key={i}
                state={state}
                selected={selected}
              />
            ))}
          </div>
        </div>

        {/* User */}
        <div className="grid items-center py-2 md:py-3 xl:py-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-[46px] h-[46px] md:w-[54px] md:h-[54px] xl:w-[62px] xl:h-[62px] object-cover rounded-full"
          />
          <p className="text-base leading-lh-base md:text-lg md:leading-lh-xl xl:text-xl xl:leading-lh-2xl font-bold">
            {user.name}
          </p>
          <p className="text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-lg xl:leading-lh-xl font-medium">
            —{user.role}
          </p>
        </div>
      </div>
    </div>
  )
}


