import { X, Check } from 'lucide-react';
import { type TableRow } from './Table'

type RowProps = {
  row : TableRow;
};

type CoverageStatus = "included" | "excluded" | "plan";


function CoverageIcon({ status }: { status: CoverageStatus }) {
  switch (status) {
    case "included":
      return <Check className="text-success h-5 w-5" />;

    case "excluded":
      return <X className="text-error h-5 w-5" />;

    case "plan":
      return (
        <span className="badge badge-ghost badge-sm">
          Según plan
        </span>
      );
  }
}

export default function Row({ row }: RowProps) {
  return (
    <tr className="hover:bg-base-200/50">
      <th className="font-semibold">{row.cobertura}</th>

      <td>
        <CoverageIcon status={row.responsabilidadCivil} />
      </td>

      <td>
        <CoverageIcon status={row.todoRiesgo} />
      </td>

      <td>
        <CoverageIcon status={row.terceroCompleto} />
      </td>
    </tr>
  );
}