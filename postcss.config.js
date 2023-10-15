const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('tailwindcss'),
    require('cssnano')({
      preset: ['default', {
        autoprefixer: false,
        discardComments: {
          removeAll: true
        }
      }]
    })
  ],
};
