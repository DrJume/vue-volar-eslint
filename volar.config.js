/* eslint-env node */

module.exports = {
  plugins: [
    require('../volar-plugins/packages/eslint')(require('./linting/resolve-config.js'))
  ],
}
