import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { Slush, Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider balance autoConnect wallets={[Suiet(), Slush()]}>
      <Connector modalProps={{ mode: 'simple', group: false }}>
        <ConnectButton quickConnect />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
