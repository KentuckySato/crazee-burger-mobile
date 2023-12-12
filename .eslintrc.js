module.exports = {
  root: true,
  extends: '@react-native',
  indent: ['error', 4],
  parser: '@typescript-eslint/parser',
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
  },
};
