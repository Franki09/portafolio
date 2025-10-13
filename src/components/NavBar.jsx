"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";
import { contentEn } from "@/seeders/pageTexts_en";
import { contentEs } from "@/seeders/pageTexts_es";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  // Declarar data fuera del if para que sea accesible en todo el componente
  let data;

  if (lang === "en") {
    data = contentEn.navbar;
  } else {
    data = contentEs.navbar;
  }

  return (
    <nav className="fixed top-0 left-0 shadow-md z-50 bg-secondary-light/70 backdrop-blur-sm w-full h-16 flex justify-between items-center px-5 sm:px-8">
      {/* Menú principal desktop */}
      <div className="hidden md:flex gap-10 text-lg font-unbounded font-bold">
        <Link href={"/#about"} className="text-primary-base hover:text-accent">
          {data.about}
        </Link>
        <Link href={"/#proyects"} className="text-primary-base hover:text-accent">
          {data.myProjects}
        </Link>
      </div>

      {/* Logo / Botón menú móvil */}
      <div className="md:hidden flex justify-between items-center w-full">
        <h1 className="text-primary-base text-xl font-unbounded font-bold">FG</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-base hover:text-accent focus:outline-none">
          {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>

      {/* Selector de idioma desktop (centrado) */}
      <div className="hidden md:flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => lang !== "es" && toggleLang()}
          className={`font-unbounded font-bold text-xl transition-colors ${
            lang === "es" ? "text-accent cursor-default" : "text-primary-base/60 hover:text-primary-base cursor-pointer"
          }`}
        >
          ES
        </button>
        <span className="text-primary-base/60 text-xl">|</span>
        <button
          onClick={() => lang !== "en" && toggleLang()}
          className={`font-unbounded font-bold text-xl transition-colors ${
            lang === "en" ? "text-accent cursor-default" : "text-primary-base/60 hover:text-primary-base cursor-pointer"
          }`}
        >
          EN
        </button>
      </div>

      {/* Sección de contacto desktop */}
      <div className="hidden md:flex items-center gap-5">
        <h2 className="text-primary-base font-bold text-lg font-unbounded">{data.contact}:</h2>
        <Link
          href={"https://github.com/Franki09"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent hover:animate-jump"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/franco-g%C3%B3mez-rosell/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent hover:animate-jump"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          href={"mailto:fgomezrosell@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent hover:animate-jump"
        >
          <MdEmail size={30} />
        </Link>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-secondary-light/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 md:hidden animate-fade-down">
          <Link
            href={"/#about"}
            onClick={() => setMenuOpen(false)}
            className="text-primary-base hover:text-accent text-lg font-unbounded"
          >
            {data.about}
          </Link>
          <Link
            href={"/#proyects"}
            onClick={() => setMenuOpen(false)}
            className="text-primary-base hover:text-accent text-lg font-unbounded"
          >
            {data.myProjects}
          </Link>

          {/* Selector de idioma móvil */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => lang !== "es" && toggleLang()}
              className={`font-unbounded font-bold text-xl transition-colors ${
                lang === "es" ? "text-accent cursor-default" : "text-primary-base/60 cursor-pointer"
              }`}
            >
              ES
            </button>
            <span className="text-primary-base/60 text-xl">|</span>
            <button
              onClick={() => lang !== "en" && toggleLang()}
              className={`font-unbounded font-bold text-xl transition-colors ${
                lang === "en" ? "text-accent cursor-default" : "text-primary-base/60 cursor-pointer"
              }`}
            >
              EN
            </button>
          </div>

          <div className="flex gap-6 mt-2">
            <Link
              href={"https://github.com/Franki09"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent hover:animate-jump"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/franco-g%C3%B3mez-rosell/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent hover:animate-jump"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href={"mailto:fgomezrosell@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-accent hover:animate-jump"
            >
              <MdEmail size={28} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
