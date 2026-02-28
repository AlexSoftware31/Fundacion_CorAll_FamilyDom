import Mantenimiento from "@/components/Mantenimiento";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "TFundación CorAll Family Dominicana"
};

const EstructuraPage = () => {
  return (
    <Mantenimiento/>
  );
};

export default EstructuraPage;
