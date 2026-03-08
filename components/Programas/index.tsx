"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Programas = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/images/about/programa01.png",
    "/images/about/programa02.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="programa" className="px-4 md:px-8 2xl:px-0">
        <div className="max-w-c-1390 relative mx-auto px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          {/* FILA 1 */}
          <div className="mb-20 flex flex-col items-center gap-10 lg:flex-row">
            {/* TEXTO */}
            <div className="lg:w-1/2">
              <h2
                className="mb-10 text-3xl font-semibold text-amber-600 dark:text-white"
                style={{ fontSize: "25px" }}
              >
                PROGRAMAS SOCIALES A NIVEL NACIONAL
              </h2>

              <p className="mb-6 text-justify">
                En la Fundación CorAll Family Dominicana, nuestros programas
                sociales se centran en brindar un apoyo integral a niños y niñas
                con cardiopatías congénitas en todo el mundo. Trabajamos para
                garantizar que cada pequeño reciba la atención médica
                especializada que necesita, independientemente de su situación
                económica o geográfica.
              </p>

              <p className="text-justify">
                Nuestro enfoque no solo abarca el tratamiento médico, sino
                también el acompañamiento emocional, logístico y educativo para
                las familias, fomentando una sociedad más informada y solidaria.
                A través de estos programas, reducimos la brecha en el acceso a
                la salud cardiovascular infantil, promoviendo diagnósticos y
                cirugías oportunas y una prevención activa que salva vidas y
                protege futuros.
              </p>
            </div>

            {/* IMAGEN DERECHA */}
            <div className="lg:w-1/2">
              <Image
                src="/images/about/fundacion2.png"
                alt="Fundación CorAll Family"
                width={700}
                height={550}
                className="w-full rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>

          {/* FILA 2 */}
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            {/* IMAGEN IZQUIERDA */}
            <div className="lg:w-1/2">
              <Image
                src={images[currentImage]}
                alt="Programa social"
                width={750}
                height={550}
                className="w-full rounded-lg object-cover shadow-xl"
              />
            </div>

            {/* TEXTO DERECHA */}
            <div className="lg:w-1/2">
              <h2
                className="mb-10 text-3xl font-semibold text-amber-600 dark:text-white"
                style={{ fontSize: "25px" }}
              >
                ¿CÓMO TRABAJAMOS?
              </h2>
              <p className="mb-6 text-justify">
                Nos enfocamos en tres pilares fundamentales para maximizar el
                impacto en la vida de los niños y sus familias. Cada uno de
                estos ejes se diseña con un compromiso humano, colaborativo y
                transparente, en alianza con expertos médicos, instituciones y
                voluntarios.
              </p>
              <ul className="mt-6 list-disc space-y-4 pl-8 marker:text-amber-600">
                <li
                  className="leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  <b>Identificación y preparación para cirugías</b> <br />
                  Identificamos a niños y niñas con cardiopatías congénitas que
                  requieren intervenciones quirúrgicas urgentes. A partir de
                  allí, les proporcionamos una preparación integral, incluyendo
                  estudios diagnósticos, evaluaciones médicas especializadas y
                  todo lo necesario para que estén listos para sus cirugías.
                </li>
                <li
                  className="leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  <b>Acompañamiento integral al paciente y su familia </b>{" "}
                  <br />
                  Apoyo humano, social y logístico durante todo el proceso
                  médico. Sabemos que enfrentar una cardiopatía congénita
                  impacta profundamente a todo el núcleo familiar. Por ello,
                  brindamos un acompañamiento integral que incluye orientación,
                  apoyo emocional, asistencia social y acompañamiento durante
                  las diferentes etapas del tratamiento. Nuestro enfoque busca
                  fortalecer a las familias, para que puedan enfrentar este
                  proceso con mayor estabilidad, esperanza y seguridad, desde el
                  diagnóstico, durante el tratamiento y en el proceso de
                  recuperación del paciente.
                </li>
                <li
                  className="leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  <b>Promoción y prevención de la salud cardiovascular </b>{" "}
                  <br />A través de nuestras plataformas digitales y campañas
                  educativas, sensibilizamos a la sociedad sobre las
                  cardiopatías congénitas. Ofrecemos recursos para que las
                  familias conozcan los síntomas, los cuidados preventivos y el
                  manejo diario de estas condiciones.
                </li>
              </ul>
              <br/>

              <p className="text-justify">
                <b>
                  En la Fundación CorAll Family Dominicana trabajamos con
                  esperanza, convicción y amor, porque cada latido cuenta y cada
                  vida importa.
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Programas;
