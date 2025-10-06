import { useState } from "react";

export function useTilt(maxRotation = 15, scale = 0.97) {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calcular rotación relativa a la posición del mouse
    const rotateX = ((y - height / 2) / height) * maxRotation;
    const rotateY = ((x - width / 2) / width) * -maxRotation;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);
  };

  const resetTilt = () => setTransform("");

  return { transform, handleMouseMove, resetTilt };
}
