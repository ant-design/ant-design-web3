import React from 'react';
import {
  ConfigContext,
  type ConfigConsumerProps,
  type UniversalWeb3ProviderInterface,
} from '@ant-design/web3-common';

function mergeObjects<T>(a: T, b?: T): T {
  const result: T = { ...a };
  if (b) {
    for (const key in b as T) {
      if (b && b[key] !== undefined) {
        result[key] = b[key];
      }
    }
  }
  return result;
}

export default function useProvider(props?: UniversalWeb3ProviderInterface) {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  return mergeObjects<UniversalWeb3ProviderInterface>(context, props);
}
