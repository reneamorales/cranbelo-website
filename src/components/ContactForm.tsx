import { ChevronDownMini } from "../icons/Chevrons";

export const ContactForm = () => {
    return (
        <section className="contact-form-section flex flex-col items-center justify-center bg-darkGray w-full h-auto section">

            <h2 className="h2 text-white">Déjanos tu contacto y a la brevedad te contactaremos.</h2>
            <div className="contact-form-container flex flex-col bg-white px-10 py-9 xl:px-20 xl:py-28 rounded-lg md:rounded-xl xl:rounded-2xl gap-6 md:gap-8 xl:gap-10">

                <form action="" className="grid grid-cols-1 md:grid-row flex-wrap justify-center place-items-center gap-6 md:gap-7 xl:gap-8">

                    <div className="gap-3.5 md:gap-4 xl:gap-8">

                        <div>
                            <label className="label-contact-form" htmlFor="name">Nombre</label>
                            <input className="input-contact-form text-input-form" type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />
                        </div>
                        <div>
                            <label className="label-contact-form" htmlFor="name">Apellido</label>
                            <input className="input-contact-form text-input-form" type="text" id="apellido" name="apellido" placeholder="Ingresa tu apellido" required />
                        </div>
                        <div>
                            <label className="label-contact-form" htmlFor="email">Correo Electrónico</label>
                            <input className="input-contact-form text-input-form" type="email" id="email" name="email" placeholder="ejemplo@tucorreo.com" required />
                        </div>
                        <div className="flex flex-columns gap-2 md:gap-3 xl:gap-3.5 ">

                            <div className="w-1/3">
                                <label className="label-contact-form" htmlFor="area-code">
                                    Cód. Área
                                </label>
                                <div className="relative">
                                    <select
                                        id="area-code"
                                        name="area-code"
                                        className="input-contact-form text-input-form appearance-none"
                                        required
                                    >
                                        <option value="+54">🇦🇷 Arg (+54)</option>
                                        <option value="+52">🇲🇽 Méx (+52)</option>
                                        <option value="+56">🇨🇱 Chi (+56)</option>
                                        <option value="+57">🇨🇴 Col (+57)</option>
                                        <option value="+34">🇪🇸 Esp (+34)</option>
                                        <option value="+598">🇺🇾 Uru (+598)</option>
                                        <option value="+51">🇵🇪 Per (+51)</option>
                                        <option value="+58">🇻🇪 Ven (+58)</option>
                                        <option value="+591">🇧🇴 Bol (+591)</option>
                                    </select>

                                    {/* Chevron a la derecha */}
                                    <span className="pointer-events-none absolute right-2 md:right-3 xl:right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center bg-cran-surface-50 rounded h-4 w-4">
                                        <ChevronDownMini />
                                    </span>

                                </div>
                            </div>


                            <div>
                                <label className="label-contact-form" htmlFor="phone-number">Teléfono</label>
                                <input className="input-contact-form text-input-form" type="phone" id="phone-number" name="phone-number" placeholder="5260015" required />
                            </div>

                        </div>

                        <span className="">
                            <p className="text-input-form">Feedback</p>
                        </span>

                    </div>
                    <button className="btn-contact-form text-input-form rounded-sm md:rounded-md text-black bg-orange min-w-[80px] max-w-[106px] h-auto" type="submit">Enviar</button>

                </form>
            </div>

        </section>
    )
}