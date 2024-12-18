/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fdtm: '#262B6D',
        primary: '#F9D802',
        secondary: '#A0D9F6',
        fdts: '#C62B31'
      },
      fontFamily: {
        'wayfinding': ['Atkinson Hyperlegible', 'PT Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
