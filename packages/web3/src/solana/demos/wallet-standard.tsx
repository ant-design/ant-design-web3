import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

export default function App() {
  return (
    <SolanaWeb3ConfigProvider autoAddRegisteredWallets>
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
}
