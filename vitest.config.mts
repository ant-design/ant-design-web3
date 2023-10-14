import path from 'path';
import { defineConfig } from 'vitest/config';

const resolve = (src: string) => {
  return path.resolve(__dirname, src);
};
export default defineConfig({
  resolve: {
    alias: {
      '@ant-design/web3': resolve('./packages/web3/src/index'),
      '@ant-design/web3-icons': resolve('./packages/icons/src/index'),
      '@ant-design/web3-ethereum': resolve('./packages/ethereum/src/index'),
      '@ant-design/web3-common': resolve('./packages/common/src/index'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['./packages/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
    reporters: ['default'],
    coverage: {
      include: [
        'packages/*/src/**/*.ts',
      ],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura'],
    },
    testTimeout: 3e4,
  },
});
