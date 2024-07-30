import { ChromeCircleColorful, OpenmaskCircleColorful } from '@ant-design/web3-icons';

import type { TonWalletMetadata } from './type';

export const openmask: TonWalletMetadata = {
  key: 'openmask',
  icon: <OpenmaskCircleColorful />,
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/penjlddjkjgpnkllboccdgccekpkcbin',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
