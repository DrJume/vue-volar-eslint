/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  // ignore <template>, <style> and SFC
  ignorePatterns: ['**/*.vue', '**/*.html', '**/*.css', '**/*.scss'],
  overrides: [
    {
      // <script> in .vue files
      files: ['*.vue.ts', '*.vue.js'],
      rules: {
        // ignore invalid template errors in virtual code
        'prefer-const': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'prettier/prettier': 'off',
        // ...
      },
    },
  ],
}
