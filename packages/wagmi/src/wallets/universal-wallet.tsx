import type { WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory, WalletUseInWagmiAdapter } from '../interface';

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
  create = (connector?: Connector | Connector[]): WalletUseInWagmiAdapter => {
    const connectors = connector as Connector[];
    const walletConnector = connectors.find((item) => item.name === 'WalletConnect');
    const injectedConnector = connectors.find((item) => item.name === this.wallet.name);

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

    const hasExtensionInstalled = () => {
      const provider = injectedConnector?.options?.getProvider();
      return !!provider;
    };

    return {
      ...this.wallet,
      getWagmiConnector: () => {
        if (hasExtensionInstalled()) {
          return injectedConnector;
        }
        return walletConnector;
      },
      hasExtensionInstalled: async () => {
        return hasExtensionInstalled();
      },
      hasWalletReady: async () => {
        return !!(hasExtensionInstalled() || walletConnector);
      },
      getQrCode: walletConnector?.options?.showQrModal === false ? getQrCode : undefined,
    };
  };
}
