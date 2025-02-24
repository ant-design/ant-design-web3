import React from 'react';
import {
  Mainnet,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  type WagmiWeb3ConfigProviderProps,
} from '@ant-design/web3-wagmi';
import type { Chain } from 'viem';
import { createConfig, http, type CreateConnectorFn, type Storage } from 'wagmi';
import * as wagmiChains from 'wagmi/chains';
import * as wagmiConnectors from 'wagmi/connectors';

export interface EthersWeb3ConfigProviderProps
  extends Omit<WagmiWeb3ConfigProviderProps, 'config'> {
  storage?: Storage | false;
}

export const EthersWeb3ConfigProvider: React.FC<
  React.PropsWithChildren<EthersWeb3ConfigProviderProps>
> = ({ children, walletConnect, storage, ...props }) => {
  const chains = React.useMemo(
    () =>
      (props.chains ?? [Mainnet])
        .map((chain) => {
          const wagmiChain = Object.values(wagmiChains).find((wc) => wc.id === chain.id) ?? null;
          if (!wagmiChain?.id) console.warn(`Chain ${chain.id} is not supported`);
          return wagmiChain;
        })
        .filter((chain) => chain !== null) as unknown as readonly [Chain, ...Chain[]],

    // only check chains id
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.chains?.map((chain) => chain.id).join()],
  );

  const wallets = React.useMemo(() => {
    const targetWallets = [...(props.wallets ?? [])];
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (walletConnect && walletConnect.projectId) targetWallets.push(WalletConnect());
    return targetWallets;
  }, [props.wallets, walletConnect]);

  const wagmiConfig = React.useMemo(() => {
    const transports = Object.fromEntries(chains.map((chain) => [chain.id, http()]));
    const connectors: CreateConnectorFn[] = [wagmiConnectors.injected()];

    (props.wallets ?? []).forEach((wallet) => {
      if (wallet.name) {
        connectors.push(wagmiConnectors.injected({ target: wallet.name as any }));
      }
    });

    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (walletConnect && walletConnect.projectId) {
      connectors.push(
        wagmiConnectors.walletConnect({
          ...walletConnect,
          showQrModal: walletConnect.useWalletConnectOfficialModal ?? false,
        }),
      );
    }
    return createConfig({
      chains,
      transports,
      connectors,
      storage: storage === false ? null : storage,
    });
  }, [chains, walletConnect, props.wallets, storage]);

  return (
    <WagmiWeb3ConfigProvider {...props} config={wagmiConfig} wallets={wallets}>
      {children}
    </WagmiWeb3ConfigProvider>
  );
};
