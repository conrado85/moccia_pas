import Row from "./Row";
import { type TableRow, type TableColumn } from "../types/table.types";


type TableProps<T> = {
  rows: TableRow[];
  columns: TableColumn<T>[];
};

export default function Table<t>({ rows, columns }: TableProps<t>) {
  return (
    <div className="overflow-x-auto text-sm lg:text-2xl  rounded-box border border-base-content/20 bg-base-secundario">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-brand-blue text-white">
            {columns.map((column) => (
              <th key={String(column.key)}>{column.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
