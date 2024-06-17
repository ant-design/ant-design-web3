import React from 'react';
import {
  Account,
  Chain,
  ConnectOptions,
  Wallet,
  Web3ConfigProvider,
} from '@ant-design/web3-common';
import {
  useAccount,
  useChainId,
  useChains,
  useConfig,
  useConnect,
  useConnectors,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useSwitchChain,
} from 'wagmi';

export interface WagmiWeb3ConfigProviderProps2 {}

export const WagmiWeb3ConfigProvider2: React.FC<
  React.PropsWithChildren<WagmiWeb3ConfigProviderProps2>
> = ({ children }) => {
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

  const account: Account = {
    address: address!,
    name,
    avatar,
    status,
  };

  const connectedChainId = useChainId();
  const chains = useChains();
  const availableChains = chains.map<Chain>((current) => current);

  const chain =
    availableChains.find((current) => current.id === connectedChainId) ?? availableChains?.[0];
  const chainId = chain?.id;

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
    if (!connector) return; // TODO
    const { accounts } = await wagmiConnectAsync({ connector, chainId });
    return { address: accounts?.[0] };
  };

  const { disconnectAsync: wagmiDisconnectAsync } = useDisconnect();
  const disconnect = async () => wagmiDisconnectAsync();

  const { switchChainAsync: wagmiSwitchChainAsync } = useSwitchChain();
  const switchChain = async (newChain: Chain) => {
    await wagmiSwitchChainAsync({ chainId: newChain.id });
  };

  return (
    <Web3ConfigProvider
      account={account}
      addressPrefix="0x"
      availableChains={availableChains}
      availableWallets={availableWallets}
      chain={chain}
      connect={connect}
      disconnect={disconnect}
      switchChain={switchChain}
    >
      {children}
    </Web3ConfigProvider>
  );
};
