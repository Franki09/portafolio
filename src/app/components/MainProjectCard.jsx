"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

// Componente separado para cada tarjeta de proyecto
export function MainProjectCard({ proyect }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev === proyect.image.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [proyect.image.length]);

  return (
    <div className="w-full h-full flex flex-col bg-secondary-light rounded-lg border-4 border-secondary-dark hover:scale-105 transform transition-transform duration-300 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
      {/* Imagen del contenedor */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={proyect.image[currentImage]}
          alt={proyect.name}
          fill
          className={`object-cover rounded-lg transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* El resto del contenido */}
      <div className="flex-1 flex flex-col p-4 sm:p-5">
        {/* Titulo, tipo de desarrollo y para quien lo hice */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-3">
          <h2 className="text-secondary-dark font-semibold text-lg sm:text-xl font-unbounded line-clamp-2 flex-1 min-w-0 text-center sm:text-left">
            {proyect.name}
          </h2>
          <div className="flex justify-center sm:justify-end items-center gap-2 bg-primary-base rounded-full p-1 sm:p-2 flex-shrink-0">
            <h3 className="text-secondary-light font-unbounded text-xs sm:text-sm whitespace-nowrap">{proyect.devType}</h3>
            <Link href={proyect.for.web} target="_blank" rel="noopener noreferrer">
              <Image
                src={proyect.for.image}
                alt={proyect.for.name}
                height={35}
                width={35}
                className="hover:animate-wiggle hover:animate-infinite rounded-full w-8 h-8 sm:w-10 sm:h-10"
              />
            </Link>
          </div>
        </div>

        {/* Descripción del proyecto */}
        <p className="mb-2 flex-1 text-gray-600 font-mono flex items-center text-sm sm:text-base text-center sm:text-left">
          {proyect.desc}
        </p>

        {/* Tiempo del proyecto */}
        <h4 className="mb-4 text-accent text-lg sm:text-xl font-grotesk font-semibold text-center sm:text-left">
          {proyect.for.when}
        </h4>

        {/* Botón para ver más detalles */}
        <div className="flex justify-center">
          <Link
            href={`/proyect-detail/${proyect.id}`}
            className="inline-block w-full text-center px-4 py-2 sm:px-6 sm:py-2 bg-primary-base text-white rounded-xl hover:bg-primary-dark transition-colors hover:scale-105 font-unbounded font-semibold text-sm sm:text-base"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
