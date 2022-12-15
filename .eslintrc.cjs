/* eslint-env node */

// require('@rushstack/eslint-patch/modern-module-resolution')

const { createComponentMetaChecker } = require('vue-component-meta')
const tsConfig = require.resolve('./tsconfig.json')
const checker = createComponentMetaChecker(tsConfig)
const program = checker.__internal__.tsLs.getProgram()

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // tsconfigRootDir: __dirname,
    // project: ['./tsconfig.json'],
    // ecmaVersion: 2020,
    // ecmaFeatures: {
    //   jsx: true,
    // },
    // sourceType: 'module',
    // extraFileExtensions: ['.vue'],
    programs: [program],
  },
}
