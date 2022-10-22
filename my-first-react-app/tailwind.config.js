/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'], // font-lato
    },
    colors: {
      "special-gray": '#F5F0F0',
      red: colors.red,
      gray: colors.gray,
      white: colors.white
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover']
    }
  },
  plugins: [],
}
