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
      <h1 className="text-5xl font-bold mb-10 text-center text-primary-dark">Detalles del proyecto</h1>

      {/* Layout principal: 60% contenido | 40% imágenes */}
      <div className="flex gap-8">
        {/* Columna izquierda - Contenido (60%) */}
        <div className="w-3/5 space-y-6">
          {/* Contenedor principal con información */}
          <div className="bg-secondary-light border-secondary-dark border-2 rounded-lg space-y-6">
            {/* Título y tipo */}
            <div className=" bg-secondary-dark text-white p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-3xl font-bold">{proyecto.name}</h2>
                <h2 className="text-2xl font-bold text-accent">{proyecto.devType}</h2>
              </div>
              <p className="text-lg opacity-90">{proyecto.type}</p>
            </div>

            <section className="px-6 pb-6">
              {/* Descripción - Espacio aumentado con pt-4 y pb-8 */}
              <div className="border-b-2 border-accent pt-4 pb-8">
                <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Descripción</h3>
                {/* Texto cambiado a gris */}
                <p className="text-base leading-relaxed text-gray-600">{proyecto.desc}</p>
              </div>

              {/* Funcionalidades desarrolladas - Espacio aumentado con pt-4 y pb-6 */}
              <div className="border-b-2 border-accent pt-4 pb-6">
                <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Funcionalidades desarrolladas</h3>
                {/* Texto cambiado a gris */}
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600">
                  {proyecto.devFunctions.map((funciones, index) => (
                    <li key={index} className="leading-relaxed">
                      {funciones}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologías utilizadas - Espacio aumentado con pt-4 y pb-6 */}
              <div className="border-b-2 border-accent pt-4 pb-6">
                <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Tecnologías utilizadas</h3>
                {/* Texto cambiado a gris y negrita para destacar */}
                <p className="text-base font-semibold text-gray-600">{proyecto.techUsed.join(", ")}</p>
              </div>

              {/* Colaboradores (si existen) - Espacio aumentado con pt-4 y pb-6 */}
              {proyecto.colaborators?.existed === true && (
                <div className="border-b-2 border-accent pt-4 pb-6">
                  <h3 className="text-2xl font-bold mb-3 text-secondary-dark">Colaboradores de Front-End</h3>
                  <ul className="space-y-1">
                    {/* El Link se mantiene con colores de Link */}
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

              {/* Información del cliente - Espacio aumentado con pt-4 */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-secondary-dark">Desarrollado para {proyecto.for.name}</h3>
                  <Image src={proyecto.for.image} alt={proyecto.for.name} height={50} width={50} className="rounded-full" />
                </div>
                {/* Texto de tiempo de desarrollo cambiado a gris */}
                <p className="text-base text-gray-600">
                  Tiempo de desarrollo: <span className="font-semibold text-gray-600">{proyecto.for.when}</span>
                </p>
              </div>
            </section>
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
              Ver Proyecto en vivo{proyecto.note.exist === true && <span className="text-red-500">*</span>}
            </Link>
          </div>

          {/* Nota (si existe) - Fuera del contenedor pero con el mismo ancho */}
          {proyecto.note?.exist === true && (
            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
              {/* Este texto mantiene su color de nota */}
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
