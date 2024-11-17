import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import {
  OKXWallet,
  PhantomWallet,
  SolanaWeb3ConfigProvider,
  WalletConnectWallet,
} from '@ant-design/web3-solana';

const rpcProvider = () => `https://api.zan.top/node/v1/solana/mainnet/${YOUR_ZAN_API_KEY}`;

const App: React.FC = () => {
  return (
    <SolanaWeb3ConfigProvider
      autoAddRegisteredWallets
      balance
      rpcProvider={rpcProvider}
      wallets={[PhantomWallet(), OKXWallet(), WalletConnectWallet()]}
      walletConnect={{ projectId: YOUR_WALLET_CONNECT_PROJECT_ID }}
    >
      <Connector modalProps={{ mode: 'simple', group: false }}>
        <ConnectButton quickConnect />
      </Connector>
    </SolanaWeb3ConfigProvider>
  );
};

export default App;
