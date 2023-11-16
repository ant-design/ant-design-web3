import React from 'react';
import {
  type Account,
  type Wallet,
  type Chain,
  Web3ConfigProvider,
  requestWeb3Asset,
  fillAddressWith0x,
} from '@ant-design/web3-common';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import { readContract } from '@wagmi/core';
import type { WalletFactory } from '../interface';

export interface AntDesignWeb3ConfigProviderProps {
  assets?: (WalletFactory | Chain)[];
  children?: React.ReactNode;
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { children, assets } = props;
  const { address, isDisconnected } = useAccount();
  const { connectors, connectAsync } = useConnect();
  const { chain, chains } = useNetwork();
  const { disconnectAsync } = useDisconnect();

  const accounts: Account[] = React.useMemo(() => {
    if (!address || isDisconnected) {
      return [];
    }
    return [
      {
        address,
      },
    ];
  }, [address, isDisconnected]);

  const wallets: Wallet[] = React.useMemo(() => {
    return connectors.map((connector) => {
      const walletFactory = assets?.find((item) => item.name === connector.name) as WalletFactory;
      if (!walletFactory?.create) {
        throw new Error(`Can not find wallet factory for ${connector.name}`);
      }
      return walletFactory.create(connector);
    });
  }, [connectors, assets]);

  const chainList: Chain[] = React.useMemo(() => {
    return chains.map((item) => {
      const c = assets?.find((asset) => asset.name === item.name) as Chain;
      if (!c?.id) {
        throw new Error(`Can not find chain id for ${item.name}`);
      }
      return c;
    });
  }, [chains, assets]);

  console.log('chains', chains);

  const currentChain = React.useMemo(() => {
    if (!chain) {
      return undefined;
    }
    const c = assets?.find((item) => item.name === chain?.name) as Chain;
    if (!c?.id) {
      throw new Error(`Can not find chain id for ${chain.name}`);
    }
    return c;
  }, [chain, assets]);

  return (
    <Web3ConfigProvider
      chains={chainList}
      currentChain={currentChain}
      accounts={accounts}
      wallets={wallets}
      requestAccounts={async (wallet) => {
        const connector = connectors.find((item) => item.name === wallet);
        const { account } = await connectAsync({
          connector,
        });
        return [
          {
            address: account,
          },
        ];
      }}
      disconnect={async () => {
        await disconnectAsync();
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) => {
        const tokenURI = await readContract({
          address: fillAddressWith0x(contractAddress),
          args: [tokenId],
          chainId: chain?.id,
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
        const metaInfo = await requestWeb3Asset(tokenURI as string);
        return metaInfo;
      }}
    >
      {children}
    </Web3ConfigProvider>
  );
};
