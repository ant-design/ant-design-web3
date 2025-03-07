import React, { useState } from 'react';
import { useWallet } from '@ant-design/web3-tron';
import { Button } from 'antd';

type SignTransactionProps = {
  signMessageCallback?: (signMessageResult: string, address: string) => void;
};

export const SignMessage: React.FC<SignTransactionProps> = ({ signMessageCallback }) => {
  const { connected, signMessage, address } = useWallet();

  const [signLoading, setSignLoading] = useState<boolean>(false);

  const signTransfer = async () => {
    try {
      setSignLoading(true);
      // 签名
      const signature = await signMessage('sign transfer message');
      setSignLoading(false);
      signMessageCallback?.(signature, address || '');
    } catch (error) {
      setSignLoading(false);
    }
  };
  return (
    <Button
      type="primary"
      style={{ width: 200 }}
      loading={signLoading}
      disabled={!connected}
      onClick={() => {
        signTransfer();
      }}
    >
      Sign Message
    </Button>
  );
};
