/* v8 ignore start */
import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, TronlinkColorful } from '@ant-design/web3-icons';

export const TronlinkWallet: WalletMetadata = {
  icon: <TronlinkColorful />,
  name: 'TronLink',
  remark: 'TronLink',
  app: {
    link: 'https://www.tronlink.org/dlDetails/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec',
      description: 'The first and most popular TRON wallet. Recommended by TRON Foundation.',
    },
  ],
  key: 'tronWallet',
  group: 'Popular',
};
