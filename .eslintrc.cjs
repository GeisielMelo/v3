module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}

// module.exports = {
//   env: {
//     es2021: true,
//     node: true,
//   },
//   extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['@typescript-eslint'],
//   rules: {
//     'prettier/prettier': [
//       'error',
//       {
//         endOfLine: 'auto',
//         printWidth: 100,
//         tabWidth: 2,
//         singleQuote: true,
//         trailingComma: 'all',
//         arrowParens: 'always',
//         semi: false,
//       },
//     ],
//   },
//   settings: {
//     'import/parsers': {
//       [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
//     },
//   },
// }
