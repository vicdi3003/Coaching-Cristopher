module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'stylelint'],
  plugins: ['@html-eslint'],
  settings: {
    'html/indent': '0',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.html'],
      parser: '@html-eslint/parser',
      extends: ['plugin:@html-eslint/recommended'],
      rules: {
        '@html-eslint/indent': ['error', 2],
        '@html-eslint/no-extra-spacing-attrs': [
          'error',
          {
            enforceBeforeSelfClose: true,
          },
        ],
        '@html-eslint/require-closing-tags': ['error', { selfClosing: 'always' }],
      },
    },
  ],
};
