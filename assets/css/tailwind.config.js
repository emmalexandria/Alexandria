/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
    "./assets/js/**/*.js"
  ],

  plugins: [],
  safelist: [
    { pattern: /primary-./ }
  ]
}

