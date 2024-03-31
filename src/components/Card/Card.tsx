import { Fade } from "react-awesome-reveal";

export default function Card({
  title,
  children,
  flexDirection = "",
  imgSrc,
  imgAlt,
}) {
  return (
    <div className={`flex gap-4 flex-col sm:flex-row sm:${flexDirection}`}>
      <div className="flex-1">
        <Fade direction="down">
          <h3 className="text-2xl text-secondary my-2">{title}</h3>
        </Fade>
        {children}
      </div>
      <picture className="flex-1 rounded-lg overflow-hidden">
        <Fade delay={100}>
          <img
            src={imgSrc}
            alt={imgAlt}
            className=" w-full h-full object-cover rounded-lg shadow-xl"
          />
        </Fade>
      </picture>
    </div>
  );
}
