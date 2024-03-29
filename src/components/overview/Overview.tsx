import React from "react";
import { BedDouble, Bath, Utensils, TreePalm, Car, Wifi } from "lucide-react";

export default function Overview() {
  return (
    <div className="py-4 flex flex-col gap-12">
      <div className="flex gap-8">
        <div className="flex-1 text-left">
          <h3>Bienvenidos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            reiciendis voluptate aliquid laudantium assumenda vel veniam fugit
            est, qui non laborum quod provident quas sequi culpa porro in
            tempore. Commodi.
          </p>
        </div>
        <figure className="flex-1 rounded-lg">
          <img src="/living-1.jpeg" alt="sala de estar" />
        </figure>
      </div>
      <div className="flex gap-8 flex-row-reverse">
        <div className="flex-1 text-left">
          <h3>Qué hay en el alojamiento?</h3>
          <ul>
            <li className="flex gap-2">
              <BedDouble /> 3 habitaciones
            </li>
            <li className="flex gap-2">
              <Bath /> 3 baños
            </li>
            <li className="flex gap-2">
              <Utensils /> Cocina totalmente equipada
            </li>
            <li className="flex gap-2">
              <Wifi /> Conexión a internet
            </li>
            <li className="flex gap-2">
              <TreePalm /> Playa a 300 metros
            </li>
            <li className="flex gap-2">
              <Car /> Estacionamiento gratuito
            </li>
          </ul>
        </div>
        <figure className="flex-1">
          <img src="/living-2.png" alt="sala de estar" />
        </figure>
      </div>
    </div>
  );
}
