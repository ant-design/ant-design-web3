import React from 'react';
import type { UniversalWeb3ProviderInterface, Account, Wallet } from '../types';

export interface Web3ConfigProviderProps extends UniversalWeb3ProviderInterface {
  accounts?: Account[];
  wallets?: Wallet[];
  children?: React.ReactNode;
}

export interface ConfigConsumerProps extends UniversalWeb3ProviderInterface {
  accounts?: Account[];
  wallets?: Wallet[];
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
