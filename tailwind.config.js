/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'hidden',
    'bg-blue-500',
    'text-white'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}