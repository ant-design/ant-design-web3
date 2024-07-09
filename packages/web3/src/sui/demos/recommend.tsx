import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider balance autoConnect queryClient={queryClient}>
      <Connector>
        <ConnectButton />
      </Connector>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
