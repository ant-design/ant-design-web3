import React, { useState } from 'react';
import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import {
  Ledger,
  LedgerWeb3ConfigProvider,
  useLedgerActions,
  useLedgerError,
  useLedgerUSBStatus,
  type LedgerAddressIndexModalProps,
  type LedgerErrorEvent,
} from '@ant-design/web3-ledger';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import {
  Alert,
  Badge,
  Button,
  Card,
  InputNumber,
  message,
  Modal,
  Space,
  Tag,
  Typography,
} from 'antd';

const ledger = new Ledger();

/** phase 到 UI 提示的映射（由 useLedgerUSBStatus 驱动） */
const PHASE_PROMPTS: Record<string, { color: string; label: string; hint?: string }> = {
  idle: { color: 'default', label: 'Idle' },
  detecting: { color: 'processing', label: 'Detecting...', hint: '正在检测设备...' },
  connected: { color: 'success', label: 'Connected', hint: '已连接' },
  disconnected: { color: 'error', label: 'Disconnected', hint: '设备已断开' },
  no_device: {
    color: 'error',
    label: 'No Device',
    hint: '未检测到硬件设备，请插入 Ledger 设备',
  },
  multiple_devices: {
    color: 'warning',
    label: 'Multiple Devices',
    hint: '请在上方弹窗中选择要连接的设备',
  },
  device_locked: {
    color: 'warning',
    label: 'Device Locked',
    hint: '请解锁设备并打开 Ethereum App',
  },
  app_not_open: {
    color: 'warning',
    label: 'App Not Open',
    hint: '请在设备上打开 Ethereum App',
  },
  ready: { color: 'processing', label: 'Ready', hint: '设备就绪，请选择地址' },
  selecting_address: {
    color: 'processing',
    label: 'Selecting Address',
    hint: '请在上方弹窗中选择地址序号',
  },
};

/** 需要用户操作后可重试的 phase */
const RETRYABLE_PHASES = ['no_device', 'device_locked', 'app_not_open'];

/** 实时展示 phase 驱动的 USB 设备状态、提示和错误信息 */
const LedgerStatusPanel: React.FC = () => {
  const usbStatus = useLedgerUSBStatus();
  const { error, clearError } = useLedgerError();
  const { retryConnect } = useLedgerActions();
  const phaseInfo = PHASE_PROMPTS[usbStatus.phase] ?? PHASE_PROMPTS.idle;
  const showRetry = RETRYABLE_PHASES.includes(usbStatus.phase);

  return (
    <Card
      title={
        <Space>
          <span>Ledger Device Status</span>
          <Badge status={phaseInfo.color as any} text={phaseInfo.label} />
        </Space>
      }
      size="small"
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        {phaseInfo.hint && <Typography.Text type="secondary">{phaseInfo.hint}</Typography.Text>}
        {showRetry && (
          <Button size="small" onClick={() => retryConnect()}>
            重试连接
          </Button>
        )}
        <Space wrap>
          <Tag>Phase: {usbStatus.phase}</Tag>
          {usbStatus.currentApp && <Tag color="blue">App: {usbStatus.currentApp}</Tag>}
          {usbStatus.deviceModel && <Tag color="cyan">Model: {usbStatus.deviceModel}</Tag>}
          {usbStatus.sessionId && (
            <Tag color="geekblue">Session: {usbStatus.sessionId.slice(0, 8)}...</Tag>
          )}
        </Space>

        {error && (
          <Alert
            type="error"
            showIcon
            closable
            onClose={clearError}
            message={`[${error.phase}] ${error.code}`}
            description={error.message}
          />
        )}
      </Space>
    </Card>
  );
};

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
      title="Select Ledger Address"
      open={open}
      onCancel={onCancel}
      onOk={() => onConfirm(String(index))}
      okText="Confirm"
      cancelText="Cancel"
      destroyOnHidden
      maskClosable={false}
    >
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text type="secondary">Address index:</Typography.Text>
        <InputNumber value={index} onChange={(v) => setIndex(v ?? 0)} style={{ width: '100%' }} />
        <Typography.Text type="secondary">Address:</Typography.Text>
        <Typography.Text code copyable>
          {loading ? 'Loading...' : address || '-'}
        </Typography.Text>
      </Space>
    </Modal>
  );
};

const AccountActions: React.FC = () => {
  const { account } = useAccount();
  const [messageApi, contextHolder] = message.useMessage();

  if (!account) return null;

  const handleSignMessage = async () => {
    try {
      const signature = await ledger.signMessage('Hello, Ant Design Web3!');
      messageApi.success(`Signed! ${String(signature).slice(0, 20)}...`);
    } catch {
      // Error already captured by onError / useLedgerError
    }
  };

  const handleSignTypedData = async () => {
    try {
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
    } catch {
      // Error already captured by onError / useLedgerError
    }
  };

  return (
    <Card title="Account Actions" size="small">
      {contextHolder}
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text>
          Address: {account.address.slice(0, 10)}...{account.address.slice(-8)}
        </Typography.Text>
        <Typography.Text type="secondary">Path: {ledger.derivationPath}</Typography.Text>
        <Space>
          <Button type="primary" onClick={handleSignMessage}>
            Sign Message
          </Button>
          <Button type="primary" onClick={handleSignTypedData}>
            Sign EIP-712 Typed Data
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

const App: React.FC = () => {
  const projectId = 'c07c0051c2055890eade3556618e38a6';
  const [messageApi, contextHolder] = message.useMessage();

  const handleError = (event: LedgerErrorEvent) => {
    console.error(`[Ledger ${event.phase}]`, event.code, event.message);
    messageApi.error(`[${event.phase}] ${event.message}`);
  };

  return (
    <WagmiWeb3ConfigProvider
      eip6963={{ autoAddInjectedWallets: true }}
      wallets={[MetaMask(), WalletConnect()]}
      walletConnect={{ projectId }}
    >
      {contextHolder}
      <LedgerWeb3ConfigProvider
        ledger={ledger}
        autoConnect={true}
        walletConnect={{ projectId, name: 'Ledger' }}
        addressIndexModal={CustomAddressIndexModal}
        deviceSelectModal={true}
        onError={handleError}
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Connector
            modalProps={{ copyQrCodeLink: true, destroyOnHidden: true }}
            onConnectError={(e: any) => {
              console.log('isLedgerConnected', e);
            }}
          >
            <ConnectButton />
          </Connector>
          <LedgerStatusPanel />
          <AccountActions />
        </Space>
      </LedgerWeb3ConfigProvider>
    </WagmiWeb3ConfigProvider>
  );
};

export default App;
