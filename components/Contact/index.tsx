"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
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
                className="xl:text-sectiontitle2 mb-15 text-3xl font-semibold text-amber-600 dark:text-white"
                style={{ fontSize: "25px" }}
              >
                FORMULARIO DE CONTACTO
              </h2>

              <form
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:focus:placeholder:text-white"
                  />

                  <input
                    type="text"
                    placeholder="Pais o Region"
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:focus:placeholder:text-white"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="tel"
                    placeholder="No. Telefono"
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:focus:placeholder:text-white"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:focus:placeholder:text-white"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent focus:placeholder:text-black focus-visible:outline-hidden dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <div className="mb-6 flex md:mb-0">
                   
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-106.25 cursor-pointer pl-5 select-none"
                    >
                      En CorAll Family Dominicana trabajamos para dar una
                      segunda oportunidad de vida a niños con cardiopatías.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-amber-600 px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-amber-500 dark:bg-amber-500"
                  >
                    Enviar Mensaje
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
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
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="xl:text-sectiontitle2 mb-12.5 text-3xl font-semibold text-amber-600 dark:text-white">
                CONTACTANOS
              </h2>
              <div className="5 mb-7">
                <h3 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Dirección:
                </h3>
                <p>Av. Francia 143, Santo Domingo 10203a</p>
              </div>
              <div className="5 mb-7">
                <h3 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Email:
                </h3>
                <p>
                  <a href="#">corallfamilydominicana@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="text-metatitle3 mb-4 font-medium text-black dark:text-white">
                  Telefono:
                </h4>
                <p>
                  <a href="#">+1 809-000-0000</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
