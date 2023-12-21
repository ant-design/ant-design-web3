import React from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton } from '@ant-design/web3';

const App: React.FC = () => {
  const mockAccount = { address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' };
  const [account, setAccount] = React.useState<Account | undefined>(mockAccount);
  return (
    <ConnectButton
      account={account}
      onConnectClick={() => {
        setAccount(mockAccount);
      }}
      onDisconnectClick={() => {
        setAccount(undefined);
      }}
    />
  );
};

export default App;
