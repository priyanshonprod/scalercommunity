import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        scaler: {
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          'blue-light': '#3B82F6',
          dark: '#1A1A2E',
          'dark-light': '#2D2D44',
          gray: '#4A4A5A',
          'gray-light': '#8E8E9A',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
      },
    },
  },
  plugins: [],
}
export default config
