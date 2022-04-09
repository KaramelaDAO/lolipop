module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  root: true,
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
