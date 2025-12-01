import type React from 'react';

import type { IcpWallet } from './types';

declare global {
  interface Window {
    ic?: {
      plug?: {
        isConnected: () => Promise<boolean>;
        requestConnect: (opts?: unknown) => Promise<{ principalId: string }>;
        disconnect: () => Promise<void>;
        getPrincipal: () => Promise<{ toText: () => string }>;
      };
    };
  }
}

const getPlug = () =>
  typeof window === 'undefined' || typeof window.ic === 'undefined' ? undefined : window.ic.plug;

export const isPlugInstalled = () => !!getPlug();

export function createPlugWallet(): IcpWallet {
  const getInstalled = () => isPlugInstalled();

  return {
    id: 'plug',
    name: 'Plug',
    icon: null,

    get installed() {
      return getInstalled();
    },

    async connect() {
      const plug = getPlug();
      if (!plug) {
        // 不抛异常，由上层根据 installed 提示安装钱包
        return;
      }
      await plug.requestConnect();
    },

    async disconnect() {
      const plug = getPlug();
      if (!plug) {
        return;
      }
      await plug.disconnect();
    },

    async isConnected() {
      const plug = getPlug();
      if (!plug) {
        return false;
      }
      return plug.isConnected();
    },

    async getPrincipal() {
      const plug = getPlug();
      if (!plug) {
        return null;
      }
      try {
        const principal = await plug.getPrincipal();
        return principal.toText();
      } catch {
        return null;
      }
    },
  };
}
