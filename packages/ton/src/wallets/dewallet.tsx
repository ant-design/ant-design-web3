import { ChromeCircleColorful, DeWalletCircleColorful } from '@ant-design/web3-icons';

import type { TonWalletMetadata } from './type';

export const dewallet: TonWalletMetadata = {
  key: 'dewallet',
  icon: <DeWalletCircleColorful />,
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/dewallet/pnccjgokhbnggghddhahcnaopgeipafg',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
