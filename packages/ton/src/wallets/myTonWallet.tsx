import { ChromeCircleColorful, MytonWalletCircleColorful } from '@ant-design/web3-icons';

import type { TonWalletMetadata } from './type';

export const myTonWallet: TonWalletMetadata = {
  key: 'mytonwallet',
  icon: <MytonWalletCircleColorful />,
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/fldfpgipfncgndfolcbkdeeknbbbnhcc',
      description:
        'The most feature-rich TON extension – with support of multi-accounts, tokens, NFT, TON DNS, TON Sites, TON Proxy, and TON Magic.',
    },
  ],
};
