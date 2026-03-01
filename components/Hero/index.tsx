"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero/heroimg.png",
    title: "Para que nacer con un corazón distinto no limite la vida",
  },
  {
    image: "/images/hero/heroimg.png",
    title: "Impulse life",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Imagen */}
      <Image
        src={slides[current].image}
        alt="hero"
        fill
        priority
        sizes="100vw"
        className="object-cover transition-all duration-700"
      />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-13 text-center text-white">
        <div key={current} className="animate-fadeUp max-w-2xl">
          <h1 className="mb-4 text-4xl font-semibold md:text-5xl" style={{fontFamily: "Georgia"}}>
            {slides[current].title}
          </h1>
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white hover:bg-white/50"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white hover:bg-white/50"
      >
        <ChevronRight size={30} />
      </button>
    </section>
  );
}
