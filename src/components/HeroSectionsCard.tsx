import { type CuerpoTarjetas } from "./HeroSections";

type TarjetasProps = {
  tarjeta: CuerpoTarjetas;
};

export default function HeroSectionsCard({ tarjeta }: TarjetasProps) {
  return (
    <div className="text-center shadow-xl/30 rounded-xl w-72 m-2 p-5 bg-base-100  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <div className="flex justify-center items-center">{tarjeta.icon}</div>
      <p className="text-2xl font-bold">{tarjeta.subtitulo}</p>
      <p className="text-lg text-gray-600">{tarjeta.bajada}</p>
    </div>
  );
}
