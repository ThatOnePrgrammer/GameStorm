/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [],
  safelist: ['font-orbitron'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
