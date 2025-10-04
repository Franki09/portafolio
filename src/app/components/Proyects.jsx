import { mainProyects } from "@/seeders/mainProyectsData";
import { MainProjectCard } from "./MainProjectCard";
import SideProyects from "./SideProyects";

function Proyects() {
  return (
    <div id="proyects" className="flex flex-col justify-center items-center p-10">
      <div className="mb-8">
        <h1>Mis proyectos principales</h1>
        <p className="mb-10">Proyectos a los que les dedique mas tiempo, siendo mas complejos y con mas funcionalidades</p>
        <div className="grid grid-cols-3 justify-center items-center gap-5 p-5">
          {mainProyects.map((proyect) => (
            <MainProjectCard key={proyect.id} proyect={proyect} />
          ))}
        </div>
      </div>

      <h2>Mis proyectos secundarios</h2>
      <p className="pb-5">
        Proyectos de practica a los que no les dedique tanto tiempo, ni tienen tantas funcionalidades como los principales
      </p>
      <div className="mb-5">
        <SideProyects />
      </div>
    </div>
  );
}

export default Proyects;
