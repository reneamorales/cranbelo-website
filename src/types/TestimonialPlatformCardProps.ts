export type TestimonialPlatformCardProps = {
  testimonial: string
  user: {
    name: string
    role: string
    avatar: string
  }
  rating: number // 0 a 5
  state?: "active" | "disabled"
}