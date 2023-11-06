import { Wallet } from '@ant-design/web3-common';
import { Connector } from 'wagmi';
import { getWalletByConnector as getMetaMaskByConnect } from './meta-mask';
import { getWalletByConnector as getWalletConnectByConnect } from './wallet-connect';

export const getWalletsByConnectors = (connectors: Connector[]): Wallet[] => {
  return connectors
    .map((connector) => {
      if (connector.name === 'MetaMask') {
        return getMetaMaskByConnect(connector);
      }
      if (connector.name === 'WalletConnect') {
        return getWalletConnectByConnect(connector);
      }
      console.error(`Unknown wallet for connector name: ${connector.name}`);
      return undefined;
    })
    .filter((wallet) => wallet !== undefined) as Wallet[];
};
