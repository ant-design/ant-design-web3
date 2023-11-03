import React from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';

export interface WagmiWeb3ConfigProviderProps {
  children?: React.ReactNode;
}

export const WagmiWeb3ConfigProvider: React.FC<WagmiWeb3ConfigProviderProps> = (props) => {
  const { children } = props;

  return <Web3ConfigProvider>{children}</Web3ConfigProvider>;
};
