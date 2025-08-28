import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react'
import logo from '../assets/logo.svg'

const navItemClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-2 rounded-xl transition ${
    isActive ? 'bg-brand-100 text-brand-700' : 'hover:bg-slate-100'
  }`

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-slate-200 bg-white sticky top-0">
      <div className="flex items-center gap-3 p-4">
        <img src={logo} alt="logo" className="h-8 w-8" />
        <div className="font-semibold">Acme Admin</div>
      </div>
      <nav className="px-2 py-2 space-y-1">
        <NavLink to="/" end className={navItemClass}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/users" className={navItemClass}>
          <Users size={18} /> Users
        </NavLink>
        <NavLink to="/settings" className={navItemClass}>
          <Settings size={18} /> Settings
        </NavLink>
      </nav>
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <button className="btn w-full justify-center">
          <LogOut size={16} /> Logout
        </button>
      </div>
    </aside>
  )
}
