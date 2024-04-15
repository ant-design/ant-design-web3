import type { WalletMetadata } from '@ant-design/web3-common';
import { BackpackColorful, ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_Backpack: WalletMetadata = {
  icon: <BackpackColorful />,
  name: 'Backpack',
  remark: 'Backpack Wallet',
  app: {
    link: 'https://backpack.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/backpack/aflkmfhebedbjioipglgcbcmnbpgliof',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
