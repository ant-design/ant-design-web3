import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_Plug: WalletMetadata = {
  icon: null,
  name: 'Plug',
  remark: 'Plug Wallet',
  app: {
    link: 'https://plugwallet.ooo/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/plug/cfbfdhimifdmdehjmkdobpcjfefblkjm',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
