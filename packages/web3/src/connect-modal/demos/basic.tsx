import React from 'react';
import { ConnectModal, type ConnectModalProps } from '@ant-design/web3';
import {
  metadata_MetaMask,
  metadata_MobileConnect,
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_TokenPocket,
  metadata_Trust,
  metadata_WalletConnect,
} from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
  metadata_MobileConnect,
  {
    ...metadata_WalletConnect,
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: 'Test Wallet3',
    remark: 'remark 3',
    app: {
      link: 'https://test.com/xxx',
    },
    getQrCode: () => {
      return new Promise<{
        uri: string;
      }>((resolve) =>
        setTimeout(
          () =>
            resolve({
              uri: `https://ant.design/docs/react/migrate-less-variables-cn#avatar-%E5%A4%B4%E5%83%8F?timestamp=${Date.now()}&random=${Math.random()}`,
            }),
          2000,
        ),
      );
    },
  },
  {
    icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
    name: 'Test Wallet3 Has a Long Name',
    remark: 'remark 3',
    app: {
      link: 'https://test.com/xxx',
    },
  },
  metadata_OkxWallet,
  metadata_Phantom,
  metadata_TokenPocket,
  metadata_Trust,
];
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC<ConnectModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with basic
      </Button>
      <ConnectModal
        open={open}
        group={{
          groupOrder,
        }}
        walletList={walletList}
        onCancel={() => setOpen(false)}
        {...props}
      />
    </>
  );
};

export default App;
