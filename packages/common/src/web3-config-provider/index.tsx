import React from 'react';
import { ConfigContext, Web3ConfigProviderProps, ConfigConsumerProps } from './context';

const ProviderChildren: React.FC<ConfigConsumerProps & { children?: React.ReactNode }> = (
  props,
) => {
  const { children, ...rest } = props;
  return <ConfigContext.Provider value={rest}>{children}</ConfigContext.Provider>;
};

const Web3ConfigProvider: React.FC<Web3ConfigProviderProps> = (props) => {
  return <ProviderChildren {...props} />;
};

export { Web3ConfigProvider };

export * from './context';
