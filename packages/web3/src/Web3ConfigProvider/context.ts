import React from 'react';
import type { Web3ProviderInterface } from '@ant-design/web3-common';

export interface Web3ConfigProviderProps {
  provider: Web3ProviderInterface;
}

export interface ConfigConsumerProps {
  provider?: Web3ProviderInterface;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
