import React from "react";
import { Metadata } from "next";
import Donar from "@/components/Donar";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana - Donar",

  // other metadata
  description: "Fundación CorAll Family Dominicana - Donar"
};

const DonarPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Donar />
    </div>
  );
};

export default DonarPage;
