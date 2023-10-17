import React from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import { EthereumEIP1193LikeProvider, CreateProviderOptions } from './eip1193-provider';
import { UniversalProvider } from './universal-provider';

export interface Web3ProviderProps {
  provider: EthereumEIP1193LikeProvider;
  children?: React.ReactNode;
}

export const EthereumProvider: React.FC<Web3ProviderProps> = (props) => {
  const provider = new UniversalProvider(props.provider);
  return <Web3ConfigProvider provider={provider}>{props.children}</Web3ConfigProvider>;
};

export function createProvider(options: CreateProviderOptions): EthereumEIP1193LikeProvider {
  if (options?.chains?.length && options?.chains?.length > 1) {
    throw new Error('Not support multiple chains now.');
  }
  return new EthereumEIP1193LikeProvider(options);
}
