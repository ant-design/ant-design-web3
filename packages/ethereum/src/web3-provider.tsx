import React from 'react';
import { Web3ConfigProvider, EIP1193LikeProvider } from '@ant-design/web3-common';
import { UniversalProvider } from './universal-provider';

export interface Web3ProviderProps {
  provider: EIP1193LikeProvider;
  children?: React.ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = (props) => {
  const provider = new UniversalProvider(props.provider);
  return <Web3ConfigProvider provider={provider}>{props.children}</Web3ConfigProvider>;
};
