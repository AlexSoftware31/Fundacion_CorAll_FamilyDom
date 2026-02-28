import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, id } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5"
      >
        {/* <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          
        </div> */}
        <Image src={icon} width={180} height={160} alt="title" />
        <h3 className="xl:text-itemtitle mt-7.5 mb-5 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p>{description}</p>

        <div>
          <a
            href={`/organizacional/${id}`}
            className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-amber-600 dark:text-white dark:hover:text-amber-600"
          >
            <span className="duration-300 group-hover:pr-2">Saber Mas</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
