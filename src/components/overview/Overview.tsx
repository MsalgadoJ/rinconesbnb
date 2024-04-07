import { BedDouble, Bath, Utensils, TreePalm, Car, Wifi } from "lucide-react";
import Card from "../Card/Card";
import { Fade } from "react-awesome-reveal";
import { RefObject } from "react";

interface OverviewProps {
  overviewRef: RefObject<HTMLDivElement>;
}

export default function Overview({ overviewRef }: OverviewProps) {
  return (
    <div
      className="bg-neutral-50 py-8 px-4 mt-4 flex flex-col gap-8 sm:gap-10 sm:rounded-lg sm:shadow-xl md:p-12"
      ref={overviewRef}
    >
      <Card
        title="Bienvenidos"
        imgSrc="/living-1.jpeg"
        imgAlt="sala de estar"
        flexDirection="flex sm:flex-row"
      >
        <Fade delay={200}>
          <p className="text-primary md:text-lg">
            Sumérgete en la serenidad de nuestro encantador departamento,
            situado en una de las ciudades más vibrantes de Venezuela. Con todas
            las comodidades del hogar, nuestro espacio es el refugio perfecto
            para relajarse y recargar energías.
          </p>
          <p className="text-primary md:text-lg pt-2">
            Con una ubicación privilegiada a pocos metros de Playa Lido y con
            variedad de servicios y restaurantes, podrás disfrutar de unas
            vacaciones inolvidables.
          </p>
        </Fade>
      </Card>
      <Card
        title="Qué encontrarás?"
        imgSrc="/living-2.png"
        imgAlt="sala de estar"
        flexDirection="flex sm:flex-row-reverse"
      >
        <ul className="flex flex-col gap-2 md:text-lg">
          <Fade cascade>
            <li className="flex items-center gap-2 text-primary ">
              <BedDouble color="#55c4d7" /> 3 habitaciones
            </li>
            <li className="flex gap-2 items-center  text-primary">
              <Bath color="#55c4d7" /> 3 baños
            </li>
            <li className="flex gap-2 items-center  text-primary">
              <Utensils color="#55c4d7" /> Cocina totalmente equipada
            </li>
            <li className="flex gap-2 items-center  text-primary">
              <Wifi color="#55c4d7" /> Conexión a internet
            </li>
            <li className="flex gap-2 items-center  text-primary">
              <TreePalm color="#55c4d7" /> Playa a 300 metros
            </li>
            <li className="flex gap-2 items-center  text-primary">
              <Car color="#55c4d7" /> Estacionamiento gratuito
            </li>
          </Fade>
        </ul>
      </Card>
    </div>
  );
}
