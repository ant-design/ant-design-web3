import React from 'react';
import type { UniversalWeb3ProviderInterface, Account, Wallet } from '../types';

export interface Web3ConfigProviderProps {
  provider: UniversalWeb3ProviderInterface;
  children?: React.ReactNode;
}

export interface ConfigConsumerProps {
  provider?: UniversalWeb3ProviderInterface;
  accounts?: Account[];
  wallets?: Wallet[];
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
