import React from 'react';
import type { UniversalWeb3ProviderInterface } from '../types';

export interface Web3ConfigProviderProps extends UniversalWeb3ProviderInterface {
  children?: React.ReactNode;
}

export interface ConfigConsumerProps extends UniversalWeb3ProviderInterface {}

export const ConfigContext = React.createContext<ConfigConsumerProps>({});
