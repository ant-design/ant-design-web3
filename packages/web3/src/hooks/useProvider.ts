import React from 'react';
import {
  ConfigContext,
  type ConfigConsumerProps,
  type UniversalWeb3ProviderInterface,
} from '@ant-design/web3-common';

export default function useProvider(props?: UniversalWeb3ProviderInterface) {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  return {
    context,
    // Prioritize the use of user-defined props
    ...props,
  };
}
