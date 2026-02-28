import Mantenimiento from "@/components/Mantenimiento";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const NoticiasPage = () => {
  return (
    <Mantenimiento/>
  );
};

export default NoticiasPage;
