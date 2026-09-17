'use client'

import { useState } from 'react'
import { ArrowUpRight, Pencil, Trash2 } from 'lucide-react'

const clients = [
  { name: 'TechCorp Solutions', website: 'techcorp.com', followers: '45.2K', growth: '+12%', status: 'Active' },
  { name: 'Fashion Forward', website: 'fashionforward.com', followers: '32.8K', growth: '+8%', status: 'Active' },
  { name: 'Wellness Hub', website: 'wellnesshub.co', followers: '58.5K', growth: '+15%', status: 'Active' }
]

export default function ClientsList() {
  const [list] = useState(clients)

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Client portfolio</h2>
        <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-2 font-medium text-white shadow-glow">
          Add client
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-sm text-slate-400">
              <th className="px-4 py-3 font-medium">Client</th>
              <th className="px-4 py-3 font-medium">Website</th>
              <th className="px-4 py-3 font-medium">Followers</th>
              <th className="px-4 py-3 font-medium">Growth</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((client) => (
              <tr key={client.name} className="border-t border-white/10 text-slate-200">
                <td className="px-4 py-4">
                  <div className="font-semibold text-white">{client.name}</div>
                </td>
                <td className="px-4 py-4">{client.website}</td>
                <td className="px-4 py-4">{client.followers}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1 text-emerald-300"><ArrowUpRight className="h-4 w-4" /> {client.growth}</span>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">{client.status}</span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white" aria-label="Edit client">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-red-300 hover:text-red-200" aria-label="Delete client">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
