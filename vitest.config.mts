import path from 'path';
import { defineConfig } from 'vitest/config';
import svgLoader from 'vite-svg-loader';

const resolve = (src: string) => {
  return path.resolve(__dirname, src);
};
export default defineConfig({
  plugins: [svgLoader()],
  resolve: {
    alias: {
      '@ant-design/web3': resolve('./packages/web3/src/index'),
      '@ant-design/web3-icons': resolve('./packages/icons/src/index'),
      '@ant-design/web3-assets': resolve('./packages/assets/src/index'),
      '@ant-design/web3-wagmi': resolve('./packages/wagmi/src/index'),
      '@ant-design/web3-common': resolve('./packages/common/src/index'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['./packages/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
    reporters: ['default'],
    coverage: {
      include: ['packages/*/src/**/*.{tx,tsx}'],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura', 'html'],
    },
    testTimeout: 3e4,
  },
});
