import React, { useState } from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { PhantomWallet, SolanaWeb3ConfigProvider } from '@ant-design/web3-solana';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { Mainnet, MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { QueryClient } from '@tanstack/react-query';
import { Button, Space } from 'antd';
import { http } from 'wagmi';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [activeChain, setActiveChain] = useState<'ethereum' | 'sui' | 'solana'>('ethereum');

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space>
        <Button
          type={activeChain === 'ethereum' ? 'primary' : 'default'}
          onClick={() => setActiveChain('ethereum')}
        >
          Switch to Ethereum
        </Button>
        <Button
          type={activeChain === 'sui' ? 'primary' : 'default'}
          onClick={() => setActiveChain('sui')}
        >
          Switch to Sui
        </Button>
        <Button
          type={activeChain === 'solana' ? 'primary' : 'default'}
          onClick={() => setActiveChain('solana')}
        >
          Switch to Solana
        </Button>
      </Space>

      {/* Ethereum Provider - only active when activeChain is 'ethereum' */}
      <WagmiWeb3ConfigProvider
        ignoreConfig={activeChain !== 'ethereum'}
        eip6963={{
          autoAddInjectedWallets: true,
        }}
        ens
        chains={[Mainnet]}
        transports={{
          [Mainnet.id]: http(),
        }}
        walletConnect={{
          projectId: YOUR_WALLET_CONNECT_PROJECT_ID,
        }}
        wallets={[MetaMask(), WalletConnect()]}
        queryClient={queryClient}
      >
        {/* Sui Provider - only active when activeChain is 'sui' */}
        <SuiWeb3ConfigProvider
          ignoreConfig={activeChain !== 'sui'}
          balance
          autoConnect
          wallets={[Suiet()]}
        >
          {/* Solana Provider - only active when activeChain is 'solana' */}
          <SolanaWeb3ConfigProvider
            ignoreConfig={activeChain !== 'solana'}
            autoAddRegisteredWallets
            balance
            wallets={[PhantomWallet()]}
          >
            <Connector
              modalProps={{
                mode: 'simple',
              }}
            >
              <ConnectButton quickConnect />
            </Connector>
          </SolanaWeb3ConfigProvider>
        </SuiWeb3ConfigProvider>
      </WagmiWeb3ConfigProvider>
    </Space>
  );
};

export default App;
