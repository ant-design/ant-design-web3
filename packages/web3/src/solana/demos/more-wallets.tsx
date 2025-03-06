import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  CoinbaseWallet,
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  SolflareWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      wallets={[CoinbaseWallet(), PhantomWallet(), SolflareWallet(), OKXWallet()]}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
