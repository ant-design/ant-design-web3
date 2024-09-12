import { metadata_WalletConnect } from '@ant-design/web3-assets';
import type { WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory, WalletUseInWagmiAdapter } from '../interface';

export type EthereumWalletConnect = (
  metadata?: Partial<WalletMetadata> & {
    useWalletConnectOfficialModal?: boolean;
  },
) => WalletFactory;

export const WalletConnect: EthereumWalletConnect = (metadata) => {
  const { useWalletConnectOfficialModal = false, ...rest } = metadata || {};
  return {
    connectors: ['WalletConnect'],
    create: (connectors?: readonly Connector[], options = {}): WalletUseInWagmiAdapter => {
      let qrCodeUri: string | undefined = undefined;
      const getQrCode = async () => {
        const provider = await connectors?.[0]?.getProvider();
        return new Promise<{ uri: string }>((resolve) => {
          if (qrCodeUri) {
            resolve({
              uri: qrCodeUri,
            });
            return;
          }
          (provider as any)?.on('display_uri', (uri: string) => {
            qrCodeUri = uri;
            resolve({
              uri,
            });
          });
        });
      };
      return {
        ...metadata_WalletConnect,
        getWagmiConnector: async () => {
          return connectors?.[0];
        },
        hasWalletReady: async () => {
          return true;
        },
        getQrCode: getQrCode,
        customQrCodePanel: useWalletConnectOfficialModal || options.useWalletConnectOfficialModal,
        ...rest,
      };
    },
  };
};
