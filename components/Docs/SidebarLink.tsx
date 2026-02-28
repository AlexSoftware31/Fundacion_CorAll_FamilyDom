"use client";
import Link from "next/link";

const SidebarLink = ({docsNum}) => {
  let style = "bg-stroke dark:bg-blackho"
  
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs  px-3 py-2 text-base text-black  dark:text-white ${docsNum == 1 ? style : ""}`}
        >
          Cardiopatía
        </Link>
        <Link
          href={`/docs1`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white ${docsNum == 2 ? style : ""}`}
        >
          Tipo de Cardiopatía
        </Link>
        <Link
          href={`/docs2`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white ${docsNum == 3 ? style : ""}`}
        >
          Las Causas
        </Link>
        <Link
          href={`/docs3`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white ${docsNum == 4 ? style : ""}`}
        >
         Las Causas del Aumento
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
