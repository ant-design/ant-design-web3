import React, { useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { Icp, type IcpChain } from '@ant-design/web3-assets/icp';
import type { Locale } from '@ant-design/web3-common';

import { PlugWallet } from '../wallets/built-in';
import type { IcpWalletFactory } from '../wallets/factory';
import { AntDesignWeb3ConfigProvider } from './config-provider';

export interface IcpWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: IcpChain[];
  wallets?: IcpWalletFactory[];
  balance?: boolean;
}

export const IcpWeb3ConfigProvider: FC<PropsWithChildren<IcpWeb3ConfigProviderProps>> = ({
  locale,
  chains = [Icp],
  wallets: walletFactories = [PlugWallet()],
  balance,
  children,
}) => {
  const [currentChain, setCurrentChain] = useState<IcpChain | undefined>(chains[0]);
  const [principal, setPrincipal] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  const availableWallets = useMemo(() => {
    return walletFactories.map((factory) => {
      const wallet = factory.create();
      return {
        name: wallet.name,
        remark: wallet.name,
        icon: wallet.icon,
        hasExtensionInstalled: async () => wallet.installed,
        hasWalletReady: async () => wallet.installed,
      };
    });
  }, [walletFactories]);

  const wallet = useMemo(() => {
    // 优先选择已安装的钱包，如果没有已安装的，则选择第一个
    const walletInstances = walletFactories.map((factory) => factory.create());
    const installedWallet = walletInstances.find((w) => w.installed);
    return installedWallet ?? walletInstances[0];
  }, [walletFactories]);

  const connect = async () => {
    setConnecting(true);
    try {
      await wallet.connect();
      const p = await wallet.getPrincipal();
      setPrincipal(p);
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = async () => {
    await wallet.disconnect();
    setPrincipal(null);
  };

  return (
    <AntDesignWeb3ConfigProvider
      locale={locale}
      chainAssets={[Icp]}
      availableWallets={availableWallets}
      balance={balance}
      currentChain={currentChain}
      onCurrentChainChange={(chain) => setCurrentChain(chain)}
      availableChains={chains}
      wallet={wallet}
      principal={principal}
      connecting={connecting}
      onConnect={connect}
      onDisconnect={disconnect}
    >
      {children}
    </AntDesignWeb3ConfigProvider>
  );
};
