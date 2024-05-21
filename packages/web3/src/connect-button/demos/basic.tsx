import React from 'react';
import type { Account } from '@ant-design/web3';
import { ConnectButton, useProvider, Web3ConfigProvider } from '@ant-design/web3';

import { metadata_MetaMask, metadata_WalletConnect } from '/packages/assets/src';

const CustomConnector = () => {
  const { connect, account, disconnect, availableWallets } = useProvider();

  return (
    <ConnectButton
      className="custom-btn"
      account={account}
      availableWallets={availableWallets}
      quickConnect
      onConnectClick={(wallet) => {
        // onClickCallFn(wallet);
        connect?.();
      }}
      onDisconnectClick={() => {
        disconnect?.();
      }}
    />
  );
};

const App: React.FC = () => {
  const [account, setAccount] = React.useState<Account | undefined>();

  const wallets = [
    {
      ...metadata_WalletConnect,
      getQrCode: async () => {
        return {
          uri: 'http://example.com',
        };
      },
    },
    {
      ...metadata_MetaMask,
      hasExtensionInstalled: async () => true,
      getQrCode: async () => {
        return {
          uri: 'http://example.com',
        };
      },
    },
  ];

  return (
    <Web3ConfigProvider
      availableWallets={wallets}
      connect={async () => {
        const newAccount = {
          address: '0x1234567890123456789012345678901234567890',
        };
        setAccount(newAccount);
      }}
      disconnect={async () => {
        setAccount(undefined);
      }}
      account={account}
    >
      <CustomConnector />
    </Web3ConfigProvider>
  );
};

export default App;
