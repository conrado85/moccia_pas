import { type CuerpoTarjetas } from "../types/heroSections.types";
import { Link } from "react-router-dom";

type TarjetasProps = {
  tarjeta: CuerpoTarjetas;
};

export default function HeroSectionsCard({ tarjeta }: TarjetasProps) {
  return (
    <div className="border border-gray-200 rounded-xl lg:w-48 m-2 p-5 xl:w-96 lg:m-2 lg:p-5 bg-base-secundario transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <div className="flex justify-between">
        <div>{tarjeta.icon}</div>
        <span className="badge badge-ghost badge-sm">
          {tarjeta.cotizar}
        </span>
      </div>
      <p className="text-2xl ">{tarjeta.subtitulo}</p>
      <p className="text-md text-gray-600">{tarjeta.bajada}</p>
      {tarjeta.navegacion && <Link to={tarjeta.navegacion}>Ver más</Link>}
    </div>
  );
}
