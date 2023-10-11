import React from 'react';
import type { Web3ProviderInterface, Account } from '@ant-design/web3-common';

export interface Web3ConfigProviderProps {
  provider: Web3ProviderInterface;
  children?: React.ReactNode;
}

export interface ConfigConsumerProps {
  provider?: Web3ProviderInterface;
  accounts?: Account[];
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
