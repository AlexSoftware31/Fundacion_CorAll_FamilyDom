import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Fundacion from "@/components/Fundacion";
import Programas from "@/components/Programas";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const ProgramasPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Programas/>
    </div>
  );
};

export default ProgramasPage;
