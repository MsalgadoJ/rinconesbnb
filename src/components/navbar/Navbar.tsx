import React from "react";

export default function Navbar() {
  return (
    <nav className="py-4 w-[500px] flex justify-center m-auto">
      <ul className="flex justify-between w-full">
        <li className="inline-block">
          <a href="#hero">Inicio</a>
        </li>
        <li className="inline-block">
          <a href="#overview">Descripción</a>
        </li>
        <li className="inline-block">
          <a href="#gallery">Galería</a>
        </li>
        <li className="inline-block">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
