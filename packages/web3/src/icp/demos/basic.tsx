import React from 'react';
import { ConnectButton, Connector } from '@ant-design/web3';
import { IcpWeb3ConfigProvider, PlugWallet } from '@ant-design/web3-icp';

const App: React.FC = () => {
  return (
    <IcpWeb3ConfigProvider wallets={[PlugWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </IcpWeb3ConfigProvider>
  );
};

export default App;
