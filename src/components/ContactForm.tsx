export const ContactForm = () => {
    return (
        <section className="contact-form-section flex flex-col items-center justify-center bg-darkGray w-full h-auto">

            <h2 className="h2 text-black">Déjanos tu contacto y a la brevedad te contactaremos.</h2>
            <div className="contact-form-container flex flex-col bg-white px-10 py-9 xl:px-20 xl:py-28 rounded-lg md:rounded-xl xl:rounded-2xl gap-6 md:gap-8 xl:gap-10">
                <form action="" className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-7 xl:gap-8">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="name">Apellido</label>
                        <input type="text" id="apellido" name="apellido" required />
                    </div>
                    <div>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="area-code">Cód. Área</label>
                        <input type="number" id="area-code" name="area-code" required />
                    </div>
                    <div>
                        <label htmlFor="phone-number">Teléfono</label>
                        <input type="number" id="phone-number" name="phone-number" required />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>

        </section>
    )
}