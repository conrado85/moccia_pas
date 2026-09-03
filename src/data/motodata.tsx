import { type TableRow, type TableColumn } from "../types/table.types";

export const rows : TableRow[] = [
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

export const columns: TableColumn<TableRow>[] = [
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