"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Programas = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/about/programa01.png", "/images/about/programa02.png"];


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
                con cardiopatías congénitas en todo el mundo.
              </p>

              <p className="text-justify">
                En la Fundación Coral Family Dominicana entendemos que enfrentar
                una cardiopatía congénita impacta profundamente a todo el núcleo
                familiar. Por ello, ofrecemos <b>apoyo económico y logístico</b>
                , incluyendo transporte, hospedaje y medicamentos.
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
              <p className="mb-6 text-justify">
                Nuestro enfoque no solo abarca el tratamiento médico, sino
                también el acompañamiento emocional, logístico y educativo para
                las familias.
              </p>

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
