import { RefObject } from "react";
import { Fade } from "react-awesome-reveal";

interface HeaderProps {
  headerRef: RefObject<HTMLElement>;
}

export default function Header({ headerRef }: HeaderProps) {
  return (
    <header
      className="bg-neutral-50 p-4 border-b border-neutralSand sm:rounded-t-lg"
      ref={headerRef}
    >
      <Fade>
        <figure className="mx-auto w-72 sm:w-96">
          <img src="/porto-logo.png" alt="porto santo logo" />
        </figure>
      </Fade>
    </header>
  );
}
