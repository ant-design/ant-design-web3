import React from 'react';
import { Chain, type Token, type WalletMetadata } from '@ant-design/web3-common';

export type PayPanelProps = {
  amount: number | bigint;
  target: { [chainId: string]: { address: string } };
  supportedChains: Chain[];
  token: Token;
  wallets: WalletMetadata[];
  onFinish: () => void;
};

export const PayPanelContext = React.createContext<PayPanelProps>({
  amount: 0,
  target: {},
  supportedChains: [],
  token: {
    name: '',
    symbol: '',
    icon: '',
    decimal: 0,
    availableChains: [],
  },
  wallets: [],
  onFinish: () => {},
});
