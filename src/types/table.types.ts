

export type TableRow = {
  id: number;
  cobertura: string;
  responsabilidadCivil:CoverageStatus;
  terceroCompleto:CoverageStatus;
  todoRiesgo:CoverageStatus;
};
export type TableColumn<T> = {
  key: keyof T;
  label: string;
};

export type CoverageStatus = "included" | "excluded" | "plan";