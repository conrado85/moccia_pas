import { type CuerpoTarjetas } from "../types/heroSections.types";
import { Link } from "react-router-dom";

type TarjetasProps = {
  tarjeta: CuerpoTarjetas;
};

export default function HeroSectionsCard({ tarjeta }: TarjetasProps) {
  return (
    <div className="border border-gray-200 rounded-xl w-80 md:w-96  p-2 bg-base-secundario transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <div className="flex justify-between">
        <div>{tarjeta.icon}</div>
        <span className="badge badge-ghost badge-sm text-blue-600">{tarjeta.cotizar}</span>
      </div>
      <p className="text-lg font-bold text-gray-800 ">{tarjeta.subtitulo}</p>
      <p className="text-md text-gray-600">{tarjeta.bajada}</p>
      {tarjeta.navegacion && <Link to={tarjeta.navegacion} className="mt-3 text-blue-400">{tarjeta.boton}</Link>}
    </div>
  );
}
