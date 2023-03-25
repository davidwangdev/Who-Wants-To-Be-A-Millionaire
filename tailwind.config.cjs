/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#020230',
        'questionColor': '#002573',
        'purplish': '#100241',
      },
    }
  },
  plugins: [],
}
