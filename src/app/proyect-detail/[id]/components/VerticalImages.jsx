"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function VerticalImageCarousel({ images, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Solo rotar si hay más de 2 imágenes
    if (images.length <= 2) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  // Función para obtener las dos imágenes visibles
  const getVisibleImages = () => {
    if (images.length === 1) {
      return [images[0], images[0]]; // Duplicar si solo hay una
    }
    if (images.length === 2) {
      return images; // Mostrar las dos
    }

    // Si hay más de 2, mostrar la actual y la siguiente
    const nextIndex = (currentIndex + 1) % images.length;
    return [images[currentIndex], images[nextIndex]];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Imagen superior */}
      <div className="relative h-1/2 rounded-lg overflow-hidden">
        <Image
          src={visibleImages[0]}
          alt={`${projectName} - imagen 1`}
          fill
          className={`object-cover transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Imagen inferior */}
      <div className="relative h-1/2 rounded-lg overflow-hidden">
        <Image
          src={visibleImages[1]}
          alt={`${projectName} - imagen 2`}
          fill
          className={`object-cover transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* Indicadores (opcional) - mostrar solo si hay más de 2 imágenes */}
      {images.length > 2 && (
        <div className="flex justify-center gap-2 mt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex || index === (currentIndex + 1) % images.length ? "bg-primary-base" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
