import Table from "./Table";
import {rows , columns} from "../data/cardata" ;


export default function TableCar() {
  return (
    <div className="w-full max-w-7xl flex flex-col mx-auto pt-10 pb-5  px-4 ">
      <p className="py-2  lg:text-xs text-gray-500">01 · QUÉ CUBRE TU PÓLIZA</p>
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 ">
        Cobertura clara, sin letra chica innecesaria.
      </h2>
      <p className="py-6 text-gray-600">
        Cada compañía arma su producto distinto, pero la base es la misma. Estas
        son las coberturas que vas a ver en la cotización.
      </p>
      <Table rows={rows} columns={columns} />
    </div>
  );
}
