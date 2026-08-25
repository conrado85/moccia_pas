import Row from './Row';


export type TableRow = {
  id: number;
  cobertura: string;
  responsabilidadCivil: boolean;
  terceroCompleto: boolean;
  todoRiesgo: boolean;
};

export type TableColumn<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  rows:TableRow [];
  columns: TableColumn<T>[];
};
     
export default function Table<t>({rows , columns}: TableProps<t>) {
  return (
    <div>
      <div className="overflow-x-auto text-sm lg:text-2xl  rounded-box border border-base-content/5 bg-base-100">
        <table className="table">

             {/* head */}
          <thead>
             <tr className="bg-base-200">
              {columns.map((column) => (
                <th key={String(column.key)}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

            <tbody>
            {rows.map((row) => (
              <Row
                key={row.id}
                row={row}
              />
            ))}
          </tbody>
      
        </table>
      </div>
    </div>
  );
}
