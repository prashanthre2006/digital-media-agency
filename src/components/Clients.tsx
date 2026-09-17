const clients = [
  { name: 'TechCorp', industry: 'Technology', growth: '+45%', status: 'Active' },
  { name: 'StyleNest', industry: 'Fashion', growth: '+32%', status: 'Active' },
  { name: 'Wellness Co.', industry: 'Health', growth: '+58%', status: 'Active' },
  { name: 'Bite & Bloom', industry: 'Food', growth: '+28%', status: 'Active' }
]

export default function Clients() {
  return (
    <section id="clients" className="bg-slate-900/80 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">Clients</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">Trusted by modern brands</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {clients.map((client) => (
            <div key={client.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-lg font-bold text-white">
                {client.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-white">{client.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{client.industry}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">{client.status}</span>
                <span className="text-sm font-semibold text-indigo-300">{client.growth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
