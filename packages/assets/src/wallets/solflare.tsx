import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SolflareColorful } from '@ant-design/web3-icons';

export const metadata_Solflare: WalletMetadata = {
  icon: <SolflareColorful />,
  name: 'Solflare',
  remark: 'Solflare Wallet',
  app: {
    link: 'https://solflare.com/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
