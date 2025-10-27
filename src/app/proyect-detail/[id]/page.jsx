"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VerticalImageCarousel } from "./components/VerticalImages";
import { use } from "react";
import { mainProjectsEs } from "@/seeders/projects/es/mainProjectsData_es";
import { mainProjectsEn } from "@/seeders/projects/en/mainProjectsData_en";
import { useLanguage } from "@/context/LanguageContext";
import { contentEn } from "@/seeders/pageTexts_en";
import { contentEs } from "@/seeders/pageTexts_es";

function ProyectDetail({ params }) {
  const { id } = use(params);

  const { lang } = useLanguage();

  let data;
  let mainProjectsData;

  if (lang === "en") {
    data = contentEn;
    mainProjectsData = mainProjectsEn;
  } else if (lang === "es") {
    data = contentEs;
    mainProjectsData = mainProjectsEs;
  }

  const proyecto = mainProjectsData.find((p) => p.id === id);

  if (!proyecto) {
    notFound();
  }

  return (
    <div className="bg-primary-light min-h-screen py-10 sm:py-20 px-4 sm:px-8 md:px-10">
      <h1 className="text-3xl sm:text-5xl font-bold my-8 mt-14 sm:my-12 text-center text-primary-dark font-unbounded">
        {data.projectDetail.tittle}
      </h1>

      {/* Layout principal: flex-col en móvil/tablet | lg:flex-row en PC */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Columna izquierda - Contenido (60% en PC, w-full en móvil/tablet) */}
        <div className="w-full lg:w-3/5 space-y-6">
          {/* Contenedor principal con información */}
          <div className="bg-secondary-light border-secondary-dark border-2 rounded-lg space-y-6">
            {/* Título y tipo */}
            <div className="bg-secondary-dark text-white p-3 sm:p-4">
              <div className="flex flex-wrap justify-between items-baseline gap-x-4 mb-2">
                <h2 className="text-2xl sm:text-3xl font-bold font-unbounded flex-1">{proyecto.name}</h2>
                <h2 className="text-lg sm:text-2xl text-accent font-bbh flex-shrink-0">{proyecto.devType}</h2>
              </div>
              <p className="text-sm sm:text-lg opacity-90 font-grotesk">{proyecto.type}</p>
            </div>

            <section className="px-6 pb-6">
              {/* Descripción - Espacio aumentado con pt-4 y pb-8 */}
              <div className="border-b-2 border-accent pt-4 pb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary-dark font-grotesk">{data.projectDetail.desc}</h3>
                {/* Texto cambiado a gris */}
                <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-mono">{proyecto.desc}</p>
              </div>

              {/* Funcionalidades desarrolladas - Espacio aumentado con pt-4 y pb-6 */}
              <div className="border-b-2 border-accent pt-4 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary-dark font-grotesk">
                  {data.projectDetail.functions}
                </h3>
                {/* Texto cambiado a gris */}
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600 font-mono">
                  {proyecto.devFunctions.map((funciones, index) => (
                    <li key={index} className="leading-relaxed">
                      {funciones}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tecnologías utilizadas - Espacio aumentado con pt-4 y pb-6 */}
              <div className="border-b-2 border-accent pt-4 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary-dark font-grotesk">{data.projectDetail.tech}</h3>
                {/* Texto cambiado a gris y negrita para destacar */}
                <p className="text-sm sm:text-base font-semibold text-gray-600 font-mono">{proyecto.techUsed.join(", ")}</p>
              </div>

              {/* Colaboradores (si existen) - Espacio aumentado con pt-4 y pb-6 */}
              {proyecto.colaborators?.existed === true && (
                <div className="border-b-2 border-accent pt-4 pb-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-grotesk mb-3 text-secondary-dark">
                    {data.projectDetail.colaborators}
                  </h3>
                  <ul className="space-y-1 font-mono">
                    {/* El Link se mantiene con colores de Link */}
                    {proyecto.colaborators.socials.map((info, index) => (
                      <li key={index}>
                        <Link
                          href={info.linkedin}
                          target="_blank"
                          className="text-sm sm:text-base text-primary-base hover:text-primary-dark underline transition-colors"
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
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-dark font-grotesk">
                    {data.projectDetail.devFor} {proyecto.for.name}
                  </h3>
                  <Link href={proyecto.for.web} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={proyecto.for.image}
                      alt={proyecto.for.name}
                      height={40}
                      width={40}
                      className="rounded-full w-10 h-10 hover:animate-wiggle hover:animate-infinite"
                    />
                  </Link>
                </div>
                {/* Texto de tiempo de desarrollo cambiado a gris */}
                <p className="text-sm sm:text-base text-gray-600 font-mono">
                  {data.projectDetail.time}: <span className="font-semibold text-gray-600">{proyecto.for.when}</span>
                </p>
              </div>
            </section>
          </div>

          {/* Enlaces - Fuera del contenedor pero con el mismo ancho */}
          {/* flex-col en móvil, sm:flex-row en tablet */}
          <div className="flex flex-col sm:flex-row gap-4 font-unbounded">
            <Link
              href={proyecto.repoUrl}
              target="_blank"
              className="flex-1 text-center px-4 py-3 sm:px-6 bg-secondary-dark text-white rounded-lg hover:bg-secondary-dark/70 hover:scale-105 transition-colors text-sm sm:text-lg font-semibold"
            >
              {data.buttons.proyects.detail.repo}
            </Link>
            <Link
              href={proyecto.deployUrl}
              target="_blank"
              className="flex-1 text-center px-4 py-3 sm:px-6 bg-primary-base text-white rounded-lg hover:bg-primary-base/70 hover:scale-105 transition-colors text-sm sm:text-lg font-semibold"
            >
              {data.buttons.proyects.detail.deploy}
              {proyecto.note.exist === true && <span className="text-red-500">*</span>}
            </Link>
          </div>

          {/* Nota (si existe) - Fuera del contenedor pero con el mismo ancho */}
          {proyecto.note?.exist === true && (
            <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg">
              {/* Este texto mantiene su color de nota */}
              <p className="text-red-600 text-sm sm:text-base font-mono">*{proyecto.note.text}</p>
            </div>
          )}
        </div>

        {/* Columna derecha - Imágenes (40% en PC, w-full en móvil/tablet) */}
        <div className="w-full lg:w-2/5 pt-8 lg:pt-0">
          {/* 🔴 CAMBIO CLAVE: sticky top-24 SOLO se aplica en el breakpoint lg */}
          <div className="sticky top-24 h-[600px]">
            <VerticalImageCarousel images={proyecto.image} projectName={proyecto.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectDetail;
