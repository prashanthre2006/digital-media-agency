import { Camera, Code2, Megaphone, Palette } from 'lucide-react'

const services = [
  {
    title: 'Brand Strategy',
    description: 'Position your brand for clarity, consistency, and stronger market relevance.',
    icon: Palette
  },
  {
    title: 'Content Creation',
    description: 'Create scroll-stopping visuals, campaigns, and short-form content that convert.',
    icon: Camera
  },
  {
    title: 'Digital Marketing',
    description: 'Run organic and paid campaigns that build awareness, traffic, and lead generation.',
    icon: Megaphone
  },
  {
    title: 'Web & Creative Build',
    description: 'Develop compelling websites and digital experiences that represent your brand well.',
    icon: Code2
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-900/80 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">Services</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Creative and performance solutions for brands</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-indigo-400/30 hover:bg-white/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-slate-300">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
