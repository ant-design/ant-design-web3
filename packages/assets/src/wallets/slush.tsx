import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SuiColorful } from '@ant-design/web3-icons';

export const metadata_Slush: WalletMetadata = {
  name: 'Slush',
  remark: 'Slush',
  icon: <SuiColorful />,
  app: {
    link: 'https://slush.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/slush-%E2%80%94-a-sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
