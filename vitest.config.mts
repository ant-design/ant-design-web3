import path from 'path';
import { defineConfig } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

const resolve = (src: string) => {
  return path.resolve(__dirname, src);
};

const isDist = process.env.LIB_DIR === 'dist';

export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
      include: ['**/*.svg'],
    }),
  ],
  resolve: {
    alias: isDist? {
      '@ant-design/web3': resolve('./packages/web3/dist/esm/index'),
      '@ant-design/web3-icons': resolve('./packages/icons/dist/esm/index'),
      '@ant-design/web3-assets/solana': resolve('./packages/assets/dist/esm/solana/index'),
      '@ant-design/web3-assets': resolve('./packages/assets/dist/esm/index'),
      '@ant-design/web3-wagmi': resolve('./packages/wagmi/dist/esm/index'),
      '@ant-design/web3-ethers': resolve('./packages/ethers/dist/esm/index'),
      '@ant-design/web3-solana': resolve('./packages/solana/dist/esm/index'),
      '@ant-design/web3-common': resolve('./packages/common/dist/esm/index'),
    } : {
      '@ant-design/web3': resolve('./packages/web3/src/index'),
      '@ant-design/web3-icons': resolve('./packages/icons/src/index'),
      '@ant-design/web3-assets/solana': resolve('./packages/assets/src/solana/index'),
      '@ant-design/web3-assets': resolve('./packages/assets/src/index'),
      '@ant-design/web3-wagmi': resolve('./packages/wagmi/src/index'),
      '@ant-design/web3-ethers': resolve('./packages/ethers/src/index'),
      '@ant-design/web3-solana': resolve('./packages/solana/src/index'),
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
      exclude: ['**/demos/*.tsx'],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura', 'html'],
    },
    testTimeout: 3e4,
  },
});
