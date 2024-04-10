import React from 'react';
import type { Account, ConnectorTriggerProps } from '@ant-design/web3';
import { Connector } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Typography } from 'antd';

const CustomTrigger: React.FC<ConnectorTriggerProps> = (props) => {
  const { loading, onConnectClick, account } = props;
  return (
    <Typography.Title level={5} onClick={() => onConnectClick?.()}>
      {loading ? 'Connecting...' : account?.address || 'Connect Your Wallet'}
    </Typography.Title>
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Connector
      availableWallets={[metadata_MetaMask, metadata_WalletConnect]}
      connect={async () =>
        new Promise((resolve) => {
          setTimeout(() => {
            const newAccount = {
              address: '0x1234567890123456789012345678901234567890',
            };
            setAccount(newAccount);
            resolve();
          }, 2000);
        })
      }
      account={account}
      onConnect={() => {
        console.log('onConnect');
      }}
      onDisconnect={() => {
        console.log('onDisconnect');
      }}
      onConnected={() => {
        console.log('onConnected');
      }}
      onDisconnected={() => {
        console.log('onDisconnected');
      }}
    >
      <CustomTrigger />
    </Connector>
  );
};

export default App;
