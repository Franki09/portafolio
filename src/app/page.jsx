import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <div className="h-full py-20">
        <div className="h-screen p-5 flex flex-col justify-center items-center text-center gap-8 relative z-10">
          <div className="px-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-dark mb-4 drop-shadow-lg font-unbounded">
              Franco Gomez Rosell
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-grotesk">Desarrollador Frontend</p>
          </div>

          <Link
            href="/otros/Franco Gomez Rosell - CV.pdf"
            download="Franco_Gomez_Rosell_CV.pdf"
            className="inline-flex items-center gap-3 bg-primary-base text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-dark hover:animate-tilt transition-colors shadow-xl font-unbounded"
          >
            <FaDownload size={20} />
            Descargar CV
          </Link>
        </div>

        {/* El resto del contenido */}
        <AboutMe />
        <Proyects />

        <div className="flex flex-col justify-center items-center gap-4 px-4">
          <h2 className="text-center text-primary-dark text-xl sm:text-2xl font-semibold font-unbounded">
            Gracias por visitar mi portafolio!
          </h2>
          <p className="w-full max-w-md text-center mb-5 text-gray-600 text-base sm:text-lg font-grotesk px-4">
            Si quieres conocer mas informacion sobre mi, o comunicarte conmigo puedes descargar mi CV o revisar los siguientes
            vinculos:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5">
            <Link
              href="/otros/Franco Gomez Rosell - CV.pdf"
              download="Franco_Gomez_Rosell_CV.pdf"
              className="inline-flex items-center gap-2 sm:gap-3 bg-primary-base text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-md font-semibold font-unbounded hover:bg-primary-dark hover:scale-105 transition-all shadow-xl"
            >
              <FaDownload size={18} />
              Descargar CV
            </Link>
            <Link
              href={"https://github.com/Franki09"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent hover:animate-jump"
            >
              <FaGithub size={40} className="sm:w-[45px] sm:h-[45px]" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/franco-g%C3%B3mez-rosell/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent hover:animate-jump"
            >
              <FaLinkedin size={40} className="sm:w-[45px] sm:h-[45px]" />
            </Link>
            <Link
              href={"mailto:fgomezrosell@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent hover:animate-jump"
            >
              <MdEmail size={40} className="sm:w-[45px] sm:h-[45px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
