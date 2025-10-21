"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useTilt } from "../hooks/useTilt";

import { useLanguage } from "@/context/LanguageContext";
import { contentEn } from "@/seeders/pageTexts_en";
import { contentEs } from "@/seeders/pageTexts_es";
import { aboutTech } from "@/seeders/aboutTech";

function AboutMe() {
  const [ref, isVisible] = useScrollAnimation();
  const { transform, handleMouseMove, resetTilt } = useTilt(45, 0.95);

  const { lang } = useLanguage();

  let data;

  if (lang === "en") {
    data = contentEn.aboutMe;
  } else if (lang === "es") {
    data = contentEs.aboutMe;
  }

  return (
    <div ref={ref} className={isVisible ? "animate-fade-up" : "opacity-0"}>
      <div
        id="about"
        className="bg-primary-base flex flex-col lg:flex-row justify-center items-center gap-10 md:gap-20 p-6 md:p-10 text-center md:text-left"
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{
            transform,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="rounded-full transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0"
        >
          <Image
            src={"/Foto3.jpeg"}
            alt="Mi Foto"
            width={350}
            height={350}
            className="rounded-full border-8 border-secondary-light pointer-events-none select-none w-48 h-48 sm:w-72 sm:h-72 lg:w-full md:h-full"
          />
        </div>

        <div className="bg-secondary-light rounded-md p-6 sm:p-8 flex flex-col max-w-xl md:max-w-2xl">
          <h2 className="pb-4 text-secondary-dark text-3xl sm:text-4xl font-bbh">{data.tittle}!</h2>

          <div className="pb-3 text-gray-600 font-mono text-sm sm:text-base">
            <p className="pb-3">{data.texts[1]}</p>
            <p className="pb-3">{data.texts[2]}</p>
            <p className="pb-3">{data.texts[3]}</p>
          </div>

          <h2 className="pb-5 text-secondary-dark text-base sm:text-lg font-grotesk">{data.tech}</h2>

          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-7">
            {aboutTech.map((tech, index) => (
              <Link key={index} href={tech.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={70}
                  height={70}
                  className="bg-white rounded-full w-10 h-10 sm:w-[70px] sm:h-[70px] hover:animate-jump hover:shadow-[0_0_25px_10px] hover:shadow-accent/60 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
