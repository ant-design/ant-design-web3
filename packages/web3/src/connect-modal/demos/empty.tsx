import React from 'react';
import type { ConnectModalProps } from '@ant-design/web3';
import { ConnectModal } from '@ant-design/web3';
import { Button, Space } from 'antd';
import type { EmptyProps } from 'antd';

const App: React.FC<ConnectModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [emptyProps, setEmptyProps] = React.useState<EmptyProps>();

  return (
    <>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setEmptyProps(undefined);
            setOpen(true);
          }}
        >
          Open
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setEmptyProps({
              image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
              description: (
                <>
                  Not find Wallet,{' '}
                  <a href="https://www.tokenpocket.pro/" target="_blank" rel="noreferrer">
                    Get TokenPocket
                  </a>
                </>
              ),
            });
            setOpen(true);
          }}
        >
          Open with custom
        </Button>
      </Space>
      <ConnectModal
        open={open}
        walletList={[]}
        onCancel={() => setOpen(false)}
        mode="simple"
        emptyProps={emptyProps}
        {...props}
      />
    </>
  );
};

export default App;
