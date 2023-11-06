import React from 'react';
import {
  Web3ConfigProvider,
  Account,
  Wallet,
  requestWeb3Asset,
  fillAddressWith0x,
} from '@ant-design/web3-common';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import { readContract } from '@wagmi/core';
import { getWalletsByConnectors } from './wallets';

export interface WagmiWeb3ConfigProviderProps {
  children?: React.ReactNode;
}

export const WagmiWeb3ConfigProvider: React.FC<WagmiWeb3ConfigProviderProps> = (props) => {
  const { children } = props;
  const { address, isDisconnected } = useAccount();
  const { connectors, connectAsync } = useConnect();
  const { chain } = useNetwork();
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
  }, [address]);

  const wallets: Wallet[] = React.useMemo(() => {
    return getWalletsByConnectors(connectors);
  }, [connectors]);

  return (
    <Web3ConfigProvider
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
      getNFTMetadata={async ({ address, tokenId }) => {
        const tokenURI = await readContract({
          address: fillAddressWith0x(address),
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
