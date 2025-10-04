import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <div className="bg-primary-light h-full py-20">
      <div className="h-screen p-5 flex flex-col justify-center items-center text-center gap-8 relative z-10">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-primary-dark mb-4 drop-shadow-lg">Franco Gomez Rosell</h1>
          <p className="text-2xl md:text-3xl text-secondary-dark">Desarrollador Frontend</p>
        </div>

        <Link
          href="/otros/Franco Gomez Rosell - CV.pdf"
          download="Franco_Gomez_Rosell_CV.pdf"
          className="inline-flex items-center gap-3 bg-primary-base text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark hover:animate-tilt transition-colors shadow-xl"
        >
          <FaDownload size={20} />
          Descargar CV
        </Link>
      </div>

      {/* El resto del contenido */}
      <AboutMe />
      <Proyects />

      <div className="flex flex-col justify-center items-center gap-4 ">
        <h2>Gracias por visitar mi portafolio!</h2>
        <p className="w-full max-w-md text-center">
          Si quieres conocer mas informacion sobre mi, o comunicarte con migo puedes descargar mi CV o revisar los siguientes
          vinculos:
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/otros/Franco Gomez Rosell - CV.pdf"
            download="Franco_Gomez_Rosell_CV.pdf"
            className="inline-flex items-center gap-3 bg-primary-base text-white px-4 py-2 rounded-lg text-md font-semibold hover:bg-primary-dark hover:scale-105 transition-all shadow-xl"
          >
            <FaDownload size={20} />
            Descargar CV
          </Link>
          <Link href={"https://github.com/Franki09"} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaGithub size={35} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/franco-g%C3%B3mez-rosell/"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            <FaLinkedin size={35} />
          </Link>
          <Link href={"mailto:fgomezrosell@gmail.com"} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <MdEmail size={35} />
          </Link>
        </div>
      </div>
    </div>
  );
}
