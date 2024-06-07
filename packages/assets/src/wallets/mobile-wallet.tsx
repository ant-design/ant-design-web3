import type { WalletMetadata } from '@ant-design/web3-common';
import { ScanColorful } from '@ant-design/web3-icons';

export const metadata_MobileConnect: WalletMetadata = {
  icon: <ScanColorful />,
  name: 'Scan QR Code',
  remark: 'Connect with mobile APP',
  group: 'Popular',
  universalProtocol: {
    link: 'https://walletconnect.com/',
  },
};
