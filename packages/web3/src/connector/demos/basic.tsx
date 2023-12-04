import type { PropsWithChildren } from 'react';
import React from 'react';
import type { Account } from '@ant-design/web3';
import { Connector, ConnectButton, Web3ConfigProvider } from '@ant-design/web3';

const Provider: React.FC<PropsWithChildren> = (props) => {
  const [account, setAccount] = React.useState<Account>();
  return (
    <Web3ConfigProvider
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
    >
      {props.children}
    </Web3ConfigProvider>
  );
};

const App: React.FC = () => (
  <Provider>
    <Connector>
      <ConnectButton />
    </Connector>
  </Provider>
);

export default App;
