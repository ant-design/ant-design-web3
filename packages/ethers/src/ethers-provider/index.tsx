import React from 'react';
import {
  Mainnet,
  WagmiWeb3ConfigProvider,
  type WagmiWeb3ConfigProviderProps,
} from '@ant-design/web3-wagmi';
import type { Chain } from 'viem';
import { createConfig, http, type CreateConfigParameters } from 'wagmi';
import * as wagmiChains from 'wagmi/chains';
import * as wagmiConnectors from 'wagmi/connectors';

import { WalletConnectFactory } from '../wallets/wallet-connect';

export interface EthersWeb3ConfigProviderProps
  extends Omit<WagmiWeb3ConfigProviderProps, 'config'> {}

export const EthersWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<EthersWeb3ConfigProviderProps>
> = ({ children, ...props }) => {
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
    const connectors: CreateConfigParameters['connectors'] = [wagmiConnectors.injected()];

    (props.wallets ?? []).forEach((wallet) => {
      if (wallet.name) {
        connectors.push(wagmiConnectors.injected({ target: wallet.name as any }));
      }
    });

    if (walletConnect?.params?.projectId) {
      connectors.push(
        wagmiConnectors.walletConnect({
          ...walletConnect.params,
          showQrModal: walletConnect.useWalletConnectOfficialModal,
        }),
      );
    }
    return createConfig({ chains, transports, connectors });
  }, [chains, walletConnect, props.wallets]);

  return (
    <WagmiWeb3ConfigProvider config={wagmiConfig} {...props}>
      {children}
    </WagmiWeb3ConfigProvider>
  );
};
