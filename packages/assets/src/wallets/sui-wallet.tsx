import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SuiColorful } from '@ant-design/web3-icons';

export const metadata_SuiWallet: WalletMetadata = {
  name: 'Sui Wallet',
  remark: 'Sui Wallet',
  icon: <SuiColorful />,
  app: {
    link: 'https://suiwallet.com/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
