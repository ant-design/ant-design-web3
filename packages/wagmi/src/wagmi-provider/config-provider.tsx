import React from 'react';
import { type Account, type Wallet, type Chain, Web3ConfigProvider } from '@ant-design/web3-common';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
  type Chain as WagmiChain,
} from 'wagmi';
import { addNameToAccounts, getNFTMetadata } from './methods';
import type { WalletFactory } from '../interface';

export interface AntDesignWeb3ConfigProviderProps {
  assets?: (WalletFactory | Chain)[];
  children?: React.ReactNode;
  ens?: boolean;
  chains: WagmiChain[];
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { children, assets, chains, ens } = props;
  const { address, isDisconnected } = useAccount();
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  const { connectors, connectAsync } = useConnect();
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { disconnectAsync } = useDisconnect();
  const [currentChain, setCurrentChain] = React.useState<Chain | undefined>(undefined);

  React.useEffect(() => {
    if (!address || isDisconnected) {
      setAccounts([]);
      return;
    }
    const updateAccounts = async () => {
      const as: Account[] = [
        {
          address,
        },
      ];
      setAccounts(ens ? await addNameToAccounts(as) : as);
    };
    updateAccounts();
  }, [address, isDisconnected, chain, ens]);

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
        const as = [
          {
            address: account,
          },
        ];
        return ens ? addNameToAccounts(as, chain?.id) : as;
      }}
      disconnect={async () => {
        await disconnectAsync();
      }}
      switchChain={async (c: Chain) => {
        switchNetwork?.(c.id);
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) =>
        getNFTMetadata(contractAddress, tokenId, chain?.id)
      }
    >
      {children}
    </Web3ConfigProvider>
  );
};
