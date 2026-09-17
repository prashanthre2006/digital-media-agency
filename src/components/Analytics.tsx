'use client'

import { BarChart, Bar, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const analyticsData = [
  { month: 'Jan', ga4: 4200, gsc: 2400, clarity: 2100 },
  { month: 'Feb', ga4: 5200, gsc: 3000, clarity: 2400 },
  { month: 'Mar', ga4: 6100, gsc: 4450, clarity: 2800 },
  { month: 'Apr', ga4: 7800, gsc: 5700, clarity: 3900 },
  { month: 'May', ga4: 8500, gsc: 6200, clarity: 4300 },
  { month: 'Jun', ga4: 9600, gsc: 7000, clarity: 5000 }
]

export default function Analytics() {
  return (
    <section id="analytics" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Analytics</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Built for GA4, Search Console, and Clarity</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-semibold text-white">Traffic overview</h3>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={analyticsData}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ga4" stroke="#818cf8" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="gsc" stroke="#f472b6" strokeWidth={2.5} />
                  <Line type="monotone" dataKey="clarity" stroke="#34d399" strokeWidth={2.5} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="mb-6 text-xl font-semibold text-white">Performance by source</h3>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsData}>
                  <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ga4" fill="#818cf8" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="gsc" fill="#f472b6" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="clarity" fill="#34d399" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
