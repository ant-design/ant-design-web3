/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/packages/**/*.test.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  testTimeout: 3e4,
  transformIgnorePatterns: [`/node_modules/(?!${[].join('|')})`],
  transform: {
    '^.+\\.ts$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            decorators: true,
            dynamicImport: true,
          },
          transform: null,
        },
      },
    ],
    // '^.+\\.ts$': ['ts-jest', { diagnostics: false }],
  },
  setupFiles: ['<rootDir>/scripts/jest-setup.js'],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/(.*)mock(.*)/'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage' }]],
  coverageReporters: [
    // 'clover',
    // 'json',
    'json-summary',
    ['text', { skipFull: true }],
    'cobertura',
    // 'html-spa',
  ],
};
