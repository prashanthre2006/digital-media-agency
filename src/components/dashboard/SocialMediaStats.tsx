import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const platforms = [
  { name: 'Instagram', followers: '125.4K', engagement: '4.2%', posts: '342', color: 'text-pink-400', icon: Instagram },
  { name: 'Facebook', followers: '89.2K', engagement: '2.8%', posts: '198', color: 'text-blue-400', icon: Facebook },
  { name: 'Twitter', followers: '45.8K', engagement: '1.9%', posts: '512', color: 'text-sky-400', icon: Twitter },
  { name: 'LinkedIn', followers: '32.1K', engagement: '3.1%', posts: '87', color: 'text-indigo-300', icon: Linkedin }
]

export default function SocialMediaStats() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-white">Social media performance</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {platforms.map((platform) => {
          const Icon = platform.icon
          return (
            <div key={platform.name} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-white/5 p-2">
                  <Icon className={`h-5 w-5 ${platform.color}`} />
                </div>
                <h3 className="font-semibold text-white">{platform.name}</h3>
              </div>

              <div className="space-y-3 text-slate-300">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Followers</p>
                  <p className="mt-1 text-2xl font-bold text-white">{platform.followers}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Engagement</p>
                    <p className="mt-1 font-semibold text-indigo-300">{platform.engagement}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Posts</p>
                    <p className="mt-1 font-semibold text-white">{platform.posts}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
