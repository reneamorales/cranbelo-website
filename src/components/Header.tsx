export const Header = () => {
    return (
        <header className="px-8 py-3 flex flex-col items-start min-w-[39px] w-full bg-black">
            <div className="flex justify-between items-center w-full h-[80px]">
                <div className="bg-black">
                    <h1 className="text-5xl leading-[80px] font-extrabold">
                        <span className="text-[#ff7a00]">{'{'}</span>
                        <span className="text-white">Cranbelo</span>
                        <span className="text-[#ff7a00]">{'}'}</span>
                    </h1>
                </div>

                <nav className="flex-1 min-w-0 max-w-full md:min-w-[576px] md:max-w-[768px] hidden md:flex">
                    <ul className="flex justify-between items-center gap-2.5">
                        <li>
                            <a href="#home" className="text-base md:text-lg font-semibold leading-8 text-white hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#cursos" className="text-base md:text-lg font-semibold leading-8 text-white hover:underline">
                                Cursos
                            </a>
                        </li>
                        <li>
                            <a href="#nosotros" className="text-base md:text-lg font-semibold leading-8 text-white hover:underline">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#faqs" className="text-base md:text-lg font-semibold leading-8 text-white hover:underline">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" className="text-base md:text-lg font-semibold leading-8 text-white hover:underline">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
