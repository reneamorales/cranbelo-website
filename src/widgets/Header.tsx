import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Menu from "../icons/Menu";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbarState, setNavbarState] = useState("top");

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    // Ocultar/mostrar header en scroll
    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.scrollY;
                    const vh = window.innerHeight;
                    if (currentScroll === 0) {
                        setNavbarState("top");
                    } else if (currentScroll > vh && currentScroll > lastScrollY) {
                        setNavbarState("hidden");
                    } else if (currentScroll > vh && currentScroll < lastScrollY) {
                        setNavbarState("scrolled-up");
                    } else if (currentScroll <= vh) {
                        setNavbarState("top");
                    }
                    lastScrollY = currentScroll;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú si es desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const headerClass = [
        "px-8 py-3 flex flex-col items-start w-full bg-black transition-transform duration-300",
        navbarState === "hidden" && "-translate-y-full",
        navbarState === "scrolled-up" && "translate-y-0 shadow-lg",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <header className={headerClass}>
            <div className="flex justify-between items-center w-full h-auto">
                {/* Logo */}
                <Link to="/" aria-label="Ir a la home">
                    <h1 className="pointer text-xl leading-5 md:text-3xl md:leading-9 lg:text-4xl lg:leading-12 font-extrabold">
                        <span className="text-brand-primary-strong">{'{'}</span>
                        <span className="text-white">Cranbelo</span>
                        <span className="text-brand-primary-strong">{'}'}</span>
                    </h1>
                </Link>

                {/* Menú Desktop */}
                <nav className="hidden md:flex flex-1 min-w-[362px] max-w-[576px] w-full">
                    <ul className="flex justify-between items-center w-full">
                        {["Home", "Cursos", "Nosotros", "FAQs", "Contacto"].map(item => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className="pointer text-base md:text-lg font-semibold leading-8 text-white transition-colors duration-300 ease-in-out hover:text-brand-secondary-medium"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botón menú móvil */}
                <button
                    className="md:hidden text-white"
                    aria-label="Abrir menú"
                    onClick={toggleMenu}
                >
                    <Menu />
                </button>
            </div>

            {/* Menú móvil */}
            <nav
                className={`md:hidden w-full bg-black transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-60" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col gap-4 p-4">
                    {["Home", "Cursos", "Nosotros", "FAQs", "Contacto"].map(item => (
                        <li key={item}>
                            <Link
                                to={`/${item.toLowerCase()}`}
                                className="text-base font-semibold text-white"
                                onClick={closeMenu}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
