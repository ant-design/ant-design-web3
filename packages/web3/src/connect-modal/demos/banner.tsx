import React from 'react';
import { ConnectModal, Web3ConfigProvider } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_TokenPocket,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { Alert, Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
  metadata_WalletConnect,
  metadata_TokenPocket,
  metadata_Trust,
];

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Web3ConfigProvider
      theme={{
        web3Components: {
          ConnectModal: {
            walletListHeight: 436,
          },
        },
      }}
    >
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with custom banner
      </Button>
      <ConnectModal
        open={open}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        banner={
          <Alert
            message="Important Security Notice"
            description="Please make sure you're connecting to the official website. Never share your recovery phrase."
            type="warning"
            showIcon
            style={{ margin: '0 16px' }}
          />
        }
      />
    </Web3ConfigProvider>
  );
};

export default App;
