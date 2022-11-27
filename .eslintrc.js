module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'linebreak-style': 0,
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
};
