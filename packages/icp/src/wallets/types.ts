import type React from 'react';

export interface IcpWallet {
  id: string;
  name: string;
  icon: React.ReactNode | null;
  readonly installed: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: () => Promise<boolean>;
  getPrincipal: () => Promise<string | null>;
}

export type IcpWalletType = 'plug' | 'infinity';
