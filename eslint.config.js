import antfu from '@antfu/eslint-config'
import * as vueVolar from './eslint-vue-volar.js'

export default antfu({
  typescript: {
    tsconfigPath: ['tsconfig.json', 'tsconfig.node.json', 'tsconfig.app.json'],
    filesTypeAware: ['**/*.{ts,tsx,vue}'],
  },
}).insertBefore('antfu/typescript/setup', [
  {
    plugins: {
      vueTs: vueVolar.create('tsconfig.json'),
    },
  },
  {
    files: ['**/*.vue'],
    processor: 'vueTs/vue',
  },
])
