import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider autoAddRegistedWallets>
      <Connector modalProps={{ mode: 'simple' }}>
        <ConnectButton quickConnect />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
