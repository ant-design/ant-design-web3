import React from 'react';
import type { RequiredLocale, Locale, UniversalWeb3ProviderInterface } from '../types';
import defaultLocale from '../locale/default';

export interface Web3ConfigProviderProps extends UniversalWeb3ProviderInterface {
  children?: React.ReactNode;
  locale?: Locale;
}

export interface ConfigConsumerProps extends UniversalWeb3ProviderInterface {
  locale?: Locale;
  defaultLocale: RequiredLocale;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  defaultLocale,
});
