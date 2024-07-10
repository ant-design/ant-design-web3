import React from 'react';
import type {
  Chain,
  ConnectOptions,
  Locale,
  Wallet,
  Web3ConfigProviderProps,
} from '@ant-design/web3-common';
import { fillAddressWith0x, requestWeb3Asset, Web3ConfigProvider } from '@ant-design/web3-common';
import { useConfig, useConnect, useDisconnect, useSwitchChain } from 'wagmi';
import { readContract } from 'wagmi/actions';

import { useAccount, useBalance, useChain, useChains, useWallets } from '../hooks';

export interface WagmiPureConfigProviderProps {
  ens?: boolean;
  balance?: boolean;
  avatar?: boolean;
  locale?: Locale;
}

export const WagmiPureConfigProvider: React.FC<
  React.PropsWithChildren<WagmiPureConfigProviderProps>
> = ({
  children,
  ens: showENS = true,
  balance: showBalance = false,
  avatar: showAvatar = true,
  locale,
}) => {
  const config = useConfig();

  const account = useAccount({ showENS, showAvatar });
  const balance = useBalance({ showBalance });
  const availableChains = useChains();

  const chain = useChain();
  const chainId = chain?.id;

  const { switchChainAsync: wagmiSwitchChainAsync } = useSwitchChain();

  const { connectors, connectAsync: wagmiConnectAsync } = useConnect();

  const walletConnectConnector = connectors.find((current) => current.id === 'walletConnect');
  const availableWallets = useWallets();

  const connect = async (wallet?: Wallet, options?: ConnectOptions) => {
    const connector =
      options?.connectType === 'qrCode'
        ? walletConnectConnector
        : connectors.find((current) => current.uid === wallet?.key);

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

  const getNFTMetadata: Web3ConfigProviderProps['getNFTMetadata'] = async ({
    address: contractAddress,
    tokenId,
  }) => {
    const tokenURI = await readContract(config, {
      address: fillAddressWith0x(contractAddress),
      args: [tokenId!],
      chainId,
      abi: [
        {
          name: 'tokenURI',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
            },
          ],
          outputs: [{ name: '', type: 'string' }],
          stateMutability: 'view',
          type: 'function',
        },
      ],
      functionName: 'tokenURI',
    });
    return requestWeb3Asset(tokenURI);
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
      getNFTMetadata={getNFTMetadata}
    >
      {children}
    </Web3ConfigProvider>
  );
};
