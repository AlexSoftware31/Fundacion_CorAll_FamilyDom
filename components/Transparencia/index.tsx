"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  accesoItems,
  alianzasItems,
  eticaItems,
  gestionItems,
  gobernanzaItems,
  rendicionItems,
} from "./transparenciaData";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

// Reusable card wrapper
const SectionCard = ({
  index,
  number,
  title,
  children,
}: {
  index: number;
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    variants={fadeUp}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="dark:border-strokedark dark:bg-blacksection overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
  >
    <div className="dark:border-strokedark flex items-center gap-2 border-b border-gray-100 px-6 py-4">
      <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
        {number}
      </span>
      <h2 className="text-sm font-semibold text-black dark:text-white">
        {title}
      </h2>
    </div>
    <div className="px-6 py-5">{children}</div>
  </motion.div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li
        key={item}
        className="flex items-start gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
      >
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
        {item}
      </li>
    ))}
  </ul>
);

const Transparencia = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="relative px-4 py-16 md:px-8 md:py-20 xl:py-28 2xl:px-0">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[#dee7ff22] to-transparent dark:from-[#252A4222]" />
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

      <div className="mx-auto max-w-4xl space-y-6">
        {/* Page header */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-l-4 border-amber-500 pl-5"
        >
          <p className="mb-1 text-2xl font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            Transparencia
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Fundación CorAll Family Dominicana
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="dark:border-strokedark dark:bg-blacksection rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            En la{" "}
            <strong className="text-black dark:text-white">
              Fundación CorAll Family Dominicana
            </strong>
            , la transparencia es un principio fundamental que guía cada una de
            nuestras acciones. Trabajamos con un firme compromiso ético,
            garantizando que todos los recursos recibidos sean gestionados de
            manera responsable, eficiente y orientados exclusivamente al
            cumplimiento de nuestra misión.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Creemos que la confianza de nuestros donantes, aliados y
            beneficiarios se construye a través de la claridad, la rendición de
            cuentas y el acceso abierto a la información.
          </p>
        </motion.div>

        {/* Compromiso */}
        <SectionCard
          index={2}
          number="01"
          title="Compromiso con la transparencia"
        >
          <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Asumimos la transparencia como un pilar esencial de nuestra labor.
            Nos comprometemos a garantizar que cada acción esté guiada por
            principios éticos, asegurando el uso responsable de todos los
            recursos y ofreciendo información clara, veraz y accesible a la
            sociedad.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Cada donación representa una oportunidad de vida, y es gestionada
            con el más alto nivel de responsabilidad y compromiso humano.
          </p>
        </SectionCard>

        {/* Gestión de recursos */}
        <SectionCard index={3} number="02" title="Gestión de recursos">
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Los fondos y aportes que recibe la Fundación son destinados
            exclusivamente a:
          </p>
          <BulletList items={gestionItems} />
          <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-500">
            Nuestra gestión financiera se rige por criterios de eficiencia,
            impacto social y sostenibilidad.
          </p>
        </SectionCard>

        {/* Gobernanza */}
        <SectionCard index={4} number="03" title="Estructura de gobernanza">
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            La fundación cuenta con una estructura organizacional sólida que
            garantiza la toma de decisiones responsable y transparente:
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {gobernanzaItems.map((item) => (
              <a href={item.url} key={item.title}>
                <div
                  key={item.title}
                  className="dark:border-strokedark dark:bg-blackho rounded-xl border border-gray-100 bg-gray-50 p-4"
                >
                  <p className="mb-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </SectionCard>

        {/* Rendición de cuentas + Ética (grid 2 cols) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SectionCard index={5} number="04" title="Rendición de cuentas">
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Ponemos a disposición de nuestros públicos de interés información
              relevante sobre:
            </p>
            <BulletList items={rendicionItems} />
          </SectionCard>

          <SectionCard
            index={6}
            number="05"
            title="Ética e integridad institucional"
          >
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Promovemos una cultura basada en:
            </p>
            <div className="flex flex-wrap gap-2">
              {eticaItems.map((val) => (
                <span
                  key={val}
                  className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300"
                >
                  {val}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Rechazamos cualquier práctica que comprometa la integridad de
              nuestra labor y actuamos bajo principios de equidad, inclusión y
              justicia.
            </p>
          </SectionCard>
        </div>

        {/* Alianzas + Acceso a la información (grid 2 cols) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SectionCard index={7} number="06" title="Alianzas y colaboración">
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Fomentamos relaciones transparentes con:
            </p>
            <BulletList items={alianzasItems} />
            <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-500">
              Todas nuestras alianzas se establecen bajo principios de
              confianza, legalidad y objetivos comunes centrados en salvar
              vidas.
            </p>
          </SectionCard>

          <SectionCard index={8} number="07" title="Acceso a la información">
            <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Mantenemos disponibles y actualizados los documentos relevantes
              para garantizar la transparencia institucional:
            </p>
            <BulletList items={accesoItems} />
          </SectionCard>
        </div>

        {/* Estatutos – descarga */}
        <motion.div
          variants={fadeUp}
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950"
        >
          <p className="mb-1 text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            Estados Financieros
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Descarga el documento oficial actual de los estatutos legales de la
            Fundación CorAll Family Dominicana.
          </p>
          <a
            href="/2026/estatutos-legales.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1v9M5 7l3 3 3-3M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Descargar estatutos (PDF)
          </a>
        </motion.div>

        {/* Nuestro compromiso – cierre */}
        <motion.div
          variants={fadeUp}
          custom={10}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="dark:border-strokedark dark:bg-blacksection rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm"
        >
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            <strong className="text-black dark:text-white">
              Nuestro compromiso:{" "}
            </strong>
            Cada aporte recibido es transformado en atención médica, esperanza y
            vida para niños y niñas con cardiopatías congénitas. Trabajamos con
            la convicción de que la transparencia no es solo una obligación,
            sino un valor esencial que fortalece nuestra misión y honra la
            confianza de quienes creen en nuestra causa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Transparencia;
