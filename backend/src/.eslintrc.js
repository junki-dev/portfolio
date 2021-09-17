module.exports = {
  env: { browser: true, es6: true, node: true },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 0,
  },
};
