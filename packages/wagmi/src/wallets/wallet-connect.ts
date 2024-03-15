import { metadata_WalletConnect } from '@ant-design/web3-assets';
import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory } from '../interface';

type EthereumWalletConnect = (
  metadata?: Partial<WalletMetadata> & {
    useWalletConnectOfficialModal?: boolean;
  },
) => WalletFactory;

export const WalletConnect: EthereumWalletConnect = (metadata) => {
  const { useWalletConnectOfficialModal = false, ...rest } = metadata || {};
  return {
    connectors: ['WalletConnect'],
    create: (connectors?: readonly Connector[]): Wallet => {
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
        hasWalletReady: async () => {
          return true;
        },
        getQrCode: useWalletConnectOfficialModal ? undefined : getQrCode,
        ...rest,
      };
    },
  };
};
