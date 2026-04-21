import { Metadata } from "next";
import Cookies from "@/components/Footer/Cookies";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana"
};

const CookiesPage = () => {
  return (
    <div className="pb-10 pt-25">
      <Cookies/>
      
    </div>
  );
};

export default CookiesPage;
