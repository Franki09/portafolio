"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTilt } from "../hooks/useTilt";

function AboutMe() {
  const [ref, isVisible] = useScrollAnimation();
  const { transform, handleMouseMove, resetTilt } = useTilt(45, 0.95);
  return (
    <div ref={ref} className={isVisible ? "animate-fade-up" : "opacity-0"}>
      {/* // 1. Degradado de Primary-light (color de la Home) a Secondary-dark (color de la sección) */}
      <div className="h-20 bg-gradient-to-b from-primary-light to-primary-base">
        {/* Esto crea una banda de transición de 40 unidades de altura */}
      </div>

      <div id="about" className="bg-primary-base flex justify-center items-center gap-20 p-10 ">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{
            transform,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className=" rounded-full transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)]"
        >
          <Image
            src={"/Foto3.jpeg"}
            alt="Mi Foto"
            width={350}
            height={350}
            className="rounded-full border-8 border-secondary-light pointer-events-none select-none"
          />
        </div>
        <div className="bg-secondary-light rounded-md p-8 flex-col">
          <h2 className="pb-4 text-secondary-dark font-bold text-4xl">Hola!</h2>
          <div className="max-w-2xl pb-3">
            <p className="pb-3 text-gray-600">
              Soy un desarrollador frontend apasionado por crear experiencias digitales que realmente sumen valor. Mi día a día
              gira en dar vida a interfaces modernas, funcionales y bien estructuradas. Más allá del código, lo que más me motiva
              es pensar en cómo cada detalle puede mejorar la experiencia de usuario y hacer que una web sea intuitiva y agradable
              de usar.
            </p>
            <p className="pb-3 text-gray-600">
              Me considero una persona creativa, responsable y colaboradora, siempre abierta a aprender algo nuevo y a compartir
              lo que sé. Valoro mucho el trabajo en equipo, porque creo que los mejores proyectos surgen cuando las ideas y
              perspectivas se combinan. Me gusta trabajar en entornos ágiles y dinámicos, donde puedo crecer profesionalmente y
              aportar no solo en lo técnico, sino también en lo humano.
            </p>
            <p className="pb-3 text-gray-600">
              Actualmente busco seguir evolucionando como profesional, enfrentar nuevos desafíos y, sobre todo, aportar valor en
              cada proyecto en el que participe. Para mí, cada línea de código es una oportunidad de aprender, mejorar y crear
              algo que realmente marque la diferencia.
            </p>
          </div>

          <h2 className="pb-5 text-secondary-dark text-lg">Estas son las tecnologias principales que uso:</h2>
          <div className="flex justify-center items-center gap-5">
            <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/JavaScript-logo.png"}
                alt={"JavaScript"}
                width={70}
                height={70}
                className="rounded-full hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
            <Link href={"https://www.typescriptlang.org/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/Typescript-logo.png"}
                alt={"TypeScript"}
                width={70}
                height={70}
                className="rounded-full hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
            <Link href={"https://es.react.dev/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/React-logo.png"}
                alt={"React"}
                width={70}
                height={70}
                className="rounded-full hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
            <Link href={"https://nextjs.org/docs"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/Next-logo.png"}
                alt={"Next"}
                width={70}
                height={70}
                className="rounded-full hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
            <Link href={"https://tailwindcss.com/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/TailWind-logo.png"}
                alt={"Tailwind"}
                width={70}
                height={70}
                className=" rounded-full hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
            <Link href={"https://vercel.com/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/Vercel-logo.png"}
                alt={"Vercel"}
                width={70}
                height={70}
                className="rounded-full hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-20 bg-gradient-to-b  from-primary-base to-primary-light">
        {/* Esto crea una banda de transición de 40 unidades de altura */}
      </div>
    </div>
  );
}

export default AboutMe;
