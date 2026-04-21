"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import { dataRows, sections } from "./PrivacyData";

const fadeUp : Variants ={
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};



const Privacy = () => {
 
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

   return (
    <section className="relative px-4 py-16 md:px-8 md:py-20 xl:py-28 2xl:px-0">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#dee7ff22] to-transparent dark:from-[#252A4222] dark:to-transparent rounded-xl" />
        <Image
          src="/images/shape/shape-dotted-light.svg"
          alt=""
          fill
          className="object-cover opacity-40 dark:hidden"
        />
        <Image
          src="/images/shape/shape-dotted-dark.svg"
          alt=""
          fill
          className="hidden object-cover opacity-40 dark:block"
        />
      </div>
 
      <div className="mx-auto max-w-4xl">
        {/* Page header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 border-l-4 border-amber-500 pl-5"
        >
          <h1 className="mb-1 text-2xl font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            POLÍTICA DE PRIVACIDAD 
          </h1>
          
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
             Fundación CorAll Family Dominicana - Última actualización: 2026
          </p>
        </motion.div>
 
        {/* Section 1 – Datos identificativos */}
        <motion.div
          //variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-strokedark dark:bg-blacksection"
        >
          <div className="border-b border-gray-100 px-6 py-4 dark:border-strokedark">
            <span className="mr-2 text-md font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              01
            </span>
            <span className="text-md font-semibold text-black dark:text-white">
              Información general y responsable del tratamiento
            </span>
          </div>
 
          <div className="px-6 py-4">
            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              La presente Política de Privacidad regula el tratamiento de los datos personales de los usuarios del sitio web de la Fundación Coral Family Dominicana.
              La fundación garantiza la protección de los datos personales conforme a lo establecido en la Ley No. 172-13 sobre Protección de Datos de Carácter Personal de la República Dominicana.
            </p>
 
            <div className="divide-y divide-gray-100 dark:divide-strokedark">
              {dataRows.map(({ label, value, isEmail }) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-4"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500">
                    {label}
                  </span>
                  {isEmail ? (
                    <a
                      href={`mailto:${value}`}
                      className="text-sm text-amber-600 hover:underline dark:text-amber-400"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {value}
                    </span>
                  )}
                </div>
              ))}

            </div>
          </div>
        </motion.div>
 
        {/* Sections 2–5 grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.number}
              //variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-strokedark dark:bg-blacksection"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  0{sec.number}
                </span>
                <h2 className="text-md font-semibold text-black dark:text-white">
                  {sec.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {sec.body}
              </p>
            </motion.div>
          ))}
        </div>
 
        {/* Contact footer */}
        <motion.div
          //variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm dark:border-strokedark dark:bg-blacksection sm:flex-row sm:items-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
           Para cualquier duda sobre esta Política de Privacidad, puede contactar a:
          </p>
          <a
            href="mailto:corallfamilydominicana@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500 px-5 py-2 text-sm font-medium text-amber-600 transition hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950"
          >
            Contactar
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7h12M8 3l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
