"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const footerRef = useRef(null);

   useEffect(() => {
    console.log(footerRef.current);
  }, []);
  
  return (
    <>
      <footer className="border-stroke dark:border-strokedark dark:bg-blacksection border-t bg-white">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={180}
                    height={80}
                    src="/images/logo/Fundacion_Corall _Family_Dominicana.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={180}
                    height={80}
                    src="/images/logo/Fundacion_Corall _Family_Dominicana.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mt-5 mb-10">
                  Trabajamos con esperanza, convicción y amor.
                </p>

                <p className="text-sectiontitle mb-1.5 tracking-[5px] text-amber-600 uppercase">
                  <strong>contactos</strong>
                </p>
                <a
                  href="tel:+18098353555"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  <FaPhoneAlt size={18} className="mr-2 inline-block text-amber-600" />
                  +1 809-835-3555
                </a>
                <br />
                <a
                  href="mailto:CorAllFamilyDominicana@gmail.com"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  <MdEmail
                    size={18}
                    className="mr-2 inline-block text-amber-600"
                  />
                  CorAllFamilyDominicana@gmail.com
                </a>
                <br />
                <a
                  href="mailto:CorAllFamilyDominicana@gmail.com"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  <MdLocationOn
                    size={20}
                    className="mr-2 inline-block text-amber-600"
                  />
                   Av. Francia 143, 10204. Santo Domingo, República Dominicana.
                </a>
              </motion.div>
              <p>{footerRef.current}</p>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Enlaces Rápidos
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fundacion"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Quiénes Somos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/donar"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Donar
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Cardiopatía
                      </a>
                    </li>
                  </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Soporte
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/support"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Contáctanos
                      </a>
                    </li>
                    <li>
                      <a
                        href="/objetivos"
                        className="mb-3 inline-block hover:text-amber-600"
                      >
                        Objetivos
                      </a>
                    </li>
                  </ul>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Donaciones
                  </h4>
                  <a
                    href="/donar"
                    className="mb-3 inline-block hover:text-amber-600"
                  >
                    Dona y Regala Latidos.
                  </a>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="text-itemtitle2 mb-9 font-medium text-amber-600 dark:text-white">
                    Síguenos
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="https://www.instagram.com"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <FaInstagram size={20} className="text-amber-600" />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <FaFacebook size={20}  className="text-amber-600" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <FaTiktok size={20} className="text-amber-600"  />
                        TikTok
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@corallfamily.org"
                        className="flex items-center gap-3 hover:text-amber-600"
                      >
                        <MdEmail size={20} className="text-amber-600" />
                        Correo Electrónico
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-stroke dark:border-strokedark flex flex-col flex-wrap items-center justify-center gap-5 border-t py-7 lg:flex-row lg:justify-between lg:gap-0">
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
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-amber-600">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600">
                    Politicas de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-600">
                    Soporte
                  </a>
                </li>
              </ul>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>&copy; {new Date().getFullYear()} CorAll Family Dominicana</p>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g> */}
                    <defs>
                      <clipPath id="clip0_48_1499">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* <g clipPath="url(#clip0_48_1508)">
                        <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm9.25 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                      </g> */}
                    <defs>
                      <clipPath id="clip0_48_1508">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        />
                      </g> */}
                    <defs>
                      <clipPath id="clip0_48_1502">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    className="fill-amber-600 transition-all duration-300 hover:fill-amber-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2 9 6 9-6"
                          fill=""
                        />
                      </g> */}
                    <defs>
                      <clipPath id="clip0_48_1505">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
