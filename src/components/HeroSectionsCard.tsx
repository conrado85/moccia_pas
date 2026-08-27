import { type CuerpoTarjetas } from "../types/heroSections.types";

type TarjetasProps = {
  tarjeta: CuerpoTarjetas;
};

export default function HeroSectionsCard({ tarjeta }: TarjetasProps) {
  return (
    <div className="border border-gray-200 rounded-xl lg:w-48 m-2 p-5 xl:w-96 lg:m-2 lg:p-5 bg-transparent  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <div className="">{tarjeta.icon}</div>
      <p className="text-2xl font-bold">{tarjeta.subtitulo}</p>
      <p className="text-lg text-gray-600">{tarjeta.bajada}</p>
    </div>
  );
}
