import MapPin from "../icons/MapPin"
import { Whatsapp } from "../icons/Whatsapp"
import Email from "../icons/Email"
import { Instagram, Facebook, Twitter, Youtube } from "../icons/SocialMedia"

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-black section gap-3 md:gap-6 xl:gap-8 ">
            <a href="/" aria-label="Ir a la home" className="flex justify-center" >
                <h1 className="pointer text-2xl leading-5 md:text-3xl md:leading-9 lg:text-4xl lg:leading-12 font-extrabold">
                    <span className="text-orange">{'{'}</span>
                    <span className="text-white">Cranbelo</span>
                    <span className="text-orange">{'}'}</span>
                </h1>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto text-white gap-3 md:gap-6 xl:gap-0 w-full">

                {/* Links Frecuentes */}
                <div className="flex flex-col container-inner">
                    <h2 className="title-footer">Links Frecuentes</h2>
                    <ul className="flex flex-col container-inner-content">
                        <li><a href="/preguntas-frecuentes" className="text-content-footer">FAQs</a></li>
                        <li><a href="/tyc" className="text-content-footer">Términos y Condiciones</a></li>
                        <li><a href="/reglamentos" className="text-content-footer">Reglamentos</a></li>
                        <li><a href="/beneficios" className="text-content-footer">Beneficios</a></li>
                        <li><a href="/formas-de-pago" className="text-content-footer">Formas de Pago</a></li>
                    </ul>
                </div>

                {/* Contacto */}
                <div className="flex flex-col container-inner">
                    <h2 className="title-footer">¿Dudas? Contáctenos</h2>
                    <ul className="flex flex-col container-inner-content">
                        <li className="flex gap-1 items-center">
                            <MapPin />
                            <p className="text-content-footer">Avenida Barros Arana 545, Temuco</p>
                        </li>
                        <li className="flex gap-1 items-center">
                            <Email />
                            <p className="text-content-footer">cranbelo@hola.com</p>
                        </li>
                    </ul>

                    <a className="flex gap-1 items-center mt-4 md:mt-6 xl:mt-8 transition-all duration-200 hover:text-green hover:scale-98"
                        href="https://wa.me/5490000000000?text=Hola,+me+gustar%C3%ADa+hacer+una+consulta+sobre+los+servicios+de+Cranbelo."
                        target="_blank"
                        rel="noopener noreferrer">
                        <p className="text-content-footer text-cta-wsp">Escríbenos al Whatsapp</p>
                        <Whatsapp className="icon-wsp" />
                    </a>

                </div>

                {/* Redes Sociales */}
                <div className="flex flex-col container-inner">
                    <h3 className="title-footer">Síguenos en nuestras redes!</h3>
                    <ul className="grid grid-cols-4 container-inner-content">
                        <li className="flex flex-center justify-center items-center container-social-media">
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <Youtube className="icons-social-media" />
                            </a>
                        </li>
                        <li className="flex flex-center justify-center items-center container-social-media">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="icons-social-media" />
                            </a>
                        </li>
                        <li className="flex flex-center justify-center items-center container-social-media">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="icons-social-media" />
                            </a>
                        </li>
                        <li className="flex flex-center justify-center items-center container-social-media">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="icons-social-media" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


            {/* Copyright */}
            <div className="flex flex-center flex-col w-full">
                <hr className="border-b-[0.5px] text-gray-300" />

                <div className="flex flex-row items-center justify-center gap-x-2 h-auto mt-3 md:mt-6 xl:mt-8">

                    <p className="copyright text-center text-zinc-200 leading-5  md:leading-9">
                        ©2025 | Diseñado y Desarrollado por
                    </p>
                    <a href="" aria-label="Ir a RENE-UXUI.COM" className="flex justify-center">
                        <h1 className="pointer text-lg leading-5 md:text-2xl md:leading-9 font-extrabold text-white/80">
                            RENE.UXUI
                        </h1>
                    </a>
                </div>
            </div>


        </footer>
    )
}
