module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  plugins: ['unused-imports', 'import'],
  rules: {
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        // newlines-between 不同组之间是否进行换行
        'newlines-between': 'always-and-inside-groups',
        // alphabetize 根据字母顺序对每个组内的顺序进行排序
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  // https://www.npmjs.com/package/@typescript-eslint/parser
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.*.json', './packages/**/tsconfig.json'],
  },
};
