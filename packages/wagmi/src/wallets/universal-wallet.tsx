import type { WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory, WalletUseInWagmiAdapter } from '../interface';

export class UniversalWallet implements WalletFactory {
  connectors: string[] = [];
  constructor(private wallet: WalletMetadata) {
    if (wallet.extensions) {
      // support injected connector
      // https://wagmi.sh/react/connectors/injected
      this.connectors.push(wallet.name);
    }
    if (wallet.app) {
      // support WalletConnect https://wagmi.sh/react/connectors/walletConnect
      this.connectors.push('WalletConnect');
    }
  }
  create = (connectors?: readonly Connector[]): WalletUseInWagmiAdapter => {
    const walletConnector = connectors?.find((item) => item.name === 'WalletConnect');
    const injectedConnector = connectors?.find((item) => item.name === this.wallet.name);

    const getQrCode = async () => {
      const provider = await walletConnector?.getProvider();
      return new Promise<{ uri: string }>((resolve) => {
        (provider as any)?.on('display_uri', (uri: string) => {
          resolve({
            uri,
          });
        });
      });
    };

    const hasExtensionInstalled = async () => {
      const provider = await injectedConnector?.getProvider();
      return !!provider;
    };

    return {
      ...this.wallet,
      getWagmiConnector: async () => {
        if (await hasExtensionInstalled()) {
          return injectedConnector;
        }
        return walletConnector;
      },
      hasExtensionInstalled: async () => {
        return hasExtensionInstalled();
      },
      hasWalletReady: async () => {
        const installed = await hasExtensionInstalled();
        return !!(installed || walletConnector);
      },
      getQrCode: walletConnector ? getQrCode : undefined,
    };
  };
}
