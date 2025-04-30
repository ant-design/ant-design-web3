import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, RainbowWalletColorful } from '@ant-design/web3-icons';

export const metadata_RainbowWallet: WalletMetadata = {
  icon: <RainbowWalletColorful />,
  name: 'Rainbow Wallet',
  remark: 'Rainbow Wallet',
  app: {
    link: 'https://rainbow.me/download',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/opfgelmcmbiajamepnmloijbpoleiama',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
