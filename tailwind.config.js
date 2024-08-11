/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1C1B33', // Un color personalizado para tu marca
        'brand-secondary': '#02FF67', // Otro color personalizado
        // Agrega más colores según tus necesidades
      }
    },
  },
  plugins: [],
}