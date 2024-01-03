import React from 'react';
import { useAccount, useConnection, Web3ConfigProvider, type Account } from '@ant-design/web3';
import { Button } from 'antd';

const Demo: React.FC = () => {
  const { account } = useAccount();
  const { connect, disconnect } = useConnection();
  return (
    <Button
      onClick={() => {
        if (account) {
          disconnect?.();
        } else {
          console.log('connect');
          connect?.();
        }
      }}
    >
      {account ? 'Disconnect' : 'Connect'}
    </Button>
  );
};

const App: React.FC = () => {
  const [testAccount, setTestAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
      account={testAccount}
      connect={async () => {
        console.log('connect call');
        setTestAccount({
          address: '0x1234567890123456789012345678901234567890',
        });
      }}
      disconnect={async () => {
        setTestAccount(undefined);
      }}
    >
      <Demo />
    </Web3ConfigProvider>
  );
};

export default App;
