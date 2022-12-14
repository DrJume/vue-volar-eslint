/* eslint-env node */

const baseConfig = require('./.eslintrc.cjs')

module.exports = {
  plugins: [
    require('../volar-plugins/packages/eslint')((program) => ({
      ...baseConfig,
      parserOptions: {
        ...baseConfig.parserOptions,
        programs: [program], // replace eslint typescript program
      },
    })),
  ],
}
