import globals from 'globals'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import html from '@html-eslint/eslint-plugin'
import parser from '@html-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })
export default [
  { files: ['**/*.js', '**/*.html'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  ...compat.extends('standard'),
  ...compat.plugins('html'),
  {
    settings: {
      'html/indent': '+2',
      'html/report-bad-indent': 'error'
    },
    rules: {

    }
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': html
    },
    languageOptions: {
      parser
    },
    rules: {
      '@html-eslint/indent': ['error', 2]
    }
  }

]
