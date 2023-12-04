import React from 'react';
import type { Account } from '@ant-design/web3';
import { Connector, ConnectButton } from '@ant-design/web3';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WagmiWeb3ConfigProvider } from '@ant-design/web3-wagmi';

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account>();
  const { publicClient, chains } = configureChains([mainnet, polygon], [publicProvider()]);

  const config = createConfig({
    autoConnect: true,
    publicClient,
    connectors: [
      new MetaMaskConnector({
        chains,
      }),
      new WalletConnectConnector({
        chains,
        options: {
          showQrModal: false,
          projectId: YOUR_WALLET_CONNET_PROJECT_ID,
        },
      }),
    ],
  });

  return (
    <WagmiWeb3ConfigProvider config={config} availableChains={chains}>
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
        onChainSwitched={(chain) => {
          console.log('onChainSwitched', chain);
        }}
      >
        <ConnectButton />
      </Connector>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
