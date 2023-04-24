/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#9277FF",
        "primary-200": "#7C5DFA",
        "secondary-100": "FF8F00",
        "success-100": "33D69F",
        "danger-100": "#9277FF",
        "danger-200": "#EC5757",
        "neutral-100": "#F8F8FB",
        "neutraal-200": "#DFE3FA",
        "neutral-200": "888EB0",
        "neutral-300": "7E88C3",
        "neutral-400": "252945",
        "neutral-500": "1E2139",
        "neutral-600": "141625",
        "neutral-700": "0C0E16",

      }
    },
  },
  plugins: [],
}
