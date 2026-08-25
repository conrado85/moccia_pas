import Table, { type TableColumn, type TableRow } from "./Table";

const rows = [
  {
    id: 1,
    cobertura: "Daños a terceros (autos, personas, cosas)",
    responsabilidadCivil: true,
    terceroCompleto: true,
    todoRiesgo: true,
  },
  {
    id: 2,
    cobertura: "Robo total",
    responsabilidadCivil: false,
    terceroCompleto: true,
    todoRiesgo: true,
  },
  {
    id: 3,
    cobertura: "Robo parcial (rueda y batería)",
    responsabilidadCivil: false,
    terceroCompleto: true,
    todoRiesgo: true,
  },
  {
    id: 4,
    cobertura: "Incendio total",
    responsabilidadCivil: false,
    terceroCompleto: true,
    todoRiesgo: true,
  },
  {
    id: 5,
    cobertura: "Incendio parcial",
    responsabilidadCivil: false,
    terceroCompleto: true,
    todoRiesgo: true,
  },
  {
    id: 6,
    cobertura: "Destrucción total por choque",
    responsabilidadCivil: false,
    terceroCompleto: false,
    todoRiesgo: true,
  },
  {
    id: 7,
    cobertura: "Daño parcial a tu auto (con franquicia)",
    responsabilidadCivil: false,
    terceroCompleto: false,
    todoRiesgo: true,
  },
  {
    id: 8,
    cobertura: "Cristales y cerraduras",
    responsabilidadCivil: false,
    terceroCompleto: false,
    todoRiesgo: true,
  },
  {
    id: 9,
    cobertura: "Granizo",
    responsabilidadCivil: false,
    terceroCompleto: false,
    todoRiesgo: true,
  },
  {
    id: 10,
    cobertura: "Servicio de grúa",
    responsabilidadCivil: true,
    terceroCompleto: true,
    todoRiesgo: true,
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
    key: "terceroCompleto",
    label: "Terceros completo",
  },
  {
    key: "todoRiesgo",
    label: "Todo riesgo",
  },
];

export default function TableCar() {
  return (
    <div className="max-w-3/4  flex flex-col mx-auto pt-10 pb-5  px-4 ">
      <p className="py-2  lg:text-xs text-gray-500">01 · QUÉ CUBRE TU PÓLIZA</p>
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-3">
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
