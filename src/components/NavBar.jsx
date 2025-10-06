import Link from "next/link";
import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 shadow-md z-50  bg-secondary-light/70 backdrop-blur-sm w-full h-16 flex justify-between items-center p-5">
      <div className="gap-5">
        <Link href={"/#about"} className="pr-4 text-primary-base font-bold text-lg hover:text-accent">
          Sobre Mi
        </Link>
        <Link href={"/#proyects"} className=" text-primary-base font-bold text-lg hover:text-accent">
          Mis Proyectos
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <h2 className="text-primary-base font-bold text-lg">Contacto:</h2>
        <Link
          href={"https://github.com/Franki09"}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-600 hover:text-accent"
        >
          <FaGithub size={35} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/franco-g%C3%B3mez-rosell/"}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-600 hover:text-accent"
        >
          <FaLinkedin size={35} />
        </Link>
        <Link
          href={"mailto:fgomezrosell@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-gray-600 hover:text-accent"
        >
          <MdEmail size={35} />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
