import React from 'react';
import { type Chain } from '@ant-design/web3-common';

interface PaymentProps {
  toAddress: string;
  number?: number;
  supportChains: Chain[];
  symbol?: string;
}
export const Payment: React.FC<React.PropsWithChildren<PaymentProps>> = (props) => {
  return <div></div>;
};
