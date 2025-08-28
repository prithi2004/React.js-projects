export default function Settings() {
  return (
    <div className="p-4 space-y-4 max-w-2xl">
      <div className="card">
        <div className="card-header">Organization</div>
        <div className="card-body space-y-3">
          <label className="block">
            <div className="text-sm mb-1">Name</div>
            <input className="input" defaultValue="Acme Inc." />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Support Email</div>
            <input className="input" defaultValue="support@acme.inc" />
          </label>
          <button className="btn-primary">Save changes</button>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Danger Zone</div>
        <div className="card-body">
          <button className="btn border-red-200 text-red-600 hover:bg-red-50">Delete organization</button>
        </div>
      </div>
    </div>
  )
}
