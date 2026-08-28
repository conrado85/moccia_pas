import { type HeroCenteredCuerpo } from "../types/HeroCentered.types";
import { Link } from "react-router-dom";

type HeroCenteredProps = {
  cuerpo: HeroCenteredCuerpo;
};

export default function HeroCentered({ cuerpo }: HeroCenteredProps) {
  return (
    <div className="w-full lg:max-w-3/4 flex flex-col mx-auto pt-5 pb-10 px-4">
      <p className="py-2 text-sm text-gray-500">{cuerpo.volanta}</p>
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
        {cuerpo.titulo}
      </h2>
      <p className=" text-gray-600 mb-3">{cuerpo.bajada}</p>
      <p className="py-2 text-xs text-gray-500">{cuerpo.copete}</p>
      <div className="flex flex-wrap justify-start gap-4">
        {cuerpo.navegacion && (
          <Link
            to={cuerpo.navegacion}
            className="btn btn-primary bg-brand-blue mr-3 rounded-full"
          >
            {cuerpo.boton}
          </Link>
        )}
        {cuerpo.navegacion2 && (
          <Link to={cuerpo.navegacion2} className="btn btn-success rounded-full">
            {cuerpo.boton2}
          </Link>
        )}

        {/* <button className="btn btn-primary bg-brand-blue mr-3 rounded-full ">
          {cuerpo.boton1}
        </button>
        <button className="btn btn-success rounded-full">
          {cuerpo.boton2}
        </button> */}
      </div>
    </div>
  );
}

