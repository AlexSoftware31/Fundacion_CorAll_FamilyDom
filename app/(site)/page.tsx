import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import Integration from "@/components/Integration";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Fundación CorAll Family Dominicana",

  // other metadata
  description: "Fundación CorAll Family Dominicana",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      <Brands />
      <Blog />
      <Integration />
    </main>
  );
}
