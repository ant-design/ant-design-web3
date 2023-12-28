import React from 'react';
import { ConfigContext, type Web3ConfigProviderProps, type ConfigConsumerProps } from './context';
import defaultLocale from '../locale/default';

const ProviderChildren: React.FC<ConfigConsumerProps & { children?: React.ReactNode }> = (
  props,
) => {
  const { children, ...rest } = props;
  return <ConfigContext.Provider value={rest}>{children}</ConfigContext.Provider>;
};

const Web3ConfigProvider: React.FC<Web3ConfigProviderProps> = (props) => {
  const { locale, ...restProps } = props;
  return <ProviderChildren {...restProps} defaultLocale={defaultLocale} locale={locale} />;
};

export { Web3ConfigProvider };

export * from './context';
