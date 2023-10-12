import React from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { EthereumProvider } from './eip1193-provider';
import { UniversalProvider } from './universal-provider';

export interface Web3ProviderProps {
  provider: EthereumProvider;
  children?: React.ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = (props) => {
  const provider = new UniversalProvider(props.provider);
  return <Web3ConfigProvider provider={provider}>{props.children}</Web3ConfigProvider>;
};
