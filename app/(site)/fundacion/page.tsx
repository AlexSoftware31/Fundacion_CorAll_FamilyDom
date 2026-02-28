import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Fundacion from "@/components/Fundacion";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const FundacionPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Fundacion />
    </div>
  );
};

export default FundacionPage;
