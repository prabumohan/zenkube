/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      colors: {
        zen: {
          950: '#070a0f',
          900: '#0c1119',
          850: '#111827',
          accent: '#34d399',
          glow: '#a78bfa',
        },
      },
      backgroundImage: {
        'mesh': `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(52, 211, 153, 0.22), transparent),
          radial-gradient(ellipse 60% 40% at 100% 0%, rgba(167, 139, 250, 0.18), transparent),
          radial-gradient(ellipse 50% 30% at 0% 50%, rgba(56, 189, 248, 0.12), transparent)
        `,
        'grid-slate':
          'linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        'glow-sm': '0 0 40px -10px rgba(52, 211, 153, 0.35)',
        'glow-md': '0 0 60px -12px rgba(167, 139, 250, 0.4)',
        card: '0 24px 48px -24px rgba(0, 0, 0, 0.55)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
