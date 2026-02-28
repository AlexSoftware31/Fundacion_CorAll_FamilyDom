import Org from "@/components/Organizacional";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

type PageProps = {
  params: {
    id: number;
  };
};


const OrganizacionalPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div >
      <Org id={id}/>
    </div>
  );
};

export default OrganizacionalPage;
