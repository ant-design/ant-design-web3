import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, TokenPocketColorful } from '@ant-design/web3-icons';

export const metadata_TokenPocket: WalletMetadata = {
  icon: <TokenPocketColorful />,
  name: 'TokenPocket',
  remark: 'TokenPocket',
  app: {
    link: 'https://www.tokenpocket.pro/en/download/app',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/mfgccjchihfkkindfppnaooecgfneiii',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
