import type { WalletMetadata } from '@ant-design/web3-common';
import { WalletConnectColorful } from '@ant-design/web3-icons';

export const metadata_WalletConnect: WalletMetadata = {
  key: 'walletconnect',
  icon: <WalletConnectColorful />,
  name: 'WalletConnect',
  remark: 'Connect with mobile APP',
  universalProtocol: {
    link: 'https://walletconnect.com/',
  },
};
