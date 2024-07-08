import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createNetworkConfig } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
const networkConfig = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  devnet: { url: getFullnodeUrl('devnet') },
  // testnet: { url: getFullnodeUrl('testnet') },
  testnet: { url: `https://api.zan.top/node/v1/sui/testnet/${YOUR_ZAN_API_KEY}` },
  mainnet: { url: getFullnodeUrl('mainnet') },
});

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider
      balance
      autoConnect
      networkConfig={networkConfig}
      defaultNetwork="mainnet"
      queryClient={queryClient}
    >
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
