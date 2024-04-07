/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/**/*.{html,js}",
  ],

  // Color principal: #1a748e
  // Color secundario: #d38e31
  // Color claro: #55c4d7
  // Color neutro: #f0df99
  // Color oscuro: #992915
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      colors: {
        primary: "#1a748e",
        secondary: "#d38e31",
        light: "#55c4d7",
        dark: "#992915",
        neutralSand: "#f0df99",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
