import HeroSectionsCard from "./HeroSectionsCard";
import type {
  CuerpoCabecera,
  CuerpoTarjetas,
} from "../types/heroSections.types";

// export type CuerpoTarjetas = {
//   id: number;
//   subtitulo: string;
//   bajada: string;
//   icon?: ReactNode;
// };

// export type CuerpoCabecera = {
//   volanta: string;
//   titulo: string;
// };

type CuerpoProps = {
  tarjetas: CuerpoTarjetas[];
  cabecera: CuerpoCabecera;
};

export default function HeroSections({
  tarjetas,
  cabecera,
}: CuerpoProps) {
  return (
    <section className="max-w-3/4 flex flex-col mx-auto pt-10 pb-5 px-4">

      <div>
        <p className="py-2 text-sm text-gray-500">
          {cabecera.volanta}
        </p>

        <h2 className="text-2xl lg:text-3xl  text-gray-800 mb-3">
          {cabecera.titulo}
        </h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {tarjetas.map((tarjeta) => (
          <HeroSectionsCard
            key={tarjeta.id}
            tarjeta={tarjeta}
          />
        ))}
      </div>

    </section>
  );
}