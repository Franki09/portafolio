import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <div id="about" className="bg-primary-base flex justify-center items-center gap-20 p-10">
      <Image
        src={"/Foto3.jpeg"}
        alt="Mi Foto"
        width={350}
        height={350}
        className="rounded-full border-8 border-secondary-light"
      />
      <div className="bg-secondary-light rounded-md p-8 flex-col">
        <h2 className="pb-3">Hola!</h2>
        <p className="max-w-2xl pb-3">
          Soy un desarrollador frontend apasionado por crear experiencias digitales que realmente sumen valor. Mi día a día gira
          en dar vida a interfaces modernas, funcionales y bien estructuradas. Más allá del código, lo que más me motiva es pensar
          en cómo cada detalle puede mejorar la experiencia de usuario y hacer que una web sea intuitiva y agradable de usar.
          <br /> Me considero una persona creativa, responsable y colaboradora, siempre abierta a aprender algo nuevo y a
          compartir lo que sé. Valoro mucho el trabajo en equipo, porque creo que los mejores proyectos surgen cuando las ideas y
          perspectivas se combinan. Me gusta trabajar en entornos ágiles y dinámicos, donde puedo crecer profesionalmente y
          aportar no solo en lo técnico, sino también en lo humano. <br /> Actualmente busco seguir evolucionando como
          profesional, enfrentar nuevos desafíos y, sobre todo, aportar valor en cada proyecto en el que participe. Para mí, cada
          línea de código es una oportunidad de aprender, mejorar y crear algo que realmente marque la diferencia.
        </p>

        <h2 className="pb-5">Estas son las tecnologias principales que uso:</h2>
        <div className="flex justify-center items-center gap-5">
          <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target="_blank" rel="noopener noreferrer">
            <Image src={"/logos/JavaScript-logo.png"} alt={"JavaScript"} width={70} height={70} className="rounded-full" />
          </Link>
          <Link href={"https://www.typescriptlang.org/"} target="_blank" rel="noopener noreferrer">
            <Image src={"/logos/Typescript-logo.png"} alt={"TypeScript"} width={70} height={70} className="rounded-full" />
          </Link>
          <Link href={"https://es.react.dev/"} target="_blank" rel="noopener noreferrer">
            <Image src={"/logos/React-logo.png"} alt={"React"} width={70} height={70} className="rounded-full" />
          </Link>
          <Link href={"https://nextjs.org/docs"} target="_blank" rel="noopener noreferrer">
            <Image src={"/logos/Next-logo.png"} alt={"Next"} width={70} height={70} className="rounded-full" />
          </Link>
          <Link href={"https://tailwindcss.com/"} target="_blank" rel="noopener noreferrer">
            <Image src={"/logos/TailWind-logo.png"} alt={"Tailwind"} width={70} height={70} className="rounded-full" />
          </Link>
          <Link href={"https://vercel.com/"} target="_blank" rel="noopener noreferrer">
            <Image src={"/logos/Vercel-logo.png"} alt={"Vercel"} width={70} height={70} className="rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
