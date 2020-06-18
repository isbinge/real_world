module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'max-len': ['warn', { tabWidth: 4 }],
    'no-undef': 'error',
    'no-console': 'warn',
  },
  // overrides: [
  //   {
  //     files: ['**/index.tsx'],
  //     rules: {
  //       'no-console': 'off',
  //     },
  //   },
  // ],

  settings: {
    react: {
      version: 'detect',
    },
  },
};
