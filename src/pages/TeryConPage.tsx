const tycData = [
  {
    type: "title",
    content: "Condiciones Generales de Uso",
  },
  {
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, justo at dignissim gravida, neque nisl consequat nisl, at interdum nulla ligula a sapien. Integer porta cursus eros, at feugiat risus gravida in.",
  },
  {
    type: "text",
    content:
      "Sed euismod libero vel sapien congue, sit amet tempor lectus vestibulum. Etiam vitae sem vel erat fringilla suscipit. Nullam sed nibh ac purus ullamcorper blandit. Donec id ultrices risus.",
  },
  {
    type: "text",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt, justo at dignissim gravida, neque nisl consequat nisl, at interdum nulla ligula a sapien. Integer porta cursus eros, at feugiat risus gravida in.",
  },
  {
    type: "text",
    content:
      "Sed euismod libero vel sapien congue, sit amet tempor lectus vestibulum. Etiam vitae sem vel erat fringilla suscipit. Nullam sed nibh ac purus ullamcorper blandit. Donec id ultrices risus.",
  },
  {
    type: "highlight",
    content:
      "Al acceder o utilizar este sitio, aceptas cumplir con todas las políticas descritas en estos términos. Aenean non neque at sapien cursus aliquam vitae vitae justo.",
  },
  {
    type: "text",
    content:
      "Curabitur tincidunt lectus nec urna aliquet, sed volutpat odio dictum. Duis sed leo in odio sollicitudin tristique. Suspendisse potenti. Vivamus ullamcorper purus sed erat varius.",
  },
  {
    type: "highlight",
    content:
      "Última actualización: Octubre 2025. Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.",
  },
];

const TeryConPage = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-auto section">
      <div className="container">
        <h2 className="text-center underline h2">Términos y Condiciones</h2>

        <div className="tyc space-y-6">
          {tycData.map((item, idx) => {
            if (item.type === "title") {
              return (
                <p
                  key={idx}
                  className="font-bold text-start text-xl leading-lh-xl md:text-2xl md:leading-lh-2xl xl:text-3xl xl:leading-lh-3xl text-black font-['Space_Grotesk']"
                >
                  {item.content}
                </p>
              );
            }

            if (item.type === "highlight") {
              return (
                <p
                  key={idx}
                  className="font-bold text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-xl xl:leading-lh-xl"
                >
                  {item.content}
                </p>
              );
            }

            return (
              <p
                key={idx}
                className="text-sm leading-lh-sm md:text-base md:leading-lh-base xl:text-xl xl:leading-lh-xl"
              >
                {item.content}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeryConPage;
