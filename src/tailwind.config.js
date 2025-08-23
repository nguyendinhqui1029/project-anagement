/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'text-red-500',
    'text-green-500',
    'text-blue-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}