import React from 'react';
import { Web3ConfigProvider, Account, Wallet } from '@ant-design/web3-common';
import { useAccount, useConnect } from 'wagmi';
import { getWalletsByConnectors } from './wallets.js';

export interface WagmiWeb3ConfigProviderProps {
  children?: React.ReactNode;
}

export const WagmiWeb3ConfigProvider: React.FC<WagmiWeb3ConfigProviderProps> = (props) => {
  const { children } = props;
  const { address } = useAccount();
  const { connectors, connectAsync } = useConnect();

  const accounts: Account[] = React.useMemo(() => {
    if (!address) {
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
    >
      {children}
    </Web3ConfigProvider>
  );
};
