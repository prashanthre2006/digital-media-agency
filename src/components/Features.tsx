import { BarChart3, Link2, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react'

const features = [
  {
    title: 'Client Management',
    description: 'Organize every client, brand brief, campaign, and content calendar in one workspace.',
    icon: Users
  },
  {
    title: 'Brand & Content Tracking',
    description: 'Keep brand assets, campaign goals, and content deliverables aligned across channels.',
    icon: Sparkles
  },
  {
    title: 'Live Analytics',
    description: 'Monitor GA4, Search Console, and Clarity data to understand performance and user behavior.',
    icon: BarChart3
  },
  {
    title: 'Social Integration',
    description: 'Centralize Instagram, Facebook, LinkedIn, and other social profiles in a single overview.',
    icon: Link2
  },
  {
    title: 'Growth Insights',
    description: 'Turn performance data into action with clear reports and optimization recommendations.',
    icon: TrendingUp
  },
  {
    title: 'Secure Workflow',
    description: 'Keep your client information protected with secure access and reliable reporting.',
    icon: ShieldCheck
  }
]

export default function Features() {
  return (
    <section id="features" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Features</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Everything needed to manage digital growth</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10">
                <div className="mb-5 inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 p-3 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
