import React, { useMemo } from 'react';
import { merge } from 'lodash-es';

import defaultLocale from '../locale/default';
import { ConfigContext, type ConfigConsumerProps, type Web3ConfigProviderProps } from './context';

const ProviderChildren: React.FC<
  ConfigConsumerProps & {
    children?: React.ReactNode;
    parentContext?: ConfigConsumerProps;
    ignoreConfig?: boolean;
  }
> = (props) => {
  const { children, parentContext, ignoreConfig, ...rest } = props;

  // Calculate mergeLocale before conditional return to satisfy React Hooks rules
  const mergeLocale = useMemo(() => {
    if (parentContext?.locale && rest.locale) {
      return merge(parentContext.locale, rest.locale);
    }
    return undefined;
  }, [parentContext?.locale, rest.locale]);

  // If ignoreConfig is true, don't merge this provider's config, just pass through parent context
  if (ignoreConfig) {
    const passThroughConfig = parentContext
      ? { ...parentContext }
      : {
          defaultLocale: rest.defaultLocale,
        };
    return (
      <ConfigContext.Provider value={passThroughConfig as ConfigConsumerProps}>
        {children}
      </ConfigContext.Provider>
    );
  }

  // Normal merge logic when ignoreConfig is false or undefined
  const config = { ...parentContext };

  // Filter out ignoreConfig and extendsContextFromParent from rest to avoid merging them
  const skipKeys = ['ignoreConfig', 'extendsContextFromParent'];
  Object.keys(rest).forEach((key) => {
    // biome-ignore lint/suspicious/noExplicitAny: skip keys need to check string
    if (skipKeys.includes(key as any)) {
      return;
    }
    const typedKey = key as keyof typeof rest;
    if (rest[typedKey] !== undefined) {
      (config as any)[typedKey] = rest[typedKey];
    }
  });

  config.locale = mergeLocale ?? config.locale;

  return (
    <ConfigContext.Provider value={config as ConfigConsumerProps}>
      {children}
    </ConfigContext.Provider>
  );
};

const Web3ConfigProvider: React.FC<Web3ConfigProviderProps> = (props) => {
  const { extendsContextFromParent = true, ignoreConfig, ...restProps } = props;
  const parentContext = React.useContext(ConfigContext);
  const context = extendsContextFromParent ? parentContext : undefined;

  return (
    <ProviderChildren
      {...restProps}
      defaultLocale={defaultLocale}
      parentContext={context}
      extendsContextFromParent={extendsContextFromParent}
      ignoreConfig={ignoreConfig}
    />
  );
};

export { Web3ConfigProvider, type Web3ConfigProviderProps };

export * from './context';
