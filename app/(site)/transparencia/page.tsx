import { Metadata } from "next";
import Privacy from "@/components/Footer/Privacy";
import Transparencia from "@/components/Transparencia";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const TransparenciaPage = () => {
  return (
    <div className="pb-10 pt-25">
      <Transparencia/>
    </div>
  );
};

export default TransparenciaPage;
