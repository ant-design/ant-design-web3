import React from 'react';
import type {
  Account,
  Balance,
  Chain,
  ConnectOptions,
  Locale,
  Wallet,
} from '@ant-design/web3-common';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import {
  useAccount,
  useBalance,
  useChainId,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSwitchChain,
} from 'wagmi';

export interface WagmiWeb3ConfigProviderProps2 {
  ens?: boolean;
  balance?: boolean;
  locale?: Locale;
}

export const WagmiWeb3ConfigProvider2: React.FC<
  React.PropsWithChildren<WagmiWeb3ConfigProviderProps2>
> = ({ children, ens = true, balance: enableBalance = false, locale }) => {
  const { address, isConnected, isConnecting, isDisconnected, isReconnecting } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const name = ensName ?? undefined;
  const { data: ensAvatar } = useEnsAvatar({ name });
  const avatar = ensAvatar ?? undefined;

  let status: Account['status'];
  if (isConnecting || isReconnecting) {
    status = 'connecting';
  } else if (isConnected) {
    status = 'connected';
  } else if (isDisconnected) {
    status = 'disconnected';
  } else {
    status = 'default';
  }

  const account: Account | undefined =
    address && !isDisconnected
      ? {
          address,
          name: ensName && ens ? ensName : undefined,
          avatar,
          status,
        }
      : undefined;

  const connectedChainId = useChainId();
  const { switchChainAsync: wagmiSwitchChainAsync, chains } = useSwitchChain();
  const availableChains = chains.map<Chain>((current) => current); // TODO: merge with chainAssets

  const chain =
    availableChains.find((current) => current.id === connectedChainId) ?? availableChains?.[0];
  const chainId = chain?.id;

  const { data: balanceData } = useBalance({ address: enableBalance ? address : undefined });
  const balance: Balance | undefined = balanceData
    ? {
        symbol: balanceData?.symbol,
        value: balanceData?.value,
        decimals: balanceData?.decimals,
        icon: chain.nativeCurrency?.icon,
      }
    : undefined;

  const { connectors, connectAsync: wagmiConnectAsync } = useConnect();

  const availableWallets = connectors.map<Wallet>((connector) => ({
    icon: connector?.icon,
    name: connector!.name,
    remark: `Wallet ${connector?.name} detected`,
    key: connector?.uid,
    hasWalletReady: () => !!connector.uid,
    hasExtensionInstalled: () => true,
  }));

  const connect = async (wallet?: Wallet, options?: ConnectOptions) => {
    const connector = connectors.find((current) => current.uid === wallet?.key);

    if (!connector) {
      throw new Error(`Can not find connector for ${wallet?.name}`);
    }
    const { accounts } = await wagmiConnectAsync({ connector, chainId });
    const [connectedAddress] = accounts ?? [];
    return { address: connectedAddress, chainId };
  };

  const { disconnectAsync: wagmiDisconnectAsync } = useDisconnect();
  const disconnect = async () => wagmiDisconnectAsync();

  const switchChain = async (newChain: Chain) => {
    await wagmiSwitchChainAsync({ chainId: newChain.id });
  };

  return (
    <Web3ConfigProvider
      locale={locale}
      account={account}
      addressPrefix="0x"
      availableChains={availableChains}
      availableWallets={availableWallets}
      balance={balance}
      chain={chain}
      connect={connect}
      disconnect={disconnect}
      switchChain={switchChain}
    >
      {children}
    </Web3ConfigProvider>
  );
};
