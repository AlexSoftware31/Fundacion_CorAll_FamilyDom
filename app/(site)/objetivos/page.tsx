import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Objetivos from "@/components/Objetivos";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const ObjetivosPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Objetivos />
    </div>
  );
};

export default ObjetivosPage;
