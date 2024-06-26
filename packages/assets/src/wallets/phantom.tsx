import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, PhantomColorful } from '@ant-design/web3-icons';

export const metadata_Phantom: WalletMetadata = {
  key: 'app.phantom',
  icon: <PhantomColorful />,
  name: 'Phantom',
  remark: 'Phantom Wallet',
  app: {
    link: 'https://phantom.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
