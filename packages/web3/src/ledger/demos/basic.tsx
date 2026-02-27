import React, { useState } from 'react';
import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import {
  Ledger,
  LedgerWeb3ConfigProvider,
  type LedgerAddressIndexModalProps,
} from '@ant-design/web3-ledger';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { Button, InputNumber, message, Modal, Space, Typography } from 'antd';

// Create a Ledger instance to access signing methods
const ledger = new Ledger();

/** 自定义「选择地址序号」弹窗示例：可传入 LedgerWeb3ConfigProvider 的 addressIndexModal */
const CustomAddressIndexModal: React.FC<LedgerAddressIndexModalProps> = ({
  open,
  ledger: ledgerInstance,
  onConfirm,
  onCancel,
}) => {
  const [index, setIndex] = useState(0);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (!open) return;
    setLoading(true);
    ledgerInstance
      .getAddressAtIndex(String(index))
      .then(setAddress)
      .catch(() => setAddress(''))
      .finally(() => setLoading(false));
  }, [open, index, ledgerInstance]);

  React.useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  if (!open) return null;

  return (
    <Modal
      title="选择 Ledger 地址"
      open={open}
      onCancel={onCancel}
      onOk={() => onConfirm(String(index))}
      okText="确认"
      cancelText="取消"
      destroyOnHidden
      maskClosable={false}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">钱包地址索引（第几个地址）：</Typography.Text>
        <InputNumber value={index} onChange={(v) => setIndex(v ?? 0)} style={{ width: '100%' }} />
        <Typography.Text type="secondary">当前地址：</Typography.Text>
        <Typography.Text code copyable>
          {loading ? '加载中...' : address || '-'}
        </Typography.Text>
      </Space>
    </Modal>
  );
};

const AccountSelector: React.FC = () => {
  const { account } = useAccount();
  const [messageApi, contextHolder] = message.useMessage();
  const [accountIndex, setAccountIndex] = useState<number>(0);

  if (!account) {
    return null;
  }

  const handleSignMessage = async () => {
    try {
      const signature = await ledger.signMessage('Hello, Ant Design Web3!');
      messageApi.success(`Signed! ${String(signature).slice(0, 20)}...`);
    } catch (error: any) {
      messageApi.error(`Sign failed: ${error?.message || error}`);
    }
  };

  const handleSignTypedData = async () => {
    try {
      // 格式需符合 @ledgerhq/device-signer-kit-ethereum 的 TypedData：domain.chainId 为 number
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
          from: { name: 'Cow', wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826' },
          to: { name: 'Bob', wallet: account.address },
          contents: 'Hello, Bob!',
        },
      };
      const signature = await ledger.signTypedData(typedData);
      messageApi.success(`Typed data signed! ${String(signature).slice(0, 20)}...`);
    } catch (error: any) {
      // 便于排查「无法唤起设备」：若为解析/SDK 错误会在此打出
      console.error('[handleSignTypedData]', error);
      messageApi.error(`Sign failed: ${error?.message || error}`);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {contextHolder}

      <Typography.Text>
        Current: {account.address.slice(0, 10)}...{account.address.slice(-8)}
      </Typography.Text>
      <Typography.Text type="secondary">Path: {ledger.derivationPath}</Typography.Text>

      {/* Switch account by index */}
      <Space>
        <InputNumber
          min={0}
          value={accountIndex}
          onChange={(val) => setAccountIndex(val ?? 0)}
          placeholder="Account index"
          style={{ width: 160 }}
          addonBefore="Index"
        />
      </Space>

      {/* Sign actions */}
      <Space>
        <Button type="primary" onClick={handleSignMessage}>
          Sign Message
        </Button>
        <Button type="primary" onClick={handleSignTypedData}>
          Sign EIP-712 Typed Data
        </Button>
      </Space>
    </Space>
  );
};

const App: React.FC = () => {
  const projectId = 'c07c0051c2055890eade3556618e38a6';
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      wallets={[MetaMask(), WalletConnect()]}
      walletConnect={{ projectId }}
    >
      {/* Ledger USB 连接后会先关闭 ConnectModal，再弹出「选择地址序号」弹窗；此处传入自定义弹窗，不传则使用默认。 */}
      <LedgerWeb3ConfigProvider
        ledger={ledger}
        autoConnect={true}
        walletConnect={{ projectId, name: 'Ledger' }}
        addressIndexModal={CustomAddressIndexModal}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Connector>
            <ConnectButton />
          </Connector>
          <AccountSelector />
        </Space>
      </LedgerWeb3ConfigProvider>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
