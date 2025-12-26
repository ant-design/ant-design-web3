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

  // Extract ignoreConfig and extendsContextFromParent from rest to avoid merging them
  const {
    ignoreConfig: _ignoreConfig,
    extendsContextFromParent: _extendsContextFromParent,
    ...configProps
  } = rest as any;

  Object.keys(configProps).forEach((key) => {
    const typedKey = key as keyof typeof configProps;
    if (configProps[typedKey] !== undefined) {
      (config as any)[typedKey] = configProps[typedKey];
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
