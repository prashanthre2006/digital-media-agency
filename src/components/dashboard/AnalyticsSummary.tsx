import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react'

const metrics = [
  { title: 'Total sessions', value: '24.5K', change: '+12%', icon: Users },
  { title: 'Avg. duration', value: '3m 42s', change: '+8%', icon: BarChart3 },
  { title: 'Conversion rate', value: '3.2%', change: '+2.5%', icon: TrendingUp },
  { title: 'Page views', value: '156K', change: '+15%', icon: Zap }
]

export default function AnalyticsSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <div key={metric.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="rounded-xl bg-indigo-500/15 p-3 text-indigo-300">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-emerald-300">{metric.change}</span>
            </div>
            <p className="text-3xl font-bold text-white">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-400">{metric.title}</p>
          </div>
        )
      })}
    </div>
  )
}
