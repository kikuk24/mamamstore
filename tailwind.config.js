/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom': '#FFD83B',
        'custom-text':'#FB4D32'
      },
      backgroundImage: {
        'hero':"url('/src/img/hero.jpg')"
      }
    },
  },
  plugins: [],
}