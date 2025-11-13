import { useMemo, useState, type PropsWithChildren } from 'react';
import { Solana, SolanaDevnet, SolanaTestnet } from '@ant-design/web3-assets/solana';
import type { Locale } from '@ant-design/web3-common';

import type { SolanaChainConfig } from '../chains';
import { solana } from '../chains';
import { AntDesignWeb3ConfigProviderInner } from './config-provider';
import { RpcProvider, type RpcContextType } from './rpc-provider';

type SolanaWeb3ConfigProviderProps = PropsWithChildren<
  { rpcProvider: (chain?: SolanaChainConfig) => RpcContextType } & {
    locale?: Locale;
    chains?: SolanaChainConfig[];
    balance?: boolean;
  }
>;

export function SolanaWeb3ConfigProvider({
  rpcProvider,
  chains = [solana],
  locale,
  balance,
  children,
}: SolanaWeb3ConfigProviderProps) {
  const [currentChain, setCurrentChain] = useState<SolanaChainConfig | undefined>(chains[0]);

  const rpc = useMemo(() => rpcProvider(currentChain), [rpcProvider, currentChain]);

  return (
    <RpcProvider {...rpc}>
      <AntDesignWeb3ConfigProviderInner
        availableChains={chains}
        currentChain={currentChain}
        balance={balance}
        locale={locale}
        chainAssets={[Solana, SolanaDevnet, SolanaTestnet]}
        onCurrentChainChange={(chain) => setCurrentChain(chain)}
      >
        {children}
      </AntDesignWeb3ConfigProviderInner>
    </RpcProvider>
  );
}
