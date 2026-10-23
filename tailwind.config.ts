import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0D0F',
        sidebar: '#0F1114',
        surface: '#141618',
        border: 'rgba(255,255,255,0.06)',
        'border-hover': 'rgba(255,255,255,0.12)',
        text: {
          DEFAULT: '#F0EDE6',
          secondary: '#8A8680',
          muted: '#5E5B56',
        },
        accent: {
          DEFAULT: '#D97757',
          hover: '#E8926E',
          subtle: 'rgba(217,119,87,0.08)',
          'subtle-hover': 'rgba(217,119,87,0.14)',
        },
        green: {
          dot: '#4ade80',
        },
        amber: {
          dot: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        lg: '10px',
        xl: '14px',
        '2xl': '18px',
      },
      animation: {
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      gridTemplateColumns: {
        bento: 'repeat(12, 1fr)',
      },
    },
  },
  plugins: [],
}

export default config
