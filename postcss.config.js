const path = require('path')

module.exports = {
  plugins: {
    'postcss-import': {
      addModulesDirectories: [path.resolve('src')],
    },
    'postcss-sassy-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-sass-color-functions': {},
    autoprefixer: {},
  },
}
