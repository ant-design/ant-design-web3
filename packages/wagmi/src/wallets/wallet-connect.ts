import { metadata_WalletConnect } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { EthereumWallet } from '../interface';

export const WalletConnect: EthereumWallet = (metadata) => {
  return {
    connectors: ['WalletConnect'],
    create: (connectors?: readonly Connector[]): Wallet => {
      const getQrCode = async () => {
        const provider = await connectors?.[0]?.getProvider();
        return new Promise<{ uri: string }>((resolve) => {
          (provider as any)?.on('display_uri', (uri: string) => {
            resolve({
              uri,
            });
          });
        });
      };
      return {
        ...metadata_WalletConnect,
        hasWalletReady: async () => {
          return true;
        },
        getQrCode,
        ...metadata,
      };
    },
  };
};
