import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SuietColorful } from '@ant-design/web3-icons';

export const metadata_Suiet: WalletMetadata = {
  name: 'Suiet',
  remark: 'Suiet Wallet',
  icon: <SuietColorful />,
  app: {
    link: 'https://suiet.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
