import React from 'react';
import { Web3ConfigProvider, ConnectButton, Account } from '@ant-design/web3';

export default () => {
  const [accounts, setAccounts] = React.useState<Account[]>([]);
  return (
    <Web3ConfigProvider
      wallets={[
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
      requestAccounts={async () => {
        const accounts = [
          {
            address: '0x1234567890123456789012345678901234567890',
          },
        ];
        setAccounts(accounts);
        return accounts;
      }}
      accounts={accounts}
    >
      <ConnectButton />
    </Web3ConfigProvider>
  );
};
