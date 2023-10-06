import React from 'react';

export interface Account {
  address: string;
}

export interface Web3ProviderInterface {
  getAccounts: () => Promise<Account[]>;
  getCurrentAccount: () => Promise<Account | undefined>;
  requestAccounts: () => Promise<Account[]>;
  getPlatform: () => 'Chrome' | 'Firefox' | 'Edge' | 'Safari' | (string & {});
  getQrCodeLink: () => Promise<string>;
}

export interface Web3ConfigProviderProps {
  provider: Web3ProviderInterface;
}

export interface ConfigConsumerProps {
  provider?: Web3ProviderInterface;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
