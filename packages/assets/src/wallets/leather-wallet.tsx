import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_Leather: WalletMetadata = {
  // TODO: update icon
  icon: <ChromeCircleColorful />,
  name: 'Leather',
  remark: 'Leather Wallet',
  app: {
    link: 'https://leather.io',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/leather/ldinpeekobnhjjdofggfgjlcehhmanlj',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
