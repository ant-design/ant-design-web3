import type { WalletMetadata } from '@ant-design/web3-common';
import { ScanColorful } from '@ant-design/web3-icons';

export const metadata_WalletConnect: WalletMetadata = {
  icon: <ScanColorful />,
  name: 'Scan Code',
  remark: 'WalletConnect',
  universalProtocol: {
    link: 'https://walletconnect.com/',
  },
};
