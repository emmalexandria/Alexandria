const themeDir = __dirname + '/../../';

module.exports = {
  plugins: [
    require('postcss-nesting')({ edition: '2024-02' }),
    require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
    require('autoprefixer')({
      path: [themeDir]
    })
  ]
}
