import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, CoinbaseWalletCircleColorful } from '@ant-design/web3-icons';

export const metadata_CoinbaseWallet: WalletMetadata = {
  icon: <CoinbaseWalletCircleColorful />,
  name: 'Coinbase Wallet',
  remark: 'Coinbase Wallet',
  app: {
    link: 'https://www.coinbase.com/wallet',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
