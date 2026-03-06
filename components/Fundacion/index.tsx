"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Fundacion = () => {
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
      <section id="fundacion" className="px-4 md:px-8 2xl:px-0">
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
                ¿QUIÉNES SOMOS?
              </h2>

              <p style={{ textAlign: "justify" }}>
                La <strong> Fundacion CorAll Family Dominicana </strong> es una
                organización sin fines de lucro creada con el firme propósito de{" "}
                <b>
                  facilitar diagnósticos precisos, tratamientos médicos
                  integrales y cirugías especializadas{" "}
                </b>
                , priorizando a aquellos niños y niñas que se encuentran en
                situación de mayor vulnerabilidad. Nuestro enfoque es holístico:
                no solo atendemos la condición médica, sino que también
                brindamos{" "}
                <b>
                  {" "}
                  acompañamiento emocional, psicológico, social y comunitario
                </b>{" "}
                a los pacientes y sus familias durante todo el proceso, desde el
                diagnóstico hasta la recuperación y seguimiento postoperatorio.
              </p>
              <br></br>
              <p style={{ textAlign: "justify" }}>
                Nacimos el <strong> 2 de julio de 2025 </strong>, impulsados por
                un profundo compromiso humano y social, con la convicción de que
                ningún niño o niña debe ver limitada su oportunidad de vivir una
                infancia plena por la falta de recursos o de acceso a servicios
                de salud cardiovascular infantil.
              </p>
              <br></br>
              <p style={{ textAlign: "justify" }}>
                <strong>
                  En la Fundación CorAll Family Dominicana creemos firmemente
                  que la vida y la salud no deben ser un privilegio, sino un
                  derecho fundamental para todos.
                </strong>
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
                  src="/images/about/fundacion11.png"
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

export default Fundacion;
