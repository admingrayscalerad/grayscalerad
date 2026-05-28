/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nts-bg': '#030712',
        'nts-bg-secondary': '#0B1120',
        'nts-cyan': '#06b6d4',
        'nts-cyan-light': '#22d3ee',
        'nts-blue': '#3b82f6',
        'nts-purple': '#8b5cf6',
        'nts-success': '#10b981',
        'nts-warning': '#f59e0b',
        'nts-pink': '#ec4899',
        'nts-text': '#f8fafc',
        'nts-text-secondary': '#94a3b8',
        'nts-text-muted': '#64748b',
        'nts-text-faint': '#475569',
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'scanline': 'scanline 3.5s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite 1s',
        'shimmer': 'shimmer 4s linear infinite',
        'orbit': 'orbit 8s linear infinite',
        'orbit-slow': 'orbit2 12s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease infinite',
        'fade-up': 'fadeUp 0.9s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        scanline: {
          '0%': { top: '0%', opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { top: '100%', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% center' },
          to: { backgroundPosition: '200% center' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' },
        },
        orbit2: {
          from: { transform: 'rotate(120deg) translateX(130px) rotate(-120deg)' },
          to: { transform: 'rotate(480deg) translateX(130px) rotate(-480deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { transform: 'scaleX(0)', transformOrigin: 'left' },
          to: { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
        'gradient-cyan-soft': 'linear-gradient(90deg, #06b6d4, #22d3ee)',
        'gradient-shimmer': 'linear-gradient(90deg, #06b6d4 0%, #f8fafc 40%, #06b6d4 80%)',
      },
      backdropBlur: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}
