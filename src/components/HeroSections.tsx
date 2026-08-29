import HeroSectionsCard from "./HeroSectionsCard";
import type {
  CuerpoCabecera,
  CuerpoTarjetas,
} from "../types/heroSections.types";

type CuerpoProps = {
  tarjetas: CuerpoTarjetas[];
  cabecera: CuerpoCabecera;
};

export default function HeroSections({ tarjetas, cabecera }: CuerpoProps) {
  return (
    <section className="w-full max-w-7xl flex flex-col mx-auto pt-10 pb-5 px-4">
      <div>
        <p className="py-2 text-sm text-gray-500">{cabecera.volanta}</p>

        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
          {cabecera.titulo}
        </h2>
        <p className=" text-gray-600 mb-10">{cabecera.copete}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tarjetas.map((tarjeta) => (
          <HeroSectionsCard key={tarjeta.id} tarjeta={tarjeta} />
        ))}
      </div>
    </section>
  );
}
