import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function Docs5Page() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-18.5 rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink docsNum={6} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-13.75 lg:mb-5 lg:px-8 xl:p-13.75">
                <h2
                  className="mb-5 text-2xl font-semibold !text-amber-600 md:text-4xl"
                  style={{ fontSize: "33px" }}
                >
                  Tratamiento
                </h2>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="lg:w-2/3">
                    <p
                      className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      La gravedad puede variar mucho de un niño a otro.
                    </p>
                    <ul className="mt-6 list-disc space-y-4 pl-8 marker:text-amber-600">
                      <li
                        className="leading-relaxed"
                        style={{ textAlign: "justify" }}
                      >
                        Hay cardiopatías leves que no requieren cirugía
                        inmediata.
                      </li>
                      <li
                        className="leading-relaxed"
                        style={{ textAlign: "justify" }}
                      >
                        Otras son más complejas y necesitan ser tratadas de
                        manera temprana para salvar la vida del bebé.
                      </li>
                    </ul>
                    <p
                      className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      Hoy en día, gracias a la medicina fetal, muchas de estas
                      cardiopatías pueden ser diagnosticadas{" "}
                      <b>antes del nacimiento</b>, lo que permite planificar el
                      parto en hospitales preparados con unidades de cardiología
                      y cirugía cardíaca pediátrica. En algunos casos muy
                      específicos incluso se puede tratar al bebé{" "}
                      <b>dentro del útero</b>.
                      <br /> <br /> Lo importante es que, con el tratamiento
                      adecuado, la mayoría de los niños puede tener una vida
                      plena, activa y feliz. <br /> <br />
                      Las cardiopatías congénitas son un reto, pero también una
                      oportunidad para demostrar que la ciencia, la solidaridad
                      y el amor pueden{" "}
                      <b>transformar la vida de un niño y su familia</b>.
                    </p>
                  </div>

                  <div className="lg:w-1/3">
                    <Image
                      src="/images/about/tratamiento.png"
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
