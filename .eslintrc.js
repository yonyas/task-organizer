module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'airbnb',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.js', 'svgTransform.js'],
  plugins: ['react', '@typescript-eslint'],
};
