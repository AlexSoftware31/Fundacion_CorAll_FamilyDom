import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function Docs3Page() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-[74px] rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink docsNum={4} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h2>
                  ¿Cuáles son las causas del aumento de riesgo de tener un bebé
                  con una anomalía congénita cardíaca?
                </h2>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="lg:w-2/3">
                    <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed">
                      El riesgo de tener un bebé con una cardiopatía congénita
                      está influenciado por muchos factores, incluidos:
                    </p>
                    <ul className="mt-6 list-disc space-y-4 pl-8 marker:text-amber-600">
                      <li className="text-body-color dark:text-body-color-dark leading-relaxed">
                        <span className="font-semibold">
                          Antecedentes familiares y genética.
                        </span>
                        {" "}
                        Las cardiopatías congénitas habitualmente no se
                        transmiten a los hijos, pero existe cierto grado de
                        riesgo. El riesgo es mayor si el otro progenitor del
                        bebé, u otro hijo, tiene una cardiopatía congénita.
                      </li>
                      <li className="leading-relaxed">
                        Fumar durante el embarazo o exposición al humo de
                        segunda mano.
                      </li>
                      <li className="leading-relaxed">
                        Algunos medicamentos que se usan durante el primer
                        trimestre del embarazo, como los inhibidores de la
                        enzima convertidora de la angiotensina (ECA) para la
                        presión arterial alta y el ácido retinoico para el
                        tratamiento del acné.
                      </li>
                      <li className="leading-relaxed">
                        Otras afecciones médicas como la diabetes, la
                        fenilcetonuria (un trastorno hereditario infrecuente que
                        afecta la forma en que el cuerpo procesa una proteínas
                        llamada fenilalanina), o una infección viral denominada
                        rubéola.
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-1/3">
                    <Image
                      src="/images/about/aumento.png"
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
