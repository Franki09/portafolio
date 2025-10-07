"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdMenu, MdClose } from "react-icons/md";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 shadow-md z-50 bg-secondary-light/70 backdrop-blur-sm w-full h-16 flex justify-between items-center px-5 sm:px-8">
      {/* Menú principal desktop */}
      <div className="hidden md:flex gap-10 text-lg font-unbounded font-bold">
        <Link href={"/#about"} className="text-primary-base hover:text-accent">
          Sobre Mi
        </Link>
        <Link href={"/#proyects"} className="text-primary-base hover:text-accent">
          Mis Proyectos
        </Link>
      </div>

      {/* Logo / Botón menú móvil */}
      <div className="md:hidden flex justify-between items-center w-full">
        <h1 className="text-primary-base text-xl font-unbounded font-bold">FG</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-base hover:text-accent focus:outline-none">
          {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>

      {/* Sección de contacto desktop */}
      <div className="hidden md:flex items-center gap-5">
        <h2 className="text-primary-base font-bold text-lg font-unbounded">Contacto:</h2>
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
            Sobre Mi
          </Link>
          <Link
            href={"/#proyects"}
            onClick={() => setMenuOpen(false)}
            className="text-primary-base hover:text-accent text-lg font-unbounded"
          >
            Mis Proyectos
          </Link>

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
