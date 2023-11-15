import { type Wallet, metadata_MetaMask } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

export function getWalletByConnector(connector: Connector): Wallet {
  return {
    ...metadata_MetaMask,
    hasBrowserExtensionInstalled: async () => {
      return !!window.ethereum?.isMetaMask;
    },
  };
}
