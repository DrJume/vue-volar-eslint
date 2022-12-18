/* eslint-env node */

module.exports = {
  plugins: [
    require('@volar-plugins/eslint')(require('./linting/resolve-config.js'))
  ],
}
