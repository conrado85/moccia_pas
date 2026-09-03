import Table from "./Table";
import {rows , columns} from "../data/motodata" ;

export default function TableMotorbike() {
  return (
    <div className="w-full max-w-7xl  flex flex-col mx-auto pt-10 pb-5  px-4 ">
      <p className="py-2  lg:text-xs text-gray-500">01 · QUÉ CUBRE TU PÓLIZA</p>
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 ">
        En motos las coberturas se dividen en tres planes.
      </h2>
      <Table rows={rows} columns={columns} />
    </div>
  );
}
      


