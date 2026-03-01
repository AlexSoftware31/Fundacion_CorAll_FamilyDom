import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function Docs2Page() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-18.5 rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink docsNum={3} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-13.75 lg:mb-5 lg:px-8 xl:p-13.75">
                <h2>¿Cuáles son las causas de las cardiopatías congénitas?</h2>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="lg:w-2/3">
                    <p className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed" style={{textAlign: "justify"}}>
                      Las cardiopatías congénitas se producen porque el corazón
                      no se desarrolla normalmente mientras el bebé está
                      creciendo en el útero. Con frecuencia, los médicos no
                      saben la causa por la que se producen las cardiopatías
                      congénitas. Los investigadores saben que, en ocasiones, la
                      genética puede cumplir un rol.
                    </p>
                    <p style={{textAlign: "justify"}}>
                      Es habitual que las cardiopatías congénitas ocurran debido
                      a cambios o mutaciones en el ADN del niño. Las mutaciones
                      del ADN pueden haber provenido o no de los padres. En
                      raras ocasiones, las cardiopatías congénitas son causadas
                      por genes particulares que son heredan de los padres. Eso
                      significa que un padre o madre que tenga una cardiopatía
                      congénita puede tener más probabilidades de tener un hijo
                      con dicha anomalía.
                    </p>
                  </div>

                  <div className="lg:w-1/3">
                    <Image
                      src="/images/about/causas.png"
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
