import { X, Check } from 'lucide-react';
import { type TableRow } from './Table'

type RowProps = {
  row : TableRow;
};

export default function Row({ row }: RowProps) {
  return (
    <tr className="hover:bg-base-200/50">
      <th className="font-semibold">{row.cobertura}</th>
      <td>
        {row.responsabilidadCivil ? (
          <Check className="text-success h-5 w-5" />
        ) : (
          <X className="text-error h-5 w-5" />
        )}
      </td>
      <td>
        {row.terceroCompleto ? (
          <Check className="text-success h-5 w-5" />
        ) : (
          <span className="badge badge-ghost badge-sm">Según plan</span>
        )}
      </td>
      <td>
        {row.todoRiesgo ? (
          <Check className="text-success h-5 w-5" />
        ) : (
          <X className="text-error h-5 w-5" />
        )}
      </td>
    </tr>
  );
}