import Table, { type TableColumn, type TableRow } from "./Table";

const rows : TableRow[] = [
  {
    id: 1,
    cobertura: "Daños a terceros (autos, personas, cosas)",
    responsabilidadCivil: "included",
    terceroCompleto:"included" ,
    todoRiesgo: "included",
  },
  {
    id: 2,
    cobertura: "Robo total",
    responsabilidadCivil: "included",
    terceroCompleto: "excluded",
    todoRiesgo: "plan",
  },
  {
    id: 3,
    cobertura: "Robo parcial (rueda y batería)",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "plan",
  },
  {
    id: 4,
    cobertura: "Incendio total",
    responsabilidadCivil: "plan",
    terceroCompleto: "excluded",
    todoRiesgo: "excluded",
  },
  {
    id: 5,
    cobertura: "Incendio parcial",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded" ,
    todoRiesgo: "excluded",
  },
  {
    id: 6,
    cobertura: "Destrucción total por choque",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "excluded",
  },
  {
    id: 7,
    cobertura: "Daño parcial a tu auto (con franquicia)",
    responsabilidadCivil: "included",
    terceroCompleto: "excluded",
    todoRiesgo: "excluded",
  },
  {
    id: 8,
    cobertura: "Cristales y cerraduras",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "excluded",
  },
  {
    id: 9,
    cobertura: "Granizo",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "excluded",
  },
  {
    id: 10,
    cobertura: "Servicio de grúa",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "excluded",
  },
];

const columns: TableColumn<TableRow>[] = [
  {
    key: "cobertura",
    label: "Cobertura",
  },
  {
    key: "responsabilidadCivil",
    label: "Responsabilidad civil",
  },
  {
    key: "todoRiesgo",
    label: "Totales",
},
{
  key: "terceroCompleto",
  label: "Terceros completo",
},
];

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
      
