import js from '@eslint/js'
import globals from 'globals'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// import storybook from "eslint-plugin-storybook";
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
		linterOptions: {
			reportUnusedInlineConfigs: "error",
		},
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
			// storybook.configs.recommended,
    ],
		rules: {
			'eqeqeq': 'error',
			'no-unused-vars': 'error',
			'prefer-const': ["error", {
				"destructuring": "any",
				"ignoreReadBeforeAssign": false
			}],
			'indent': ['error', 2],
			'quotes': ['error', 'single'],
			'semi': ['error', 'always'],
			'camelcase': ['error',{'properties': 'always'}],
		},
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
