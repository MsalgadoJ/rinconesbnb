import { RefObject } from "react";
import { Fade } from "react-awesome-reveal";

interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

export default function Contact({ contactRef }: ContactProps) {
  return (
    <div
      ref={contactRef}
      className="bg-neutral-50 pt-4 pb-6 px-4 flex flex-col items-center justify-center gap-2 h-[300px] sm:rounded-t-lg"
    >
      <Fade direction="down">
        <h3 className="text-2xl text-secondary md:text-3xl">Haz una reserva</h3>
      </Fade>
      <Fade cascade>
        <p className="text-primary md:text-lg">
          No esperes más y contáctanos{" "}
          <a
            href="https://wa.me/+584168840028"
            target="_blank"
            className="inline-block underline hover:transition-all hover:text-light hover:scale-125 hover:-translate-y-2"
          >
            aquí
          </a>
        </p>
        <p className="text-primary md:text-lg">
          Estaremos felices de atenderte y despejar todas tus dudas
        </p>
      </Fade>
    </div>
  );
}
