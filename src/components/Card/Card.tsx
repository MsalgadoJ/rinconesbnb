import { ReactElement } from "react";
import { Fade } from "react-awesome-reveal";

interface CardProps {
  title: string;
  children: ReactElement;
  flexDirection: string;
  imgSrc: string;
  imgAlt: string;
}

export default function Card({
  title,
  children,
  flexDirection,
  imgSrc,
  imgAlt,
}: CardProps) {
  return (
    <div className={`flex gap-4 flex-col sm:${flexDirection} md:gap-6`}>
      <div className="flex-1 sm:text-left">
        <Fade direction="down">
          <h3 className="text-2xl text-secondary mb-4 md:text-3xl">{title}</h3>
        </Fade>
        {children}
      </div>
      <picture className="flex-1 rounded-lg overflow-hidden shadow-lg">
        <Fade delay={100}>
          <img
            src={imgSrc}
            alt={imgAlt}
            className=" w-full h-full object-cover transition-transform duration-500 hover:scale-125"
          />
        </Fade>
      </picture>
    </div>
  );
}
