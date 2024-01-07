import React from 'react';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { type ConnectionConfig } from '@solana/web3.js';
import type { Chain, Locale } from '@ant-design/web3-common';
import type { Adapter } from '@solana/wallet-adapter-base';

import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface SolanaWeb3ConfigProviderProps extends React.PropsWithChildren {
  locale?: Locale;
  assets?: Chain[];
  balance?: boolean;

  //#region Solana ConnectionProvider specific
  connectionEndpoint: string;
  connectionConfig?: ConnectionConfig;
  //#endregion

  //#region Solana WalletProvider specific
  wallets?: Adapter[];
  autoConnect?: boolean;
  //#endregion
}

export const SolanaWeb3ConfigProvider: React.FC<SolanaWeb3ConfigProviderProps> = (props) => {
  return (
    <ConnectionProvider endpoint={props.connectionEndpoint} config={props.connectionConfig}>
      <WalletProvider wallets={props.wallets || []} autoConnect={props.autoConnect}>
        <AntDesignWeb3ConfigProvider
          locale={props.locale}
          assets={props.assets}
          availableChains={[]}
          availableConnectors={props.wallets || []}
        >
          {props.children}
        </AntDesignWeb3ConfigProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
