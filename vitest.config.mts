import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';
import checkbox from '@inquirer/checkbox';
import { readdirSync } from 'fs';

const resolve = (src: string) => {
  return path.resolve(__dirname, src);
};

const isDist = process.env.LIB_DIR === 'dist';

const pkgList = readdirSync(path.join(__dirname, 'packages'));

// Examples:
//   pnpm test -- --pkg=*
//   pnpm test -- --pkg=wagmi
//   pnpm test -- --pkg=solana,wagmi
const pkg = process.argv.find(arg => arg.startsWith('--pkg='));
let packages: string[] = [];

if (pkg) {
  const pkgValue = pkg ? pkg.split('=')[1] : '';
  packages = pkgValue.split(',');
} else {
  packages = await checkbox({
    message: 'Select packages to test (Enter to select all):',
    choices: pkgList.map((pkg) => ({
      name: pkg,
      value: pkg,
    })),
  });
}

if (packages.length) {
  console.warn(`Testing packages: [${packages.join(',')}]\r\n`);
} else {
  console.warn(`Testing all packages\r\n`);
}

const testPackages = packages.length > 1 ? `{${packages.join(',')}}` : packages.join('');

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
    alias: isDist
      ? {
          '@ant-design/web3': resolve('./packages/web3/dist/esm/index'),
          '@ant-design/web3-icons': resolve('./packages/icons/dist/esm/index'),
          '@ant-design/web3-assets/solana': resolve('./packages/assets/dist/esm/solana/index'),
          '@ant-design/web3-assets/tokens': resolve('./packages/assets/dist/esm/tokens/index'),
          '@ant-design/web3-assets': resolve('./packages/assets/dist/esm/index'),
          '@ant-design/web3-wagmi': resolve('./packages/wagmi/dist/esm/index'),
          '@ant-design/web3-ethers-v5': resolve('./packages/ethers-v5/dist/esm/index'),
          '@ant-design/web3-ethers': resolve('./packages/ethers/dist/esm/index'),
          '@ant-design/web3-ethers/provider': resolve(
            './packages/ethers/dist/esm/ethers-provider/index',
          ),
          '@ant-design/web3-ethers/wallets': resolve('./packages/ethers/dist/esm/wallets/index'),
          '@ant-design/web3-solana': resolve('./packages/solana/dist/esm/index'),
          '@ant-design/web3-eth-web3js': resolve('./packages/eth-web3js/dist/esm/index'),
          '@ant-design/web3-common': resolve('./packages/common/dist/esm/index'),
        }
      : {
          '@ant-design/web3': resolve('./packages/web3/src/index'),
          '@ant-design/web3-icons': resolve('./packages/icons/src/index'),
          '@ant-design/web3-assets/solana': resolve('./packages/assets/src/solana/index'),
          '@ant-design/web3-assets/tokens': resolve('./packages/assets/src/tokens/index'),
          '@ant-design/web3-assets': resolve('./packages/assets/src/index'),
          '@ant-design/web3-wagmi': resolve('./packages/wagmi/src/index'),
          '@ant-design/web3-ethers-v5': resolve('./packages/ethers-v5/src/index'),
          '@ant-design/web3-ethers': resolve('./packages/ethers/src/index'),
          '@ant-design/web3-ethers/provider': resolve(
            './packages/ethers/src/ethers-provider/index',
          ),
          '@ant-design/web3-ethers/wallets': resolve('./packages/ethers/src/wallets/index'),
          '@ant-design/web3-solana': resolve('./packages/solana/src/index'),
          '@ant-design/web3-eth-web3js': resolve('./packages/eth-web3js/src/index'),
          '@ant-design/web3-common': resolve('./packages/common/src/index'),
        },
  },
  test: {
    environment: 'jsdom',
    include: [`./packages${testPackages ? ('/' + testPackages) : ''}/**/*.test.{ts,tsx}`],
    setupFiles: ['./tests/setup.ts'],
    reporters: ['default'],
    coverage: {
      include: [`packages/${testPackages ? testPackages : '*'}/src/**/*.{ts,tsx}`],
      exclude: ['**/demos/*.{ts,tsx}', '**/src/index.ts'],
      reporter: ['json-summary', ['text', { skipFull: true }], 'cobertura', 'html'],
    },
    testTimeout: 3e4,
    alias: {
      'copy-to-clipboard': resolve('./tests/copy-to-clipboard'),
    },
  },
});
