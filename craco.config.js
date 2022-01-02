// craco.config.js
module.exports = {
  style: {
    postcssOptions: {
      plugins: [
        // require('@tailwindcss/typography'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
