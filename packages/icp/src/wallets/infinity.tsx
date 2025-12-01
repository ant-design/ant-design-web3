import type React from 'react';

import type { IcpWallet } from './types';

// NOTE: 这里假设 Infinity 钱包通过 window.ic.infinityWallet 注入，
// 具体字段请根据官方文档调整。
declare global {
  interface Window {
    ic?: {
      infinityWallet?: {
        isConnected: () => Promise<boolean>;
        requestConnect: (opts?: unknown) => Promise<{ principalId: string }>;
        disconnect: () => Promise<void>;
        getPrincipal: () => Promise<{ toText: () => string }>;
      };
    };
  }
}

const getInfinity = () =>
  typeof window === 'undefined' || typeof window.ic === 'undefined'
    ? undefined
    : window.ic.infinityWallet;

export const isInfinityInstalled = () => !!getInfinity();

export function createInfinityWallet(): IcpWallet {
  const getInstalled = () => isInfinityInstalled();

  return {
    id: 'infinity',
    name: 'Infinity',
    icon: null as React.ReactNode | null,

    get installed() {
      return getInstalled();
    },

    async connect() {
      const wallet = getInfinity();
      if (!wallet) {
        return;
      }
      await wallet.requestConnect();
    },

    async disconnect() {
      const wallet = getInfinity();
      if (!wallet) {
        return;
      }
      await wallet.disconnect();
    },

    async isConnected() {
      const wallet = getInfinity();
      if (!wallet) {
        return false;
      }
      return wallet.isConnected();
    },

    async getPrincipal() {
      const wallet = getInfinity();
      if (!wallet) {
        return null;
      }
      try {
        const principal = await wallet.getPrincipal();
        return principal.toText();
      } catch {
        return null;
      }
    },
  };
}
