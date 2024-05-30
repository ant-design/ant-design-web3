import { metadata_MobileConnect } from '@ant-design/web3-assets';

import { WalletConnect, type EthereumWalletConnect } from './wallet-connect';

export const MobileWallet: EthereumWalletConnect = (metadata) => {
  return WalletConnect({
    ...metadata_MobileConnect,
    ...metadata,
  });
};
