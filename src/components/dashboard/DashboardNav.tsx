import Link from 'next/link'
import { LogOut, Settings } from 'lucide-react'

export default function DashboardNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-10 w-10 rounded-xl" />
          <span className="text-lg font-semibold text-white">Dashboard</span>
        </Link>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-indigo-400/40 hover:text-white" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-indigo-400/40 hover:text-white" aria-label="Logout">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
