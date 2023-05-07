const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          10: '#171717',
          20: '#1F1F1F',
        },
        bright: '#FFFFFF',
        ocean: '#0C3B8A',
        'bright-ocean': '#418FDE',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn-primary': {
          'border-radius': '999px',
          background: theme('colors.ocean'),
          fontSize: '18px',
          color: 'white',
          fontWeight: 'bold',
        },
        '.btn-secondary': {
          'border-radius': '999px',
          background: 'white',
          fontSize: '18px',
          color: 'black',
          fontWeight: 'bold',
        },
      })
    }),
  ],
}
