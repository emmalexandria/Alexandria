/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Vollkorn", "serif"],
        body: ["'Exo 2'", "sans-serif"]
      },
      colors: {
        'mono': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        'primary': {
          '50': '#fff8ed',
          '100': '#fef0d6',
          '200': '#fcddac',
          '300': '#f9c478',
          '400': '#f6a041',
          '500': '#f3841c',
          '600': '#e46a12',
          '700': '#bd5011',
          '800': '#963f16',
          '900': '#793515',
          '950': '#411909',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

