import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Header() {
  return (
    <header className="m-4 border-b border-neutralSand">
      <Fade>
        <figure className="mx-auto w-72">
          <img src="/porto-logo.png" alt="porto santo logo" />
        </figure>
      </Fade>
    </header>
  );
}
