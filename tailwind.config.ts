import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        'point-purple': '#644BBA',
        'point-purple-light': '#E7DFF8',
      },
    },
  },
  plugins: [],
} satisfies Config;
