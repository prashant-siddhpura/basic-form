/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-blue' : '#00308F'
      },
      opacity:{
        'custom-opacity ' : '70'
      }
    },
  },
  plugins: [],
}