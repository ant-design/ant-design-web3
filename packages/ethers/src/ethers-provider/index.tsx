import React from 'react';
import {
  Mainnet,
  WagmiWeb3ConfigProvider,
  type WagmiWeb3ConfigProviderProps,
} from '@ant-design/web3-wagmi';
import type { Provider, Signer } from 'ethers';
import type { Chain } from 'viem';
import { createConfig, http, type CreateConfigParameters } from 'wagmi';
import * as wagmiChains from 'wagmi/chains';
import { walletConnect as walletConnectConnector } from 'wagmi/connectors';

import { WalletConnectFactory } from '../wallets/wallet-connect';
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

  const walletConnect = React.useMemo(
    () =>
      (props.wallets?.find((wallet) => wallet instanceof WalletConnectFactory) ??
        null) as WalletConnectFactory | null,
    [props.wallets],
  );

  const wagmiConfig = React.useMemo(() => {
    const transports = Object.fromEntries(chains.map((chain) => [chain.id, http()]));
    const connectors: CreateConfigParameters['connectors'] = [
      ethersConnector({ provider, signer }),
    ];
    if (walletConnect?.params?.projectId) {
      connectors.push(
        walletConnectConnector({
          ...walletConnect.params,
          showQrModal: walletConnect.useWalletConnectOfficialModal,
        }),
      );
    }
    return createConfig({ chains, transports, connectors });
  }, [chains, provider, signer, walletConnect]);

  return (
    <WagmiWeb3ConfigProvider config={wagmiConfig} {...props}>
      {children}
    </WagmiWeb3ConfigProvider>
  );
};
