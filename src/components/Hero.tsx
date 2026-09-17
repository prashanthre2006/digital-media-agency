import Link from 'next/link'
import { ArrowRight, BarChart3, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.25),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
          <Sparkles className="h-4 w-4" />
          Full-service brand and digital media partner
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
          Manage your clients, brand, and digital growth in one place.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          From social media strategy to analytics reporting, we help agencies and businesses centralize their online presence and maximize performance.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-7 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.02]">
            Launch dashboard <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
            Explore features
          </Link>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Clients managed', value: '50+' },
            { label: 'Campaigns tracked', value: '120+' },
            { label: 'Growth impact', value: '3x' }
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="mb-2 flex items-center justify-center text-indigo-300">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="text-3xl font-bold text-white">{item.value}</div>
              <div className="mt-1 text-sm text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
