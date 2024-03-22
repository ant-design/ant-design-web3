import React from 'react';
import { Web3ConfigProvider, type Chain, type Locale } from '@ant-design/web3-common';

import type { EthersEIP6963Config } from '../interface';

export interface AntDesignWeb3ConfigProviderProps {
  chainAssets: Chain[];
  // walletFactorys: WalletFactory[];
  locale?: Locale;
  ens?: boolean;
  balance?: boolean;
  eip6963?: EthersEIP6963Config;
}

export const AntDesignWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<AntDesignWeb3ConfigProviderProps>
> = ({ locale, children }) => {
  return (
    <Web3ConfigProvider
      locale={locale}
      // TODO
      account={undefined}
      chain={undefined}
      balance={undefined}
      availableChains={[]}
      availableWallets={[]}
      connect={async () => {
        throw new Error('Method not implemented');
      }}
      disconnect={async () => {
        throw new Error('Method not implemented');
      }}
      switchChain={async () => {
        throw new Error('Method not implemented');
      }}
      getNFTMetadata={async () => {
        throw new Error('Method not implemented');
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
