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
      description:
        'OpenMask is an extension for accessing TON enabled decentralized applications, or "dApps" in your browser! MetaMask analog for The Open Network.',
    },
  ],
};
