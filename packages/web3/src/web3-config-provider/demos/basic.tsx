import React from 'react';
import { ConnectButton, Web3ConfigProvider, type Account } from '@ant-design/web3';

const App: React.FC = () => {
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
      connect={async () => {
        const newAccount = {
          address: '0x1234567890123456789012345678901234567890',
        };
        setAccount(newAccount);
      }}
      account={account}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};

export default App;
