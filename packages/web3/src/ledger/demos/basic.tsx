import React from 'react';
import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { Ledger, LedgerWeb3ConfigProvider } from '@ant-design/web3-ledger';
import { Button, message, Space } from 'antd';

// Create a Ledger instance to access signing methods
const ledger = new Ledger();

const SignButtons: React.FC = () => {
  const { account } = useAccount();
  const [messageApi, contextHolder] = message.useMessage();

  if (!account) {
    return null;
  }

  const handleSignMessage = async () => {
    try {
      const messageToSign = 'Hello, Ant Design Web3!';
      const signature = await ledger.signMessage(messageToSign);
      messageApi.success(`Message signed successfully! Signature: ${signature}`);
      console.log('Message signature:', signature);
    } catch (error: any) {
      messageApi.error(`Failed to sign message: ${error?.message || error}`);
      console.error('Sign message error:', error);
    }
  };

  const handleSignTypedData = async () => {
    try {
      // EIP-712 typed data example
      const typedData = {
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
          ],
          Person: [
            { name: 'name', type: 'string' },
            { name: 'wallet', type: 'address' },
          ],
          Mail: [
            { name: 'from', type: 'Person' },
            { name: 'to', type: 'Person' },
            { name: 'contents', type: 'string' },
          ],
        },
        primaryType: 'Mail',
        domain: {
          name: 'Ether Mail',
          version: '1',
          chainId: 1,
          verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        },
        message: {
          from: {
            name: 'Cow',
            wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
          },
          to: {
            name: 'Bob',
            wallet: account.address,
          },
          contents: 'Hello, Bob!',
        },
      };

      const signature = await ledger.signTypedData(typedData);
      messageApi.success(`Typed data signed successfully! Signature: ${signature}`);
      console.log('Typed data signature:', signature);
    } catch (error: any) {
      messageApi.error(`Failed to sign typed data: ${error?.message || error}`);
      console.error('Sign typed data error:', error);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {contextHolder}
      <Button type="primary" onClick={handleSignMessage}>
        Sign Message
      </Button>
      <Button type="primary" onClick={handleSignTypedData}>
        Sign EIP-712 Typed Data
      </Button>
    </Space>
  );
};

const App: React.FC = () => {
  return (
    <LedgerWeb3ConfigProvider
      ledger={ledger}
      walletConnect={{
        projectId: 'c07c0051c2055890eade3556618e38a6',
      }}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Connector>
          <ConnectButton />
        </Connector>
        <SignButtons />
      </Space>
    </LedgerWeb3ConfigProvider>
  );
};

export default App;
