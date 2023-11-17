import React from 'react';
import {
  type Account,
  type Wallet,
  type Chain,
  type ChainIds,
  Web3ConfigProvider,
  requestWeb3Asset,
  fillAddressWith0x,
} from '@ant-design/web3-common';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
  type Chain as WagmiChain,
} from 'wagmi';
import { readContract } from '@wagmi/core';
import type { WalletFactory } from '../interface';

export interface AntDesignWeb3ConfigProviderProps {
  assets?: (WalletFactory | Chain)[];
  children?: React.ReactNode;
  chains: WagmiChain[];
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { children, assets, chains } = props;
  const { address, isDisconnected } = useAccount();
  const { connectors, connectAsync } = useConnect();
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { disconnectAsync } = useDisconnect();
  const [currentChain, setCurrentChain] = React.useState<Chain | undefined>(undefined);

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
      const walletFactory = assets?.find(
        (item) => (item as WalletFactory).name === connector.name,
      ) as WalletFactory;
      if (!walletFactory?.create) {
        throw new Error(`Can not find wallet factory for ${connector.name}`);
      }
      return walletFactory.create(connector);
    });
  }, [connectors, assets]);

  const chainList: Chain[] = React.useMemo(() => {
    return chains.map((item) => {
      const c = assets?.find((asset) => {
        return (asset as Chain).id === item.id;
      }) as Chain;
      if (!c?.id) {
        return {
          id: c.id,
          name: c.name,
        };
      }
      return c;
    });
  }, [chains, assets]);

  React.useEffect(() => {
    if (!chain && currentChain) {
      // not connected any chain, keep current chain
      return;
    }
    const currentWagmiChain = chain ?? chains[0];
    if (!currentWagmiChain) {
      return;
    }
    let c = assets?.find((item) => (item as Chain).id === currentWagmiChain?.id) as Chain;
    if (!c?.id) {
      c = {
        id: currentWagmiChain.id,
        name: currentWagmiChain.name,
      };
    }
    setCurrentChain(c);
    return;
  }, [chain, assets, chains, currentChain]);

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
          chainId: currentChain?.id,
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
      switchChain={async (chainId: ChainIds) => {
        setCurrentChain(chainList.find((item) => item.id === chainId));
        switchNetwork?.(chainId);
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
