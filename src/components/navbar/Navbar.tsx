import { Fade } from "react-awesome-reveal";
import NavLink from "./NavLink";
import { RefObject } from "react";

interface NavbarProps {
  handleScroll: (ref: HTMLElement) => void;
  headerRef: RefObject<HTMLDivElement>;
  overviewRef: RefObject<HTMLDivElement>;
  galleryRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

export default function Navbar({
  handleScroll,
  headerRef,
  overviewRef,
  galleryRef,
  contactRef,
}: NavbarProps) {
  return (
    <nav className="bg-neutral-50 shadow-lg py-4 w-full sticky top-0 z-50 flex justify-center m-auto px-4 pb-4">
      <ul className="flex justify-between w-full sm:w-[500px]">
        <Fade cascade duration={500}>
          <NavLink
            link="hero"
            name="Inicio"
            handleScroll={handleScroll}
            domRef={headerRef}
          />
          <NavLink
            link="overview"
            name="Descripción"
            handleScroll={handleScroll}
            domRef={overviewRef}
          />
          <NavLink
            link="gallery"
            name="Galería"
            handleScroll={handleScroll}
            domRef={galleryRef}
          />
          <NavLink
            link="contact"
            name="Contacto"
            handleScroll={handleScroll}
            domRef={contactRef}
          />
        </Fade>
      </ul>
    </nav>
  );
}
