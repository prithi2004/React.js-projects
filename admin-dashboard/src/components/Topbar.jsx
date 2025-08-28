import { Bell, Search } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
      <div className="flex items-center gap-4 p-4">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input className="input pl-9" placeholder="Search…" />
            <Search className="absolute left-3 top-2.5" size={18} />
          </div>
        </div>
        <button className="btn" aria-label="Notifications">
          <Bell size={18} />
          <span className="sr-only">Notifications</span>
        </button>
        <div className="h-9 w-9 rounded-full bg-brand-600 text-white grid place-items-center">A</div>
      </div>
    </header>
  )
}
