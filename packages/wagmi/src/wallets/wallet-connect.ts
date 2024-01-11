import { metadata_WalletConnect } from '@ant-design/web3-assets';
import { type Wallet } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { WalletFactory } from '../interface';

export const WalletConnect: WalletFactory = {
  name: 'WalletConnect',
  create: (connector?: Connector | Connector[]): Wallet => {
    const getQrCode = async () => {
      const provider = await (connector as Connector)?.getProvider();
      return new Promise<{ uri: string }>((resolve) => {
        (provider as any).on('display_uri', (uri: string) => {
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
      // TODO support showQrModal, getQrCode: (connector as Connector)?.options.showQrModal === false ? getQrCode : undefined,
    };
  },
};
