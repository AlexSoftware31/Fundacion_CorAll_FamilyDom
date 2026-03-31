"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { countries } from "@/components/Common/countries";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TELEGRAM_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [form, setForm] = React.useState({
    nombre: "",
    pais: "",
    telefono: "",
    mensaje: "",
  });
  const [imagen, setImagen] = React.useState<File | null>(null);
  const [status, setStatus] = React.useState<
    "idle" | "enviando" | "ok" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    const texto = `
🌟 *Nuevo mensaje - Corall Family Dominicana*
👤 *Nombre:* ${form.nombre}
🌍 *País:* ${form.pais}
📞 *Teléfono:* ${form.telefono}
💬 *Mensaje:* ${form.mensaje}
    `;

    try {
      // 1. Enviar texto
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: texto,
          parse_mode: "Markdown",
        }),
      });

      // 2. Enviar imagen si existe
      if (imagen) {
        const formData = new FormData();
        formData.append("chat_id", TELEGRAM_CHAT_ID as string);
        formData.append("photo", imagen);
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendPhoto`, {
          method: "POST",
          body: formData,
        });
      }

      setStatus("ok");
      setForm({ nombre: "", pais: "", telefono: "", mensaje: "" });
      setImagen(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch {
      setStatus("error");
    }
  };

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

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    type="text"
                    placeholder="Nombre"
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:focus:placeholder:text-white"
                  />

                  <select
                    name="pais"
                    value={form.pais}
                    onChange={handleChange}
                    className="w-full appearance-none border-0 border-b border-gray-400 bg-transparent outline-none focus:border-blue-500 focus:ring-0 focus:outline-none lg:w-1/2"
                  >
                    <option value="">Seleccione un país</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    type="tel"
                    placeholder="No. Telefono"
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:focus:placeholder:text-white"
                  />

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={(e) => setImagen(e.target.files?.[0] || null)}
                    className="border-stroke dark:border-strokedark w-full border-b bg-transparent pb-3.5 lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    rows={4}
                    className="border-stroke focus:border-waterloo dark:border-strokedark dark:focus:border-manatee w-full border-b bg-transparent focus:placeholder:text-black focus-visible:outline-hidden dark:focus:placeholder:text-white"
                  ></textarea>
                </div>
                {status === "ok" && (
                  <p className="mb-4 font-medium text-green-600">
                    ✅ Mensaje enviado con éxito.
                  </p>
                )}
                {status === "error" && (
                  <p className="mb-4 font-medium text-red-600">
                    ❌ Error al enviar. Intenta de nuevo.
                  </p>
                )}

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <div className="mb-6 flex md:mb-0">
                    <p className="flex max-w-106.25 cursor-pointer pl-5 text-amber-600 select-none">
                      En la Fundación corAll Family Dominicana trabajamos con
                      esperanza, convicción y amor, porque cada latido cuenta y
                      cada vida importa.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "enviando"}
                    className="inline-flex items-center gap-2.5 rounded-full bg-amber-600 px-6 py-3 font-medium text-white duration-300 hover:bg-amber-500 disabled:opacity-50"
                  >
                    {status === "enviando" ? "Enviando..." : "Enviar Mensaje"}
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
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[34%] xl:pt-15"
            >
              <h2 className="xl:text-sectiontitle2 mb-12.5 text-3xl font-semibold text-amber-600">
                CONTÁCTANOS
              </h2>
              <div className="5 mb-7">
                <a
                  href="tel:+18098353555"
                  className="flex items-center gap-3 hover:text-amber-600"
                >
                  <FaPhoneAlt size={18} className="text-amber-600" />
                  +1 809-835-3555
                </a>
              </div>
              <div className="5 mb-7">
                <a
                  href="mailto:corallfamilydominicana@gmail.com"
                  className="flex items-center gap-3 hover:text-amber-600"
                >
                  <MdEmail size={20} className="text-amber-600" />
                  corallfamilydominicana@gmail.com
                </a>
              </div>
              <div className="5 mb-7">
                <a
                  href="https://www.instagram.com"
                  className="flex items-center gap-3 hover:text-amber-600"
                >
                  <FaInstagram size={20} className="text-amber-600" />
                  Instagram
                </a>
              </div>
              <div className="5 mb-7">
                <a
                  href="https://www.facebook.com"
                  className="flex items-center gap-3 hover:text-amber-600"
                >
                  <FaFacebook size={20} className="text-amber-600" />
                  Facebook
                </a>
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
