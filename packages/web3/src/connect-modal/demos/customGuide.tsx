import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button } from 'antd';

import type { DefaultGuide, Wallet } from '../interface';

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
const guide: DefaultGuide = {
  title: 'What is a Wallet?',
  infos: [
    {
      title: 'A Home for your Digital Assets',
      description:
        'Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
    },
    {
      title: 'A New Way to Log In',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In2',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
    {
      title: 'A New Way to Log In3',
      description:
        'Instead of creating new accounts and passwords on every website, just connect your wallet.',
      icon: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
    },
  ],
  moreLink: 'https://test.com/xxx',
};

const App: React.FC = () => {
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
        guide={guide}
      />
    </>
  );
};

export default App;
