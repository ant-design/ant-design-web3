import React from 'react';
import { Connector } from '@ant-design/web3';
import { SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import { ConnectButton } from '@mysten/dapp-kit';

export default function App() {
  return (
    <SolanaWeb3ConfigProvider>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
}
