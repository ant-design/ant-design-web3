import React from 'react';
import {
  type Account,
  type Wallet,
  type Chain,
  Web3ConfigProvider,
  fillAddressWith0x,
} from '@ant-design/web3-common';
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
  useBalance,
  type Connector as WagmiConnector,
  type Chain as WagmiChain,
} from 'wagmi';
import { addNameToAccount, getNFTMetadata } from './methods';
import type { WalletFactory } from '../interface';

export interface AntDesignWeb3ConfigProviderProps {
  assets?: (WalletFactory | Chain)[];
  children?: React.ReactNode;
  ens?: boolean;
  balance?: boolean;
  availableChains: WagmiChain[];
  availableConnectors: WagmiConnector[];
}

export const AntDesignWeb3ConfigProvider: React.FC<AntDesignWeb3ConfigProviderProps> = (props) => {
  const { children, assets, availableChains, availableConnectors, ens, balance } = props;
  const { address, isDisconnected } = useAccount();
  const [account, setAccount] = React.useState<Account | undefined>();
  const { connectAsync } = useConnect();
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { disconnectAsync } = useDisconnect();
  const [currentChain, setCurrentChain] = React.useState<Chain | undefined>(undefined);
  const { data: balanceData } = useBalance({
    address: balance && account ? fillAddressWith0x(account.address) : undefined,
  });

  React.useEffect(() => {
    if (!address || isDisconnected) {
      setAccount(undefined);
      return;
    }
    const updateAccounts = async () => {
      const a = {
        address,
      };
      setAccount(ens ? await addNameToAccount(a) : a);
    };
    updateAccounts();
  }, [address, isDisconnected, chain, ens]);

  const wallets: Wallet[] = React.useMemo(() => {
    return availableConnectors
      .map((connector) => {
        const walletFactory = assets?.find(
          (item) => (item as WalletFactory).name === connector.name,
        ) as WalletFactory;
        if (!walletFactory?.create) {
          console.error(
            `Can not find wallet factory for ${connector.name}, you should config it in WagmiWeb3ConfigProvider 'assets'.`,
          );
          return null;
        }
        return walletFactory.create(connector);
      })
      .filter((item) => item !== null) as Wallet[];
  }, [availableConnectors, assets]);

  const chainList: Chain[] = React.useMemo(() => {
    return availableChains
      .map((item) => {
        const c = assets?.find((asset) => {
          return (asset as Chain).id === item.id;
        }) as Chain;
        if (c?.id) {
          return {
            id: c.id,
            name: c.name,
            icon: c.icon,
          };
        } else {
          console.error(
            `Can not find chain ${item.id}, you should config it in WagmiWeb3ConfigProvider 'assets'.`,
          );
          return null;
        }
      })
      .filter((item) => item !== null) as Chain[];
  }, [availableChains, assets]);

  React.useEffect(() => {
    if (!chain && currentChain) {
      // not connected any chain, keep current chain
      return;
    }
    const currentWagmiChain = chain ?? availableChains[0];
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
  }, [chain, assets, availableChains, currentChain]);

  return (
    <Web3ConfigProvider
      availableChains={chainList}
      chain={currentChain}
      account={account}
      balance={
        balance
          ? {
              symbol: balanceData?.symbol,
              value: balanceData?.value,
              decimals: balanceData?.decimals,
              icon: currentChain?.nativeCurrency?.icon,
            }
          : undefined
      }
      availableWallets={wallets}
      connect={async (wallet) => {
        const connector = availableConnectors.find((item) => item.name === wallet?.name);
        await connectAsync({
          connector,
          chainId: currentChain?.id,
        });
      }}
      disconnect={async () => {
        await disconnectAsync();
      }}
      switchChain={async (c: Chain) => {
        if (!chain) {
          // hava not connected any chain
          setCurrentChain(c);
        } else {
          switchNetwork?.(c.id);
        }
      }}
      getNFTMetadata={async ({ address: contractAddress, tokenId }) =>
        getNFTMetadata(contractAddress, tokenId, chain?.id)
      }
    >
      {children}
    </Web3ConfigProvider>
  );
};
