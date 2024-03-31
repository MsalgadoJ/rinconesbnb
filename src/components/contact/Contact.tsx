import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className="pt-4 pb-6 px-4 flex flex-col gap-2">
      <Fade direction="down">
        <h3 className="text-2xl text-secondary">Haz una reserva</h3>
      </Fade>
      <Fade cascade>
        <p className="text-primary">
          No esperes mas y contáctanos{" "}
          <a
            href="https://wa.me/+584168840028"
            target="_blank"
            className="inline-block underline hover:transition-all hover:text-light hover:scale-125 hover:-translate-y-2"
          >
            aquí
          </a>
        </p>
        <p className="text-primary">
          Estaremos felices de atenderte y despejar todas tus dudas
        </p>
      </Fade>
    </div>
  );
}
