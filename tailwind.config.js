/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D5E4'
      },
      backgroundSize: {
        size200: '200%'
      }
    },
  },
  plugins: [],
}
