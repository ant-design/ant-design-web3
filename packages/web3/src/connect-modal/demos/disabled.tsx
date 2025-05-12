import React, { useState } from 'react';
import { ConnectModal } from '@ant-design/web3';
import { metadata_MetaMask, metadata_WalletConnect } from '@ant-design/web3-assets';
import { Button, Flex, Switch } from 'antd';

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
];

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <Flex gap="small" align="center" style={{ marginBottom: 16 }}>
        <span>Disabled:</span>
        <Switch checked={disabled} onChange={(checked) => setDisabled(checked)} />
      </Flex>
      <Button onClick={() => setOpen(true)}>Connect Wallet</Button>
      <ConnectModal
        open={open}
        onCancel={() => setOpen(false)}
        walletList={walletList}
        disabled={disabled}
        onWalletSelected={(wallet) => {
          console.log('Selected wallet:', wallet);
        }}
      />
    </div>
  );
};

export default App;
