"use client";

import { sideProyects } from "@/seeders/sideProyectsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SideProyects() {
  // Triplicamos para asegurar loop continuo
  const projects = [...sideProyects, ...sideProyects, ...sideProyects];

  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden !important;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * ${sideProyects.length} - ${sideProyects.length * 20}px));
          }
        }

        .scroll-container {
          animation: scroll 20s linear infinite;
          transition: transform 0.8s ease-out;
        }

        .scroll-wrapper:hover .scroll-container {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden pt-10">
        <div className="scroll-wrapper">
          <div className="scroll-container flex gap-5">
            {projects.map((proyecto, index) => (
              <div
                key={`${proyecto.id}-${index}`}
                className="w-[350px] h-[400px] flex flex-col flex-shrink-0 bg-secondary-light rounded-md border-2 border-secondary-dark hover:scale-105 transform transition-transform duration-300"
              >
                <div className="relative w-full h-40">
                  <Image src={proyecto.image} alt={proyecto.name} fill className="object-cover rounded-lg" />
                </div>

                <div className="flex-1 flex flex-col p-3">
                  <h3 className="mb-2 text-secondary-dark text-lg font-semibold ">{proyecto.name}</h3>
                  <p className="flex-1 pb-3 text-gray-600">{proyecto.desc}</p>

                  <div className="flex gap-3 mb-4">
                    {proyecto.techUsed.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-primary-light rounded-full text-gray-600 font-semibold py-1 px-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-around items-center m-2 gap-3">
                    <Link
                      href={proyecto.repoUrl}
                      className="inline-block text-center p-2 w-full bg-primary-base text-white rounded-full hover:scale-110 hover:bg-primary-dark transition-colors"
                    >
                      Repositorio
                    </Link>
                    <Link
                      href={proyecto.deployUrl}
                      className="inline-block text-center p-2 w-full bg-primary-base text-white rounded-full hover:scale-110 hover:bg-primary-dark transition-colors"
                    >
                      Deploy
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideProyects;
