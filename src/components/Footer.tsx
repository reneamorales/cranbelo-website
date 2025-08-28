import MapPin from "../icons/MapPin"
import { Whatsapp } from "../icons/Whatsapp"
import Email from "../icons/Email"
import { Instagram, Facebook, Twitter, Youtube } from "../icons/SocialMedia"

export const Footer = () => {
  return (
    <footer className="bg-black section">
      <div className="max-w-6xl mx-auto text-white text-sm md:text-base xl:text-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Links Frecuentes */}
        <div className="container-inner">
          <h2 className="title-footer">Links Frecuentes</h2>
          <ul className="flex flex-col gap-2.5 md:gap-2 xl:gap-3">
            <li><a href="/preguntas-frecuentes" className="text-content-footer">FAQs</a></li>
            <li><a href="/tyc" className="text-content-footer">Términos y Condiciones</a></li>
            <li><a href="/reglamentos" className="text-content-footer">Reglamentos</a></li>
            <li><a href="/beneficios" className="text-content-footer">Beneficios</a></li>
            <li><a href="/formas-de-pago" className="text-content-footer">Formas de Pago</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="container-inner">
          <h2 className="title-footer">Contáctanos</h2>
          <ul className="flex flex-col gap-2.5 md:gap-2 xl:gap-3">
            <li className="flex gap-1 items-center">
              <MapPin />
              <p className="text-content-footer">Avenida Barros Arana 545, Temuco</p>
            </li>
            <li className="flex gap-1 items-center">
              <Whatsapp />
              <p className="text-content-footer">Escríbenos al Whatsapp</p>
            </li>
            <li className="flex gap-1 items-center">
              <Email />
              <p className="text-content-footer">cranbelo@hola.com</p>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="container-inner">
          <h3 className="title-footer">Síguenos en nuestras redes</h3>
          <ul className="grid grid-cols-4 gap-4">
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}
