import React from 'react';
import type { UniversalWeb3ProviderInterface, Account } from '../types';

export interface Web3ConfigProviderProps {
  provider: UniversalWeb3ProviderInterface;
  children?: React.ReactNode;
}

export interface ConfigConsumerProps {
  provider?: UniversalWeb3ProviderInterface;
  accounts?: Account[];
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
