import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 4s infinite alternate',
      },
      keyframes: {
        pulse: {
          '0%': { opacity: '0.5', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
      },
      transformOrigin: {
        'center-bottom': 'center bottom',
      },
      rotate: {
        'x-60': 'rotateX(60deg)',
      },
    },
  },
  plugins: [],
};

export default config;