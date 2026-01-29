import React from 'react';

import defaultLocale from '../locale/default';
import type { Locale, RequiredLocale, UniversalWeb3ProviderInterface } from '../types';

export interface Web3ConfigProviderProps extends UniversalWeb3ProviderInterface {
  children?: React.ReactNode;
  locale?: Locale;
  /**
   * If true, this provider's configuration will be ignored when merging with parent context.
   * This is useful when you have multiple chain providers and want to switch between them
   * without causing page flickering. Only the active provider should not have this flag set.
   */
  ignoreConfig?: boolean;
}

export interface ConfigConsumerProps extends UniversalWeb3ProviderInterface {
  locale?: Locale;
  defaultLocale: RequiredLocale;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  defaultLocale,
});
