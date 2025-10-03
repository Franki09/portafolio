import { mainProyects } from "@/seeders/mainProyectsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VerticalImageCarousel } from "./components/VerticalImages";

function ProyectDetail({ params }) {
  const proyecto = mainProyects.find((p) => p.id === params.id);

  if (!proyecto) {
    notFound();
  }

  return (
    <div className="bg-primary-light min-h-screen py-20 px-10">
      <h1 className="text-5xl font-bold mb-10 text-center text-secondary-dark">Detalles del proyecto</h1>

      {/* Layout principal: 60% contenido | 40% imágenes */}
      <div className="flex gap-8">
        {/* Columna izquierda - Contenido (60%) */}
        <div className="w-3/5 space-y-6">
          {/* Contenedor principal con información */}
          <div className="bg-secondary-light border-secondary-dark border-2 rounded-lg p-6 space-y-6">
            {/* Título y tipo */}
            <div className="border-b-2 border-accent pb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-bold text-primary-dark">{proyecto.name}</h2>
                <h2 className="text-2xl font-bold text-primary-base">{proyecto.devType}</h2>
              </div>
              <p className="text-xl text-gray-600">{proyecto.type}</p>
            </div>

            {/* Descripción */}
            <div className="border-b-2 border-accent pb-4">
              <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Descripción</h3>
              <p className="text-base leading-relaxed">{proyecto.desc}</p>
            </div>

            {/* Funcionalidades desarrolladas */}
            <div className="border-b-2 border-accent pb-4">
              <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Funcionalidades desarrolladas</h3>
              <ul className="list-disc list-inside space-y-2 text-base">
                {proyecto.devFunctions.map((funciones, index) => (
                  <li key={index} className="leading-relaxed">
                    {funciones}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tecnologías utilizadas */}
            <div className="border-b-2 border-accent pb-4">
              <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Tecnologías utilizadas</h3>
              <p className="text-base">{proyecto.techUsed.join(", ")}</p>
            </div>

            {/* Colaboradores (si existen) */}
            {proyecto.colaborators?.existed === true && (
              <div className="border-b-2 border-accent pb-4">
                <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Colaboradores de Front-End</h3>
                <ul className="space-y-1">
                  {proyecto.colaborators.socials.map((info, index) => (
                    <li key={index}>
                      <Link
                        href={info.linkedin}
                        target="_blank"
                        className="text-base text-primary-base hover:text-primary-dark underline transition-colors"
                      >
                        {info.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Información del cliente */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-secondary-dark">Desarrollado para {proyecto.for.name}</h3>
                <Image src={proyecto.for.image} alt={proyecto.for.name} height={50} width={50} className="rounded-full" />
              </div>
              <p className="text-base text-gray-600">
                Tiempo de desarrollo: <span className="font-semibold text-gray-800">{proyecto.for.when}</span>
              </p>
            </div>
          </div>

          {/* Enlaces - Fuera del contenedor pero con el mismo ancho */}
          <div className="flex gap-4">
            <Link
              href={proyecto.repoUrl}
              target="_blank"
              className="flex-1 text-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-lg font-semibold"
            >
              Ver Repositorio
            </Link>
            <Link
              href={proyecto.deployUrl}
              target="_blank"
              className="flex-1 text-center px-6 py-3 bg-primary-base text-white rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold"
            >
              Ver Proyecto en vivo
            </Link>
          </div>

          {/* Nota (si existe) - Fuera del contenedor pero con el mismo ancho */}
          {proyecto.note?.exist === true && (
            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
              <p className="text-red-600 text-base">*{proyecto.note.text}</p>
            </div>
          )}
        </div>

        {/* Columna derecha - Imágenes (40%) */}
        <div className="w-2/5">
          <div className="sticky top-24 h-[600px]">
            <VerticalImageCarousel images={proyecto.image} projectName={proyecto.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectDetail;
