"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import Link from "next/link";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-gray-200 py-10">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* IZQUIERDA: ICONO + TEXTO */}
            <div className="flex items-center gap-6">
              {/* Icono */}
              <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-red-500">
                <span className="text-2xl text-red-500">❤️</span>
              </div>

              {/* Texto */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 md:text-xl">
                  ¿TE GUSTARÍA HACER ALGO MARAVILLOSO HOY?
                </h2>

                <p className="mt-1 font-medium text-amber-600">
                  REALIZA TU DONACIÓN
                </p>
              </div>
            </div>

            {/* BOTÓN DERECHA */}
            <Link
              href="/donar"
              className="rounded-full bg-amber-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-amber-600"
            >
              DONAR
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
