/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE0C6",
        secondary: "#000000"
      },
      fontFamily: {
        Lexend:  ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
}