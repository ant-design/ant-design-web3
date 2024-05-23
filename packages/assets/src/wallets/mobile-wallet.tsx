import type { WalletMetadata } from '@ant-design/web3-common';
import { ScanColorful } from '@ant-design/web3-icons';

export const mobile_WalletConnect: WalletMetadata = {
  icon: <ScanColorful />,
  name: 'Scan QR Code',
  remark: 'Connect with mobile APP',
  universalProtocol: {
    link: 'https://walletconnect.com/',
  },
};
