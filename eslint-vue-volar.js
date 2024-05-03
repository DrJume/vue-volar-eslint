import { createProcessor } from '@volar/eslint'
import { createParsedCommandLine, createVueLanguagePlugin } from '@vue/language-core'
import ts from 'typescript'

export function create(tsconfig) {
  const commonLine = createParsedCommandLine(ts, ts.sys, tsconfig)
  const languagePlugin = createVueLanguagePlugin(
    ts,
    filename => filename,
    ts.sys.useCaseSensitiveFileNames,
    () => '',
    () => commonLine.fileNames,
    commonLine.options,
    commonLine.vueOptions,
  )
  return {
    processors: {
      vue: createProcessor([languagePlugin], ts.sys.useCaseSensitiveFileNames),
    },
  }
}
