/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["Chakra Petch", "sans-serif"] 
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        }
      },
    },
  },
  plugins: [],
}

