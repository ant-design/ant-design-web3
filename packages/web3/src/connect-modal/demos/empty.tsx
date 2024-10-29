import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectModal } from '@ant-design/web3';
import { Button } from 'antd';

const App: React.FC<ConnectModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with simple
      </Button>
      <ConnectModal
        open={open}
        walletList={[]}
        onCancel={() => setOpen(false)}
        mode="simple"
        {...props}
      />
    </>
  );
};

export default App;
