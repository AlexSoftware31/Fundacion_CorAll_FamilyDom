"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Donar = () => {
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
      <section id="support" className="px-4 md:px-8 2xl:px-0">
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

          <div className="flex flex-col gap-8 xl:gap-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top shadow-solid-8 dark:border-strokedark w-full rounded-lg bg-white p-7.5 xl:p-15 dark:border dark:bg-black"
            >
              <h2
                className="xl:text-sectiontitle2 mb-10 text-3xl font-semibold text-amber-600 dark:text-white"
                style={{ fontSize: "30px" }}
              >
                DONA Y REGALA LATIDOS
              </h2>

              <p className="mb-6" style={{ textAlign: "justify" }}>
                En la Fundación Coral Family Dominicana hemos asumido el
                compromiso de que ningún niño o niña vea limitada su oportunidad
                de vivir por falta de recursos o acceso a servicios de salud. Tu
                donación se convierte en esperanza, tratamiento y acompañamiento
                para familias que hoy enfrentan una realidad difícil, pero no
                imposible.
              </p>

              <p className="mb-4 font-semibold" style={{ textAlign: "justify" }}>
                Donar a nuestra fundación es un acto de amor, solidaridad y
                confianza que se transforma directamente en:
              </p>

              <ul className="mb-8 list-disc space-y-2 pl-6">
                <li>Diagnósticos oportunos</li>
                <li>Tratamientos y cirugías cardíacas</li>
                <li>Medicamentos y estudios especializados</li>
                <li style={{ textAlign: "justify" }}>
                  Acompañamiento emocional, psicológico y social para pacientes
                  y sus familias
                </li>
              </ul>

              <h3 className="mb-4 text-lg font-semibold">
                ¿Por qué tu apoyo es tan importante?
              </h3>

              <p className="mb-4" style={{ textAlign: "justify" }}>
                Las cardiopatías congénitas son una de las principales causas de
                mortalidad infantil prevenible. Muchas de ellas tienen
                tratamiento, pero en contextos de vulnerabilidad económica el
                acceso sigue siendo limitado.
              </p>

              <p className="mb-4 font-semibold">Con tu aporte:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ayudas a reducir la mortalidad infantil</li>
                <li style={{ textAlign: "justify" }}>
                  Promueves una infancia más sana, digna y llena de
                  oportunidades
                </li>
                <li style={{ textAlign: "justify" }}>
                  Fortaleces programas de educación, concientización e
                  investigación
                </li>
                <li style={{ textAlign: "justify" }}>
                  Permites que más familias reciban apoyo sin discriminación ni
                  barreras económicas
                </li>
              </ul>

              <p className="mt-6 font-medium" style={{ textAlign: "justify" }}>
                Tu contribución tiene un impacto real y medible en la vida de
                nuestros niños y niñas.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top shadow-solid-8 dark:border-strokedark w-full rounded-lg bg-white p-7.5 xl:p-15 dark:border dark:bg-black"
            >
              <h2
                className="xl:text-sectiontitle2 mb-10 text-3xl font-semibold text-amber-600 dark:text-white"
                style={{ fontSize: "30px" }}
              >
                ¿CÓMO PUEDES COLABORAR?
              </h2>

              <p className="mb-6"  >
                Queremos que donar sea simple, seguro y accesible para todos.
                Por eso te ofrecemos varias opciones según tus posibilidades:
              </p>

              <Image
                src="/images/BancosCuentas.png"
                alt="Bancos"
                width={650}
                height={100}
                className="mx-auto"
              />

              <br></br>
              <p style={{ textAlign: "center" }}>
                <strong>
                  Selecciona la opcion que prefieras y sigue los pasos
                  indicados. {" "}
                </strong> 
                 El proceso es rápido, transparente y seguro.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Donar;
