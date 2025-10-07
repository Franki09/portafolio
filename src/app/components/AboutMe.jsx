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
      <div
        id="about"
        className="bg-primary-base flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 p-6 md:p-10 text-center md:text-left"
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{
            transform,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          // 🟢 CAMBIO CLAVE: Añade 'flex-shrink-0' aquí
          className="rounded-full transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0"
        >
          <Image
            src={"/Foto3.jpeg"}
            alt="Mi Foto"
            width={350}
            height={350}
            className="rounded-full border-8 border-secondary-light pointer-events-none select-none w-48 h-48 sm:w-72 sm:h-72 lg:w-full md:h-full"
          />
        </div>

        <div className="bg-secondary-light rounded-md p-6 sm:p-8 flex flex-col max-w-xl md:max-w-2xl">
          <h2 className="pb-4 text-secondary-dark text-3xl sm:text-4xl font-bbh">Hola!</h2>

          <div className="pb-3 text-gray-600 font-mono text-sm sm:text-base">
            <p className="pb-3">
              Soy un desarrollador frontend apasionado por crear experiencias digitales que realmente sumen valor. Mi día a día
              gira en dar vida a interfaces modernas, funcionales y bien estructuradas. Más allá del código, lo que más me motiva
              es pensar en cómo cada detalle puede mejorar la experiencia de usuario y hacer que una web sea intuitiva y agradable
              de usar.
            </p>
            <p className="pb-3">
              Me considero una persona creativa, responsable y colaboradora, siempre abierta a aprender algo nuevo y a compartir
              lo que sé. Valoro mucho el trabajo en equipo, porque creo que los mejores proyectos surgen cuando las ideas y
              perspectivas se combinan. Me gusta trabajar en entornos ágiles y dinámicos, donde puedo crecer profesionalmente y
              aportar no solo en lo técnico, sino también en lo humano.
            </p>
            <p className="pb-3">
              Actualmente busco seguir evolucionando como profesional, enfrentar nuevos desafíos y, sobre todo, aportar valor en
              cada proyecto en el que participe. Para mí, cada línea de código es una oportunidad de aprender, mejorar y crear
              algo que realmente marque la diferencia.
            </p>
          </div>

          <h2 className="pb-5 text-secondary-dark text-base sm:text-lg font-grotesk">
            Estas son las tecnologias principales que uso:
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-7">
            <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/JavaScript-logo.png"}
                alt={"JavaScript"}
                width={70}
                height={70}
                className="rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>

            <Link href={"https://www.typescriptlang.org/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/Typescript-logo.png"}
                alt={"TypeScript"}
                width={70}
                height={70}
                className="rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>

            <Link href={"https://es.react.dev/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/React-logo.png"}
                alt={"React"}
                width={70}
                height={70}
                className="rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>

            <Link href={"https://nextjs.org/docs"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/Next-logo.png"}
                alt={"Next"}
                width={70}
                height={70}
                className="rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>

            <Link href={"https://tailwindcss.com/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/TailWind-logo.png"}
                alt={"Tailwind"}
                width={70}
                height={70}
                className="rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>

            <Link href={"https://vercel.com/"} target="_blank" rel="noopener noreferrer">
              <Image
                src={"/logos/Vercel-logo.png"}
                alt={"Vercel"}
                width={70}
                height={70}
                className="rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
