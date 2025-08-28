export default function StatCard({ title, value, sub, icon }) {
  const Icon = icon
  return (
    <div className="card">
      <div className="card-header flex items-center justify-between">
        <span>{title}</span>
        {Icon && <Icon size={18} className="text-slate-400" />}
      </div>
      <div className="card-body">
        <div className="text-2xl font-semibold">{value}</div>
        {sub && <div className="text-sm text-slate-500 mt-1">{sub}</div>}
      </div>
    </div>
  )
}
