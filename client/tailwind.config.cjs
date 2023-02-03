/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Mada', 'system-ui',],
      'serif': ['Playfair Display', 'Georgia',],
    }
  },
  plugins: [],
}