import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-indigo-400/20 bg-gradient-to-r from-indigo-500/15 via-slate-900/90 to-pink-500/15 p-10 text-center backdrop-blur-sm md:p-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Get started</p>
        <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to build a stronger digital presence?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Let’s manage your brand, digital media work, and analytics in one streamlined experience.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/dashboard" className="rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3.5 font-semibold text-white shadow-glow transition hover:scale-[1.02]">
            Start free trial
          </Link>
          <Link href="mailto:hello@yourcompany.com" className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
