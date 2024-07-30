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
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
