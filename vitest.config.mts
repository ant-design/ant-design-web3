import path from 'node:path';
import svgr from 'vite-plugin-svgr';
import { defineConfig, ViteUserConfig } from 'vitest/config';

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
  ] as ViteUserConfig['plugins'],
  resolve: {
    alias: isDist
      ? {
          '@ant-design/web3': resolve('./packages/web3/dist/esm/index'),
          '@ant-design/web3-icons': resolve('./packages/icons/dist/esm/index'),
          '@ant-design/web3-assets/solana': resolve('./packages/assets/dist/esm/solana/index'),
          '@ant-design/web3-assets/tokens': resolve('./packages/assets/dist/esm/tokens/index'),
          '@ant-design/web3-assets/wallets': resolve('./packages/assets/dist/esm/wallets/index'),
          '@ant-design/web3-assets': resolve('./packages/assets/dist/esm/index'),
          '@ant-design/web3-wagmi': resolve('./packages/wagmi/dist/esm/index'),
          '@ant-design/web3-ethers-v5': resolve('./packages/ethers-v5/dist/esm/index'),
          '@ant-design/web3-ethers': resolve('./packages/ethers/dist/esm/index'),
          '@ant-design/web3-ethers/provider': resolve(
            './packages/ethers/dist/esm/ethers-provider/index',
          ),
          '@ant-design/web3-ethers/wallets': resolve('./packages/ethers/dist/esm/wallets/index'),
          '@ant-design/web3-solana': resolve('./packages/solana/dist/esm/index'),
          '@ant-design/web3-sui': resolve('./packages/sui/dist/esm/index'),
          '@ant-design/web3-ton': resolve('./packages/ton/dist/esm/index'),
          '@ant-design/web3-tron': resolve('./packages/tron/dist/esm/index'),
          '@ant-design/web3-eth-web3js': resolve('./packages/eth-web3js/dist/esm/index'),
          '@ant-design/web3-common': resolve('./packages/common/dist/esm/index'),
        }
      : {
          '@ant-design/web3': resolve('./packages/web3/src/index'),
          '@ant-design/web3-icons': resolve('./packages/icons/src/index'),
          '@ant-design/web3-assets/solana': resolve('./packages/assets/src/solana/index'),
          '@ant-design/web3-assets/tokens': resolve('./packages/assets/src/tokens/index'),
          '@ant-design/web3-assets/wallets': resolve('./packages/assets/src/wallets/index'),
          '@ant-design/web3-assets': resolve('./packages/assets/src/index'),
          '@ant-design/web3-wagmi': resolve('./packages/wagmi/src/index'),
          '@ant-design/web3-ethers-v5': resolve('./packages/ethers-v5/src/index'),
          '@ant-design/web3-ethers': resolve('./packages/ethers/src/index'),
          '@ant-design/web3-ethers/provider': resolve(
            './packages/ethers/src/ethers-provider/index',
          ),
          '@ant-design/web3-ethers/wallets': resolve('./packages/ethers/src/wallets/index'),
          '@ant-design/web3-solana': resolve('./packages/solana/src/index'),
          '@ant-design/web3-sui': resolve('./packages/sui/src/index'),
          '@ant-design/web3-ton': resolve('./packages/ton/src/index'),
          '@ant-design/web3-tron': resolve('./packages/tron/src/index'),
          '@ant-design/web3-eth-web3js': resolve('./packages/eth-web3js/src/index'),
          '@ant-design/web3-common': resolve('./packages/common/src/index'),
        },
  },
  test: {
    environment: 'jsdom',
    include: ['./packages/**/*.test.{ts,tsx}'],
    setupFiles: ['./tests/setup.ts'],
    reporters: ['default'],
    coverage: {
      include: ['packages/*/src/**/*.{ts,tsx}'],
      exclude: [
        '**/demos/**/*.{ts,tsx}',
        '**/src/index.ts',
        '**/__tests__/*.{ts,tsx}',
        '**/*.test.{ts,tsx}',
        '**/__mocks__/*.{ts,tsx}',
      ],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura', 'html'],
    },
    testTimeout: 3e4,
    alias: {
      'copy-to-clipboard': resolve('./tests/copy-to-clipboard'),
    },
  },
});
