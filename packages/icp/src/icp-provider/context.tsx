import React, { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

import { PlugWallet } from '../wallets/built-in';
import type { IcpWalletFactory } from '../wallets/factory';
import type { IcpWallet } from '../wallets/types';

const IcpContext = createContext<IcpContextValue | null>(null);

export interface IcpContextValue {
  wallet: IcpWallet;
  principal: string | null;
  connecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  installed: boolean;
}

export interface IcpWeb3ConfigProviderProps extends PropsWithChildren {
  /**
   * 指定使用的 ICP 钱包数组，默认使用 PlugWallet
   */
  wallets?: IcpWalletFactory[];
}

export const useIcpWallet = (): IcpContextValue => {
  const ctx = useContext(IcpContext);

  if (!ctx) {
    throw new Error('useIcpWallet must be used within IcpWeb3ConfigProvider');
  }

  return ctx;
};

export const IcpWeb3ConfigProvider: React.FC<IcpWeb3ConfigProviderProps> = ({
  children,
  wallets = [PlugWallet()],
}) => {
  const [principal, setPrincipal] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  const wallet = useMemo<IcpWallet>(() => {
    // 优先选择已安装的钱包，如果没有已安装的，则选择第一个
    const walletInstances = wallets.map((factory) => factory.create());
    const installedWallet = walletInstances.find((w) => w.installed);
    return installedWallet ?? walletInstances[0];
  }, [wallets]);

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

  const value: IcpContextValue = {
    wallet,
    principal,
    connecting,
    connect,
    disconnect,
    installed: wallet.installed,
  };

  return <IcpContext.Provider value={value}>{children}</IcpContext.Provider>;
};
