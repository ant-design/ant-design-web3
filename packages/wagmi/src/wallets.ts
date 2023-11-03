import { Wallet, metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-common';
import { Connector } from 'wagmi';

export const getWalletsByConnectors = (connectors: Connector[]): Wallet[] => {
  return connectors
    .map((connector) => {
      if (connector.name === 'MetaMask') {
        return {
          ...metadata_MetaMask,
          hasBrowserExtensionInstalled: async () => {
            return !!window.ethereum;
          },
        } as Wallet;
      }
      if (connector.name === 'WalletConnect') {
        return {
          ...metadata_WalletConnect,
          hasBrowserExtensionInstalled: async () => {
            if (connector.options.showQrModal === false) {
              return false;
            }
            return true;
          },
        } as Wallet;
      }
      return undefined;
    })
    .filter((wallet) => wallet !== undefined) as Wallet[];
};
