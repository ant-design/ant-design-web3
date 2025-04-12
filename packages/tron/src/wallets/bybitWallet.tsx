/* v8 ignore start */
import type { WalletMetadata } from '@ant-design/web3-common';
import { BybitWalletCircleColorful, ChromeCircleColorful } from '@ant-design/web3-icons';

export const BybitWallet: WalletMetadata = {
  icon: <BybitWalletCircleColorful />,
  name: 'Bybit',
  remark: 'Bybit',
  app: {
    link: 'https://www.bybit.com/download/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/bybit-wallet/pdliaogehgdbhbnmkklieghmmjkpigpa',
      description:
        'Bybit Wallet connects you to the world of Web3 with best-in-class reliability and security.',
    },
  ],
  key: 'BybitWallet',
  group: 'Popular',
};
