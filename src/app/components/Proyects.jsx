"use client";
import { mainProyects } from "@/seeders/mainProyectsData";
import { MainProjectCard } from "./MainProjectCard";
import SideProyects from "./SideProyects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Proyects() {
  const [refMain, isVisibleMain] = useScrollAnimation();
  const [refSide, isVisibleSide] = useScrollAnimation();

  return (
    <div id="proyects" className="flex flex-col justify-center items-center p-5 sm:p-8 md:p-10">
      <div className="mb-8 w-full max-w-7xl">
        <h1 className="text-center text-primary-dark text-3xl sm:text-4xl md:text-5xl font-semibold pb-2 font-unbounded">
          Mis proyectos principales
        </h1>
        <p className="mb-5 text-center text-gray-600 text-base sm:text-lg md:text-2xl font-grotesk px-3">
          Proyectos a los que les dediqué más tiempo, siendo más complejos y con más funcionalidades
        </p>

        <div
          ref={refMain}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 p-3 sm:p-5 ${
            isVisibleMain ? "animate-fade-right" : "opacity-0"
          }`}
        >
          {mainProyects.map((proyect) => (
            <MainProjectCard key={proyect.id} proyect={proyect} />
          ))}
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-center text-primary-dark text-2xl sm:text-3xl font-semibold pb-2 font-unbounded">
          Mis proyectos secundarios
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-xl font-grotesk mb-5">
          Proyectos de práctica a los que no les dediqué tanto tiempo, ni tienen tantas funcionalidades como los principales
        </p>
        <div ref={refSide} className={`mb-5 ${isVisibleSide ? "animate-fade-up" : "opacity-0"}`}>
          <SideProyects />
        </div>
      </div>
    </div>
  );
}

export default Proyects;
