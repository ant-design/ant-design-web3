/* v8 ignore start */
import React from 'react';
import { type Chain, type Token, type WalletMetadata } from '@ant-design/web3-common';

type ChainId = string | number;
type PayPanelTargetProps = Record<ChainId, string>;

export type PayPanelProps = {
  amount: number | bigint;
  target: PayPanelTargetProps | (() => Promise<PayPanelTargetProps>);
  supportedChains: { chain: Chain; extra?: React.ReactNode }[];
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
