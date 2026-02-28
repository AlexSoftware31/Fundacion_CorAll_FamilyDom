"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Programas = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="programa" className="px-4 md:px-8 2xl:px-0">
        <div className="max-w-c-1390 relative mx-auto px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute top-0 left-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
          <div className="absolute -bottom-63.75 left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top shadow-solid-8 dark:border-strokedark w-full rounded-lg bg-white p-7.5 md:w-3/5 lg:w-3/4 xl:p-15 dark:border dark:bg-black"
            >
              <h2
                className="xl:text-sectiontitle2 mb-10 text-3xl font-semibold text-amber-600 dark:text-white"
                style={{ fontSize: "25px" }}
              >
                PROGRAMAS SOCIALES A NIVEL NACIONAL
              </h2>

              <p style={{textAlign: "justify"}}>
                En la Fundación CorAll Family Dominicana, nuestros programas
                sociales se centran en brindar un apoyo integral a niños y niñas
                con cardiopatías congénitas en todo el mundo. Trabajamos para
                garantizar que cada pequeño reciba la atención médica
                especializada que necesita, independientemente de su situación
                económica o geográfica.
              </p>
              <br></br>
              <p style={{textAlign: "justify"}}>
                Nuestro enfoque no solo abarca el tratamiento médico, sino
                también el acompañamiento emocional, logístico y educativo para
                las familias, fomentando una sociedad más informada y solidaria.
                A través de estos programas, reducimos la brecha en el acceso a
                la salud cardiovascular infantil, promoviendo diagnósticos
                oportunos, cirugías que salvan vidas y una prevención activa que
                protege el futuro de nuestros niños.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 lg:w-2/5 xl:w-[45%] xl:pt-15"
            >
              <div>
                <Image
                  src="/images/about/fundacion2.png"
                  alt="Fundación CorAll Family"
                  width={700}
                  height={550}
                  className="h-full w-full rounded-lg object-cover shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Programas;
