import React from 'react';
import type { UniversalWeb3ProviderInterface } from '../types';
import { Locale, IntlType } from '../intl';

export interface Web3ConfigProviderProps extends UniversalWeb3ProviderInterface {
  children?: React.ReactNode;
  locale?: Locale;
}

export interface ConfigConsumerProps extends UniversalWeb3ProviderInterface {
  intl: IntlType;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  intl: {
    getMessage: (id: string, defaultMessage: string) => defaultMessage,
  },
});
