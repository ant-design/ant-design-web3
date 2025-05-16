import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SlishCircleFilled } from '@ant-design/web3-icons';

export const metadata_Slush: WalletMetadata = {
  name: 'Slush',
  remark: 'Slush',
  icon: <SlishCircleFilled />,
  app: {
    link: 'https://slush.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'chromewebstore.google.com/detail/opcgpfmipidbgpenhmajoajpbobppdil',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
