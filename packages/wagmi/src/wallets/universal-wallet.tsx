import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory } from '../interface';

export class UniversalWallet implements WalletFactory {
  name: string[] = [];
  constructor(private wallet: WalletMetadata) {
    if (wallet.extensions) {
      // support injected connector
      // https://wagmi.sh/react/connectors/injected
      this.name.push(wallet.name);
    }
    if (wallet.app) {
      // support WalletConnect https://wagmi.sh/react/connectors/walletConnect
      this.name.push('WalletConnect');
    }
  }
  create = (connector?: Connector | Connector[]): Wallet => {
    const connectors = connector as Connector[];
    const walletConnector = connectors.find((item) => item.name === 'WalletConnect');
    const getQrCode = async () => {
      const provider = await walletConnector?.getProvider();
      return new Promise<{ uri: string }>((resolve) => {
        provider.on('display_uri', (uri: string) => {
          resolve({
            uri,
          });
        });
      });
    };
    return {
      ...this.wallet,
      hasWalletReady: async () => {
        const injectedConnector = connectors.find((item) => item.name === this.wallet.name);
        const ready = await injectedConnector?.getProvider();
        return !!ready;
      },
      getQrCode: walletConnector?.options.showQrModal === false ? getQrCode : undefined,
    };
  };
}
