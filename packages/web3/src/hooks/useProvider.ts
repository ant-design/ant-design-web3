import React from 'react';
import { ConfigContext, type ConfigConsumerProps } from '@ant-design/web3-common';

export default function useProvider() {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  return context;
}
