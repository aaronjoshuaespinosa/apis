/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'uncial': ['Uncial Antiqua'],
        'inter': ['Inter']
      },
      colors: {
        yllw: "#EFB520",
        orange: "#FF6900"
      }
    },
  },
  plugins: [],
}