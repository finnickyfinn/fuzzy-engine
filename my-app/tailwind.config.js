/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["Synthwave"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

