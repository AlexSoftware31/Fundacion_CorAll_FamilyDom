import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-[74px] rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink docsNum={1} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2 className="mb-5 text-2xl font-semibold text-amber-600 md:text-4xl dark:text-white">
                  ¿Qué es una Cardiopatía Congénita?
                </h2>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="lg:w-2/3">
                    <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed" style={{textAlign: "justify"}}>
                      Las cardiopatías congénitas, o anomalías cardíacas
                      congénitas, son problemas en la estructura del corazón que
                      están presentes al momento del nacimiento y es posible que
                      cambien el flujo normal de la sangre por el corazón.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed" style={{textAlign: "justify"}}>
                      Las cardiopatías congénitas son el tipo más frecuente de
                      anomalías congénitas y es la segunda causa de mortalidad
                      infantil en los países menos desarrollados: {" "}
                      <b>
                        1 de cada 100 niños nacidos vivos presenta una
                        malformación del corazón.
                      </b>
                    </p>
                    <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed" style={{textAlign: "justify"}}>
                      Hay muchos tipos de cardiopatías congénitas. Las anomalías
                      más frecuentes afectan las paredes internas del corazón,
                      las válvulas cardíacas o los grandes vasos que
                      transportansangre hacia y desde el corazón. Algunas
                      anomalías son simples y no necesitan tratamiento, mientras
                      que otras son críticas y requieren tratamiento poco tiempo
                      después del nacimiento.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base" style={{textAlign: "justify"}}>
                      Con frecuencia, los médicos no conocen la causa por la que
                      se produce una cardiopatía congénita, pero varios factores
                      pueden aumentar el riesgo de tener un bebé que nazca con
                      un problema cardíaco. Algunos riesgos incluyen fumar o
                      usar determinados medicamentosdurante el embarazo, además
                      de los antecedentes familiares de cardiopatías congénitas.
                    </p>
                  </div>

                  <div className="lg:w-1/3">
                    <Image
                      src="/images/about/cardiopatia.jpg"
                      alt="Fundación CorAll Family"
                      width={500}
                      height={600}
                      className="rounded-xl object-cover shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
