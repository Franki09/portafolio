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
    <div className="w-full h-full flex flex-col bg-secondary-light rounded-lg border-4 border-secondary-dark hover:scale-105 transform transition-transform duration-300">
      {/* Imagen del contenedor */}
      <div className="relative w-full h-64">
        <Image
          src={proyect.image[currentImage]}
          alt={proyect.name}
          fill
          className={`object-cover rounded-lg transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* El resto del contenido */}
      <div className="flex-1 flex flex-col p-3">
        {/* Titulo, tipo de desarrollo y para quien lo hice (todo en un renglon) */}
        <div className="flex justify-between items-center gap-3 mb-3">
          <h2 className="text-secondary-dark font-semibold text-xl font-unbounded line-clamp-2 flex-1 min-w-0">{proyect.name}</h2>
          <div className="flex justify-center items-center gap-2 bg-primary-base rounded-full p-1 flex-shrink-0">
            <h3 className="text-secondary-light font-unbounded text-sm whitespace-nowrap">{proyect.devType}</h3>
            <Link href={proyect.for.web} target="_blank" rel="noopener noreferrer">
              <Image
                src={proyect.for.image}
                alt={proyect.for.name}
                height={40}
                width={40}
                className=" hover:animate-wiggle hover:animate-infinite rounded-full"
              />
            </Link>
          </div>
        </div>

        {/* Descripcion del proyecto */}
        <p className="mb-2 flex-1 text-gray-600 font-mono flex items-center">{proyect.desc}</p>

        {/* Tiempo del proyecto */}
        <h4 className="mb-4 text-accent text-xl font-grotesk font-semibold">{proyect.for.when}</h4>

        {/* Boton para ver mas detalles */}
        <div className="flex justify-center">
          <Link
            href={`/proyect-detail/${proyect.id}`}
            className="inline-block w-full text-center px-6 py-2 bg-primary-base text-white rounded-xl hover:bg-primary-dark transition-colors hover:scale-105 font-unbounded font-semibold"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
