export default function DataTable({ columns, data }) {
  return (
    <div className="card">
      <div className="card-header">Users</div>
      <div className="card-body overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              {columns.map(col => (
                <th key={col.key} className="py-2 pr-6">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t border-slate-100">
                {columns.map(col => (
                  <td key={col.key} className="py-2 pr-6">{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
