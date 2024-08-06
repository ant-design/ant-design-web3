import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { createNetworkConfig } from '@mysten/dapp-kit';

const { networkConfig } = createNetworkConfig({
  testnet: { url: `https://api.zan.top/node/v1/sui/testnet/${YOUR_ZAN_API_KEY}` },
  mainnet: { url: `https://api.zan.top/node/v1/sui/mainnet/${YOUR_ZAN_API_KEY}` },
});

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider wallets={[Suiet()]} balance networkConfig={networkConfig}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
