import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const socials = [
  { href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#', label: 'Instagram', icon: Instagram },
  { href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#', label: 'Facebook', icon: Facebook },
  { href: process.env.NEXT_PUBLIC_TWITTER_URL || '#', label: 'Twitter', icon: Twitter },
  { href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#', label: 'LinkedIn', icon: Linkedin }
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img src="/logo.svg" alt="Digital Media Agency logo" className="h-11 w-11 rounded-xl" />
              <div className="text-xl font-bold text-white">Digital Media Agency</div>
            </div>
            <p className="max-w-md text-slate-400">
              We help brands and agencies manage online presence, creative work, and measurable digital growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="#features" className="transition hover:text-white">Features</Link></li>
              <li><Link href="#services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="#analytics" className="transition hover:text-white">Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Social</h3>
            <div className="flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-indigo-400/40 hover:text-white">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2024 Digital Media Agency. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
