/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["synthwave"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}