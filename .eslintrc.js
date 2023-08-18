module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
  },
  // https://www.npmjs.com/package/@typescript-eslint/parser
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.*.json', './packages/**/tsconfig.json'],
  },
};
