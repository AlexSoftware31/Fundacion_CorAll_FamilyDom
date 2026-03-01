import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function Docs4Page() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-18.5 rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink docsNum={5} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-13.75 lg:mb-5 lg:px-8 xl:p-13.75">
                <h2>Detección y Prevención</h2>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="lg:w-2/3">
                    <b style={{ fontSize: "17px" }}>
                      Cribado antes del nacimiento del bebé
                    </b>
                    <p
                      className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      La <b>ecocardiografía o el ecocardiograma</b> es una
                      prueba indolora que utiliza ondas de sonido para crear
                      imágenes del corazón en movimiento. Es probable que el
                      médico le recomiende un <b>ecocardiograma fetal</b>{" "}
                      durante el embarazo si la ecografías de rutina muestra
                      algún signo de que el bebé en desarrollo pueda tener una
                      anomalía cardíaca o si tiene factores de riesgo para una
                      cardiopatía congénita.
                    </p>
                    <b style={{ fontSize: "17px" }}>
                      Cribado en recién nacidos
                    </b>
                    <p
                      className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      La <b>oximetría de pulso</b> es una prueba que puede señalar si
                      un recién nacido tiene concentraciones bajas de oxígeno en
                      sangre, que puede ser un síntoma de una cardiopatía
                      congénita crítica. La prueba implica la conexión de
                      sensores a las manos o pies del bebé para medir las
                      concentraciones de oxígeno. <br /> <br /> Las
                      concentraciones bajas de oxígeno en sangre podrían deberse
                      a una cardiopatía congénita o podría ser un signo de
                      alguna otra alteración. Si su hijo tiene concentraciones
                      bajas de oxígeno, el médico posiblemente repita la prueba,
                      o quizás le realice estudios para diagnosticar una
                      cardiopatía congénita.
                    </p>
                    <b style={{ fontSize: "17px" }}>
                      ¿Pueden prevenirse las cardiopatías congénitas?
                    </b>
                    <p
                      className="text-body-color dark:text-body-color-dark mb-6 text-base leading-relaxed"
                      style={{ textAlign: "justify" }}
                    >
                      Si bien no se puede prevenir siempre una cardiopatía
                      congénita, se pueden tomar medidas para disminuir el
                      riesgo del bebé.
                    </p>
                  </div>

                  <div className="lg:w-1/3">
                    <Image
                      src="/images/about/deteccion.png"
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
