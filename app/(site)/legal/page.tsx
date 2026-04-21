import { Metadata } from "next";
import Legal from "@/components/Footer/Legal";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const LegalPage = () => {
  return (
    <div className="pb-10 pt-25">
      <Legal />
    </div>
  );
};

export default LegalPage;
