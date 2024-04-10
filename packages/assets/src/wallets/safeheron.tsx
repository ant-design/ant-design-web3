import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful, SafeheronColorful } from '@ant-design/web3-icons';

export const metadata_Safeheron: WalletMetadata = {
  icon: <SafeheronColorful />,
  name: 'Safeheron',
  remark: 'Safeheron Wallet',
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chromewebstore.google.com/detail/safeheron/aiaghdjafpiofpainifbgfgjfpclngoh',
      description: 'Access your wallet right from your favorite web browser.',
    },
  ],
};
