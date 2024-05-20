import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  SolflareSnapWallet,
  WalletConnectWallet,
} from '@ant-design/web3-solana';

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoAddRegisteredWallets
      balance
      wallets={[PhantomWallet(), OKXWallet(), WalletConnectWallet(), SolflareSnapWallet()]}
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
    >
      <Connector modalProps={{ mode: 'simple', group: false }}>
        <ConnectButton quickConnect />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
