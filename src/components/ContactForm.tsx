import { ChevronDownMini } from "../icons/Chevrons";
import { type ChangeEvent, type FormEvent, useState } from "react";

interface FormData {
  name: string;
  apellido: string;
  email: string;
  areaCode: string;
  phoneNumber: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    apellido: "",
    email: "",
    areaCode: "+54",
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita que los datos se vean en la URL
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      // limpiar formulario
      setFormData({
        name: "",
        apellido: "",
        email: "",
        areaCode: "+54",
        phoneNumber: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el formulario");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact-form-section flex flex-col items-center justify-center bg-darkGray w-full h-auto section">
      <h2 className="h2 text-brand-secondary-strong">
        Déjanos tu contacto y a la brevedad te contactaremos.
      </h2>

      <div className="contact-form-container flex flex-col bg-surface-cran-50 px-10 py-9 xl:px-20 xl:py-28 rounded-lg md:rounded-xl xl:rounded-2xl gap-6 md:gap-8 xl:gap-10 max-w-[620px] md:max-w-[768px] xl:max-w-[1024px] w-full">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 justify-center place-items-center gap-6 md:gap-7 xl:gap-8"
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3.5 md:gap-4 xl:gap-8 xl:w-[554px]">
            <div>
              <label className="label-contact-form" htmlFor="name">
                Nombre
              </label>
              <input
                className="input-contact-form text-input-form"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            <div>
              <label className="label-contact-form" htmlFor="apellido">
                Apellido
              </label>
              <input
                className="input-contact-form text-input-form"
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                placeholder="Ingresa tu apellido"
                required
              />
            </div>

            <div>
              <label className="label-contact-form" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="input-contact-form text-input-form"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ejemplo@tucorreo.com"
                required
              />
            </div>

            <div className="flex gap-2 md:gap-3 xl:gap-3.5">
              <div className="min-w-1/3 xl:min-w-[122px]">
                <label className="label-contact-form" htmlFor="areaCode">
                  Cód. Área
                </label>
                <div className="relative">
                  <select
                    id="areaCode"
                    name="areaCode"
                    value={formData.areaCode}
                    onChange={handleInputChange}
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
                  <span className="pointer-events-none absolute right-2 md:right-3 xl:right-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center bg-cran-surface-50 rounded h-4 w-4">
                    <ChevronDownMini />
                  </span>
                </div>
              </div>

              <div>
                <label className="label-contact-form" htmlFor="phoneNumber">
                  Teléfono
                </label>
                <input
                  className="input-contact-form text-input-form"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="5260015"
                  required
                />
              </div>
            </div>
          </div>

          {error && <p className="text-b-error text-sm">{error}</p>}

          <button
            className="btn-contact-form text-cta-contact-form rounded-sm md:rounded-md min-w-[80px] max-w-[106px] h-auto"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};
