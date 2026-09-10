import { type TableRow, type TableColumn } from "../types/table.types";

export const rows : TableRow[] = [
  {
    id: 1,
    cobertura: "Daños a terceros (personas, cosas)",
    responsabilidadCivil: "included",
    terceroCompleto:"included" ,
    todoRiesgo: "included",
  },
  {
    id: 2,
    cobertura: "Robo total",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
  {
    id: 3,
    cobertura: "Robo parcial (rueda)",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded",
    todoRiesgo: "included",
  },
  {
    id: 4,
    cobertura: "Incendio total",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
  {
    id: 5,
    cobertura: "Incendio parcial",
    responsabilidadCivil: "excluded",
    terceroCompleto: "excluded" ,
    todoRiesgo: "included",
  },
  {
    id: 6,
    cobertura: "Daño total",
    responsabilidadCivil: "excluded",
    terceroCompleto: "included",
    todoRiesgo: "included",
  },
  {
    id: 7,
    cobertura: "Servicio de grúa",
    responsabilidadCivil: "included",
    terceroCompleto: "included",
    todoRiesgo: "included",
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