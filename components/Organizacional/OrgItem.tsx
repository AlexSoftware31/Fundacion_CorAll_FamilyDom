"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OrgItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;

  return (
    <>
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
        className="animate_top shadow-solid-8 dark:bg-blacksection rounded-lg bg-white p-4 pb-9"
      >
        <div className="relative mx-auto h-55 w-55 overflow-hidden rounded-full">
          <Image src={mainImage} alt={title} fill className="object-cover" />
        </div>

        <div className="mt-4 px-4">
          {slug && (
            <span className="inline-flex items-center rounded-md bg-amber-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
              {slug}
            </span>
          )}

          <h3 className="xl:text-itemtitle2 mt-5 mb-3 line-clamp-2 text-lg font-semibold text-black duration-300 hover:text-amber-600 dark:text-white dark:hover:text-amber-600">
            {title.slice(0, 40)}
          </h3>

          <p className="line-clamp-12" style={{ fontSize: "14px" }}>
            {metadata}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default OrgItem;
