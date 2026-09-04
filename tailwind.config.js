/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      colors: {
        cream: '#f3ede6',
        warmCard: '#e8dfd4',
        blushCard: '#f9d7e3',
      },
    },
  },
  plugins: [],
}