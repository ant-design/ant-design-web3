import React from 'react';
import {
  Mainnet,
  WagmiWeb3ConfigProvider,
  type WagmiWeb3ConfigProviderProps,
} from '@ant-design/web3-wagmi';
import type { Provider, Signer } from 'ethers';
import type { Chain } from 'viem';
import { createConfig, http } from 'wagmi';
import * as wagmiChains from 'wagmi/chains';

import { ethersConnector } from './connector';

export interface EthersWeb3ConfigProviderProps
  extends Omit<WagmiWeb3ConfigProviderProps, 'config'> {
  provider?: Provider;
  signer?: Signer;
}

export const EthersWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<EthersWeb3ConfigProviderProps>
> = ({ children, provider, signer, ...props }) => {
  const chains = React.useMemo(
    () =>
      (props.chains ?? [Mainnet])
        .map((chain) => {
          const wagmiChain = Object.values(wagmiChains).find((wc) => wc.id === chain.id) ?? null;
          if (!wagmiChain) console.warn(`Chain ${chain.id} is not supported`);
          return wagmiChain;
        })
        .filter((chain) => chain !== null) as unknown as readonly [Chain, ...Chain[]],

    // only check chains id
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.chains?.map((chain) => chain.id).join()],
  );

  const wagmiConfig = React.useMemo(() => {
    const config = createConfig({
      chains,
      transports: Object.fromEntries(chains.map((chain) => [chain.id, http()])),
      connectors: [ethersConnector({ provider, signer })],
    });
    return config;
  }, [chains, provider, signer]);

  return (
    <WagmiWeb3ConfigProvider config={wagmiConfig} {...props}>
      {children}
    </WagmiWeb3ConfigProvider>
  );
};
