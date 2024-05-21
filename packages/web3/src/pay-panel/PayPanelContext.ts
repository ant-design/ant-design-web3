import React from 'react';
import { Chain, type TokenConfig, type WalletMetadata } from '@ant-design/web3-common';

export type PayPanelProps = {
  amount: number | bigint;
  target: { [chainId: string]: { address: string; chain: Chain } };
  token: TokenConfig;
  wallets: WalletMetadata[];
  onFinish: () => void;
};

export const PayPanelContext = React.createContext<PayPanelProps>({
  amount: 0,
  target: {},
  token: {
    name: '',
    symbol: '',
    icon: '',
    decimal: 0,
    channels: [],
  },
  wallets: [],
  onFinish: () => {},
});
