import type { Wallet, WalletMetadata } from '@ant-design/web3-common';
import type { Connector } from 'wagmi';

import type { EthereumWallet } from '../interface';

export const EIP6963_CONNECTOR = 'EIP6963';

export const EIP6963Wallet: EthereumWallet = (metadata) => {
  return {
    connectors: [EIP6963_CONNECTOR],
    create: (connectors?: readonly Connector[]): Wallet => {
      const connector = connectors?.[0];
      const metadata_eip6963: WalletMetadata = {
        icon: connector?.icon,
        name: connector!.name,
        remark: connector!.name,
        key: connector?.id,
      };
      return {
        ...metadata_eip6963,
        hasWalletReady: async () => {
          return !!(await connector?.getProvider());
        },
        hasExtensionInstalled: async () => {
          return !!(await connector?.getProvider());
        },
        ...metadata,
      };
    },
  };
};
