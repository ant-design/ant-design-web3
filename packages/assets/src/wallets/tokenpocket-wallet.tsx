import type { WalletMetadata } from '@ant-design/web3-common';
import { TokenpocketColorful, ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_TokenpocketWallet: WalletMetadata = {
  icon: <TokenpocketColorful />,
  name: 'TokenPocket Wallet',
  remark: 'TokenPocket Wallet',
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
