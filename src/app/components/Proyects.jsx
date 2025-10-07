"use client";
import { mainProyects } from "@/seeders/mainProyectsData";
import { MainProjectCard } from "./MainProjectCard";
import SideProyects from "./SideProyects";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Proyects() {
  const [refMain, isVisibleMain] = useScrollAnimation();
  const [refSide, isVisibleSide] = useScrollAnimation();

  return (
    <div id="proyects" className="flex flex-col justify-center items-center p-10">
      <div className="mb-8">
        <h1 className="text-center text-primary-dark text-5xl font-semibold pb-2 font-unbounded">Mis proyectos principales</h1>
        <p className="mb-5 text-center text-gray-600 text-2xl font-grotesk ">
          Proyectos a los que les dedique mas tiempo, siendo mas complejos y con mas funcionalidades
        </p>
        <div
          ref={refMain}
          className={`grid grid-cols-3 justify-center items-center gap-5 p-5 ${
            isVisibleMain ? "animate-fade-right" : "opacity-0"
          }`}
        >
          {mainProyects.map((proyect) => (
            <MainProjectCard key={proyect.id} proyect={proyect} />
          ))}
        </div>
      </div>

      <h2 className="text-center text-primary-dark text-3xl font-semibold pb-2 font-unbounded">Mis proyectos secundarios</h2>
      <p className="text-center text-gray-600 text-xl font-grotesk">
        Proyectos de practica a los que no les dedique tanto tiempo, ni tienen tantas funcionalidades como los principales
      </p>
      <div ref={refSide} className={`mb-5 ${isVisibleSide ? "animate-fade-up" : "opacity-0"}`}>
        <SideProyects />
      </div>
    </div>
  );
}

export default Proyects;
