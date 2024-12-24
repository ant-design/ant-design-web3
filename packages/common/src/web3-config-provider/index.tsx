import React, { useMemo } from 'react';
import { merge } from 'lodash-es';

import defaultLocale from '../locale/default';
import { ConfigContext, type ConfigConsumerProps, type Web3ConfigProviderProps } from './context';

const ProviderChildren: React.FC<
  ConfigConsumerProps & { children?: React.ReactNode; parentContext?: ConfigConsumerProps }
> = (props) => {
  const { children, parentContext, ...rest } = props;
  const config = { ...parentContext };

  Object.keys(rest).forEach((key) => {
    const typedKey = key as keyof typeof rest;
    if (rest[typedKey] !== undefined) {
      (config as any)[typedKey] = rest[typedKey];
    }
  });

  const mergeLocale = useMemo(() => {
    if (parentContext?.locale && rest.locale) {
      return merge(parentContext.locale, rest.locale);
    }
    return undefined;
  }, [parentContext?.locale, rest.locale]);

  config.locale = mergeLocale ?? config.locale;

  return (
    <ConfigContext.Provider value={config as ConfigConsumerProps}>
      {children}
    </ConfigContext.Provider>
  );
};

const Web3ConfigProvider: React.FC<Web3ConfigProviderProps> = (props) => {
  const { extendsContextFromParent = true, ...restProps } = props;
  const parentContext = React.useContext(ConfigContext);
  const context = extendsContextFromParent ? parentContext : undefined;

  return (
    <ProviderChildren
      {...restProps}
      defaultLocale={defaultLocale}
      parentContext={context}
      extendsContextFromParent={extendsContextFromParent}
    />
  );
};

export { Web3ConfigProvider };

export * from './context';
