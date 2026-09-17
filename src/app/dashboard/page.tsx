import AnalyticsSummary from '@/components/dashboard/AnalyticsSummary'
import ClientsList from '@/components/dashboard/ClientsList'
import DashboardNav from '@/components/dashboard/DashboardNav'
import SocialMediaStats from '@/components/dashboard/SocialMediaStats'
import { useState } from 'react'

export default function DashboardPage() {
  const [tab, setTab] = useState<'overview' | 'clients' | 'social'>('overview')

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <DashboardNav />
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Overview</p>
          <h1 className="text-4xl font-black text-white md:text-5xl">Client performance dashboard</h1>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {['overview', 'clients', 'social'].map((value) => (
            <button
              key={value}
              onClick={() => setTab(value as 'overview' | 'clients' | 'social')}
              className={`rounded-xl px-4 py-2 text-sm font-medium capitalize transition ${
                tab === value ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white' : 'border border-white/10 bg-white/5 text-slate-300 hover:text-white'
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div className="space-y-8">
            <AnalyticsSummary />
            <SocialMediaStats />
          </div>
        )}

        {tab === 'clients' && <ClientsList />}

        {tab === 'social' && <SocialMediaStats />}
      </div>
    </div>
  )
}
