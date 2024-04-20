import React from 'react';
import { type Chain } from '@ant-design/web3-common';
import { EthereumWallet } from 'packages/wagmi/src';

interface PaymentProps {
  toAddress: string;
  amount?: number;
  supportChains: Chain[];
  supportWallets: EthereumWallet[];
  symbol?: string;
}
export const Payment: React.FC<React.PropsWithChildren<PaymentProps>> = (props) => {
  return <div></div>;
};
