import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, TrustWalletColorful } from '@ant-design/web3-icons';

export const metadata_Trust: WalletMetadata = {
  icon: <TrustWalletColorful />,
  name: 'Trust',
  remark: 'Trust Wallet',
  app: {
    link: 'https://trustwallet.com/download',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
