import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, OkxWalletColorful } from '@ant-design/web3-icons';

export const metadata_OkxWallet: WalletMetadata = {
  icon: <OkxWalletColorful />,
  name: 'OkxWallet',
  remark: 'Okx Wallet',
  app: {
    link: 'https://www.okx.com/download',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/mcohilncbfahbmgdjkbpemcciiolgcge',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
