import React from 'react';
import { ConfigContext, ConfigConsumerProps } from '../Web3ConfigProvider/context';

export default function useProvider() {
  const context = React.useContext<ConfigConsumerProps>(ConfigContext);
  return context;
}
