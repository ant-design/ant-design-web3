import { ChromeCircleColorful, TonkeeperColorful } from '@ant-design/web3-icons';

import type { TonWalletMetadata } from './type';

export const tonkeeper: TonWalletMetadata = {
  key: 'tonkeeper',
  icon: <TonkeeperColorful />,
  group: 'Popular',
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/omaabbefbmiijedngplfjmnooppbclkk',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
