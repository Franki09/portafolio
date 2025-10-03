import AboutMe from "./components/AboutMe";
import Proyects from "./components/Proyects";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-primary-light h-screen pt-20">
      <div className="h-full p-5 flex flex-col justify-center items-center text-center gap-8 relative z-10">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-secondary-dark mb-4 drop-shadow-lg">Franco Gomez Rosell</h1>
          <p className="text-2xl md:text-3xl text-accent">Desarrollador Frontend</p>
        </div>

        <Link
          href="/otros/Franco Gomez Rosell - CV.pdf"
          download="Franco_Gomez_Rosell_CV.pdf"
          className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 hover:scale-105 transition-all shadow-xl"
        >
          <FaDownload size={20} />
          Descargar CV
        </Link>
      </div>

      {/* El resto del contenido */}
      <AboutMe />
      <Proyects />
    </div>
  );
}
