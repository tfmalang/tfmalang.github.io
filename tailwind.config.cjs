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
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
