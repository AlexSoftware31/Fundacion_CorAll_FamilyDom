"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/hero/indeximg.png"
          alt="hero"
          fill
          className="object-cover"
        />
        
      </section>
    </>
  );
};

export default Hero;
