import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function Docs1Page() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-18.5 rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink docsNum={2} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-13.75 lg:mb-5 lg:px-8 xl:p-13.75">
                <h2
                  className="mb-5 text-2xl font-semibold !text-amber-600 md:text-4xl"
                  style={{ fontSize: "33px" }}
                >
                  Tipos de Cardiopatía Congénita
                </h2>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="lg:w-2/3">
                    <p
                      className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      Hay muchos tipos de cardiopatías congénitas, oscilan entre
                      los casos simples a complejos y críticos.
                    </p>
                    <ul className="mt-6 list-disc space-y-4 pl-8 marker:text-amber-600">
                      <li
                        className="leading-relaxed"
                        style={{ textAlign: "justify" }}
                      >
                        Las anomalías simples pueden mejorar por sí solas sin
                        cirugía. En ocasiones, un bebé con una anomalía simple
                        no tendrá ningún síntoma. Los ejemplos de cardiopatías
                        simples incluyen las comunicaciones interauriculares e
                        interventriculares, el conducto arterioso persistente y
                        la estenosis pulmonar.
                      </li>
                      <li
                        className="leading-relaxed"
                        style={{ textAlign: "justify" }}
                      >
                        Las anomalías complejas y críticas pueden provocar
                        síntomas potencialmente mortales que requieran
                        tratamiento inmediato. Un ejemplo de anomalía cardíaca
                        crítica es la tetralogía de Fallot. Los bebés que nacen
                        con esta u otra cardiopatía congénita crítica
                        habitualmente tienen concentraciones bajas de oxígeno
                        poco después del nacimiento y necesitan cirugía en el
                        plazo del primer año de vida.
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-1/3">
                    <Image
                      src="/images/about/tipo.png"
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
