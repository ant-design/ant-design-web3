import React from 'react';
import type { Web3ProviderInterface } from '@ant-design/web3-common';
import { ConfigContext } from './context';

export interface Web3ConfigProviderProps {
  provider?: Web3ProviderInterface;
  children?: React.ReactNode;
}

const ProviderChildren: React.FC<Web3ConfigProviderProps> = (props) => {
  const { children, ...rest } = props;
  return <ConfigContext.Provider value={rest}>{children}</ConfigContext.Provider>;
};

const Web3ConfigProvider: React.FC<Web3ConfigProviderProps> = (props) => {
  return <ProviderChildren {...props} />;
};

export { Web3ConfigProvider };

export * from './context';
