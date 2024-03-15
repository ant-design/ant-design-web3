import type { WalletMetadata } from '@ant-design/web3-common';
import { ImTokenColorful } from '@ant-design/web3-icons';

export const metadata_imToken: WalletMetadata = {
  icon: <ImTokenColorful />,
  name: 'imToken',
  remark: 'Connect with mobile APP',
  app: {
    link: 'https://token.im/download',
  },
};
