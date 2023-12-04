import React from 'react';
import type { Account, ConnectorTriggerProps } from '@ant-design/web3';
import { Connector } from '@ant-design/web3';
import { Typography } from 'antd';

const CustomTrigger: React.FC<ConnectorTriggerProps> = (props) => {
  const { loading, openConnectModal, account } = props;
  return (
    <Typography.Title level={2} onClick={() => openConnectModal?.()}>
      {loading ? 'Connecting...' : account?.address || 'Connect Your Wallet'}
    </Typography.Title>
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Connector
      availableWallets={[
        {
          name: 'MetaMask',
          remark: 'Easy-to-use browser extension.',
          extensions: [
            {
              key: 'Chrome',
              browserIcon:
                'https://github.com/ant-design/ant-design/assets/10286961/0d4e4ac7-8f89-4147-a06a-de72c02e85cb',
              browserName: 'Chrome',
              link: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
              description: 'Access your wallet right from your favorite web browser.',
            },
          ],
        },
      ]}
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
