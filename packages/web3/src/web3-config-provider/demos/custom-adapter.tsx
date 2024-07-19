import React from 'react';
import { useProvider, Web3ConfigProvider, type Account } from '@ant-design/web3';
import { Button } from 'antd';

const ConnectTrigger: React.FC = () => {
  const { connect, account, disconnect } = useProvider();
  return (
    <Button
      onClick={() => {
        if (!account) {
          connect?.();
        } else {
          disconnect?.();
        }
      }}
    >
      {account ? account.address : 'Connect'}
    </Button>
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
      connect={async () => {
        const newAccount = {
          address: '0x1234567890123456789012345678901234567890',
        };
        setAccount(newAccount);
        console.log('newAccount', newAccount);
      }}
      disconnect={async () => {
        setAccount(undefined);
      }}
      account={account}
    >
      <ConnectTrigger />
    </Web3ConfigProvider>
  );
};

export default App;
