/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/packages/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  testTimeout: 3e4,
  transformIgnorePatterns: [`/node_modules/(?!${[].join('|')})`],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      '@swc/jest',
      {
        jsc: {
          // config doc: https://swc.rs/docs/configuration/compilation
          parser: {
            syntax: 'typescript',
            decorators: true,
            dynamicImport: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '/\\.(css|less)$/': 'identity-obj-proxy',
    '^@ant-design/web3$': '<rootDir>/packages/web3/src/index',
  },
  setupFiles: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: ['<rootDir>/packages/*/src/**/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '/(.*)mock(.*)/'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage' }]],
  coverageReporters: ['json-summary', ['text', { skipFull: true }], 'cobertura'],
};
