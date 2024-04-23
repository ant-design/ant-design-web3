import React from 'react';
import { type Chain } from '@ant-design/web3-common';
import { EthereumWallet } from 'packages/wagmi/src';

interface PaymentProps {
  amount?: number;
  supportChains: { [chainSymbol: string]: { info: Chain; toAddress: string } };
  supportWallets: EthereumWallet[];
  symbol?: string;
}
export const Payment: React.FC<React.PropsWithChildren<PaymentProps>> = (props) => {
  // 根据支持的链，过滤支持的钱包
  // const supportedWallets = useMemo(() => {
  //   return Object.keys(wallets)
  //     .filter(key => wallets[key].supportedChains.includes(chain));
  // }, [chain]);

  return <div></div>;
};
