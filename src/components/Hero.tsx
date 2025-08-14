import imageHero from '../assets/img/hero/hero.webp';

export const Hero = () => {
    return (
        <section className='flex justify-center items-center px-8 py-4 bg-white w-full h-dvh'>
            <div className='relative rounded-2xl border-2 w-9/12 overflow-hidden'>
                <img className='w-fullh-full object-cover rounded-2xl' src={imageHero} alt='Hero'/>
                <span className='absolute bottom-4 left-6  lg:bottom-8 md:left-10 lg:bottom-[68px] lg:left-[84px] text-orange-accent text-base md:text-3xl lg:text-5xl font-extrabold ' >Curso en vivo</span>
            </div>
        </section>
    )
}