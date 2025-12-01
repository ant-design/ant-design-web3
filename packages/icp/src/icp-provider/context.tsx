import React, { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

import { createInfinityWallet } from '../wallets/infinity';
import { createPlugWallet } from '../wallets/plug';
import type { IcpWallet, IcpWalletType } from '../wallets/types';

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
   * 指定使用哪个 ICP 钱包，默认 plug
   */
  walletType?: IcpWalletType;
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
  walletType = 'plug',
}) => {
  const [principal, setPrincipal] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  const wallet = useMemo<IcpWallet>(() => {
    if (walletType === 'infinity') {
      return createInfinityWallet();
    }
    return createPlugWallet();
  }, [walletType]);

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
