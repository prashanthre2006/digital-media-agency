export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#ec4899',
        dark: '#0f172a',
        accent: '#f8fafc'
      },
      boxShadow: {
        glow: '0 0 30px rgba(99, 102, 241, 0.35)'
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(99,102,241,0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(236,72,153,0.35)' }
        }
      }
    }
  },
  plugins: []
}
