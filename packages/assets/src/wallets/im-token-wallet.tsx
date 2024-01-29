import type { WalletMetadata } from '@ant-design/web3-common';
import { ImTokenWalletColorful } from '@ant-design/web3-icons';

export const metadata_imToken: WalletMetadata = {
  icon: <ImTokenWalletColorful />,
  name: 'imToken',
  remark: 'Connect with mobile APP',
  app: {
    link: 'https://token.im/download',
  },
};
