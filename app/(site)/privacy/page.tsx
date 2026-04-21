import { Metadata } from "next";
import Privacy from "@/components/Footer/Privacy";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const PrivacyPage = () => {
  return (
    <div className="pb-10 pt-25">
      <Privacy />
      
    </div>
  );
};

export default PrivacyPage;
