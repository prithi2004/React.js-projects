import { useState } from 'react'
import DataTable from '../components/DataTable'
import { users as mockUsers } from '../data/mock'
import SubscribeButton from '../components/SubscribeButton'

export default function Users() {
  const [users, setUsers] = useState(mockUsers)
  const [form, setForm] = useState({ name: '', email: '' })

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
  ]

  const addUser = () => {
    if (!form.name || !form.email) return
    const newUser = {
      id: 'U-' + String(1000 + users.length + 1),
      name: form.name,
      email: form.email,
      role: 'Viewer',
      status: 'Active',
    }
    setUsers([...users, newUser])
    setForm({ name: '', email: '' })
  }

  return (
    <div className="p-4 space-y-4">
      <div className="card">
        <div className="card-body space-y-3">
          <div className="flex gap-2">
            <input
              className="input"
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="input"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <button className="btn-primary btn" onClick={addUser}>
              Add user
            </button>
          </div>
          <SubscribeButton />
        </div>
      </div>
      <DataTable columns={columns} data={users} />
    </div>
  )
}
