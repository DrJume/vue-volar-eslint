import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    tsconfigPath: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.app.json'],
    filesTypeAware: ['**/*.{ts,tsx,vue}'],
  },
})
