import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Card } from 'antd';

import type { Wallet } from '../interface';

const walletList: Wallet[] = [
  metadata_MetaMask,
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
];
const groupOrder = (a: string, b: string) => {
  if (a === 'Popular') return -1;
  if (b === 'Popular') return 1;
  return a.localeCompare(b);
};

const App: React.FC = () => {
  return (
    <Card
      style={{
        maxWidth: 797,
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <ConnectModal.ModalPanel
        group={{
          groupOrder,
        }}
        walletList={walletList}
      />
    </Card>
  );
};

// use for theme editor
export const SimpleApp: React.FC = () => {
  return (
    <Card
      style={{
        maxWidth: 400,
      }}
      styles={{
        body: {
          padding: 0,
        },
      }}
    >
      <ConnectModal.ModalPanel
        group={{
          groupOrder,
        }}
        mode="simple"
        walletList={walletList}
      />
    </Card>
  );
};

export default App;
