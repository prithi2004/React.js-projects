import StatCard from '../components/StatCard'
import { Users, ShoppingBag, IndianRupee, TrendingUp } from 'lucide-react'
import { revenueSeries } from '../data/mock'
import {
  ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar
} from 'recharts'

export default function Dashboard() {
  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="5,124" sub="+3.2% this week" icon={Users} />
        <StatCard title="Orders" value="1,238" sub="+1.8% this week" icon={ShoppingBag} />
        <StatCard title="Revenue" value="₹ 12.4L" sub="+4.1% this week" icon={IndianRupee} />
        <StatCard title="Growth" value="12.7%" sub="vs last month" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="card xl:col-span-2">
          <div className="card-header">Revenue (Monthly)</div>
          <div className="card-body h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueSeries}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Orders (Monthly)</div>
          <div className="card-body h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueSeries}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
