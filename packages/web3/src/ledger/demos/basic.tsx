import React, { useEffect, useRef, useState } from 'react';
import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import {
  DeviceStatus,
  Ledger,
  LedgerExtendedPhase,
  LedgerWeb3ConfigProvider,
  useLedgerActions,
  useLedgerError,
  useLedgerUSBStatus,
  type LedgerAddressIndexModalProps,
  type LedgerConnectionPhase,
  type LedgerErrorEvent,
} from '@ant-design/web3-ledger';
import { MetaMask, WagmiWeb3ConfigProvider, WalletConnect } from '@ant-design/web3-wagmi';
import { Alert, App, Badge, Button, Card, InputNumber, Modal, Space, Tag, Typography } from 'antd';

const ledger = new Ledger();

/** phase 到 UI 提示的映射（由 useLedgerUSBStatus 驱动） */
const PHASE_PROMPTS: Partial<
  Record<LedgerConnectionPhase, { color: string; label: string; hint?: string }>
> = {
  [LedgerExtendedPhase.IDLE]: { color: 'default', label: 'Idle' },
  [LedgerExtendedPhase.DETECTING]: {
    color: 'processing',
    label: 'Detecting...',
    hint: '正在检测设备...',
  },
  [DeviceStatus.CONNECTED]: { color: 'success', label: 'Connected', hint: '已连接' },
  [DeviceStatus.NOT_CONNECTED]: { color: 'error', label: 'Disconnected', hint: '设备已断开' },
  [DeviceStatus.BUSY]: { color: 'processing', label: 'Busy', hint: '设备忙' },
  [LedgerExtendedPhase.NO_DEVICE]: {
    color: 'error',
    label: 'No Device',
    hint: '未检测到硬件设备，请插入 Ledger 设备',
  },
  [LedgerExtendedPhase.MULTIPLE_DEVICES]: {
    color: 'warning',
    label: 'Multiple Devices',
    hint: '请在上方弹窗中选择要连接的设备',
  },
  [DeviceStatus.LOCKED]: {
    color: 'warning',
    label: 'Device Locked',
    hint: '请解锁设备并打开 Ethereum App',
  },
  [LedgerExtendedPhase.APP_NOT_OPEN]: {
    color: 'warning',
    label: 'App Not Open',
    hint: '请在设备上打开 Ethereum App',
  },
  [LedgerExtendedPhase.SELECTING_ADDRESS]: {
    color: 'processing',
    label: 'Selecting Address',
    hint: '请在上方弹窗中选择地址序号',
  },
};

const DEFAULT_PHASE_PROMPT: { color: string; label: string; hint?: string } = {
  color: 'default',
  label: 'Idle',
};

/** 需要用户操作后可重试的 phase */
const RETRYABLE_PHASES: LedgerConnectionPhase[] = [
  LedgerExtendedPhase.NO_DEVICE,
  DeviceStatus.LOCKED,
  LedgerExtendedPhase.APP_NOT_OPEN,
];

/** 实时展示 phase 驱动的 USB 设备状态、提示和错误信息 */
const LedgerStatusPanel: React.FC = () => {
  const usbStatus = useLedgerUSBStatus();
  const { error, clearError } = useLedgerError();
  const { retryConnect } = useLedgerActions();
  const prevPhaseRef = useRef<LedgerConnectionPhase>(usbStatus.phase);
  const phaseInfo = PHASE_PROMPTS[usbStatus.phase] ?? DEFAULT_PHASE_PROMPT;
  const showRetry = RETRYABLE_PHASES.includes(usbStatus.phase);

  // 仅在用户点击连接后、因设备未解锁或 App 未打开而进入对应 phase 时做一次操作反馈（不随状态反复弹）
  useEffect(() => {
    const phase = usbStatus.phase;
    const prev = prevPhaseRef.current;
    prevPhaseRef.current = phase;
    if (prev !== LedgerExtendedPhase.DETECTING) return;
    if (phase === DeviceStatus.LOCKED) {
      console.warn('设备已锁定，请解锁设备并打开 Ethereum App 后点击「重试连接」');
    } else if (phase === LedgerExtendedPhase.APP_NOT_OPEN) {
      console.warn('请在 Ledger 上打开 Ethereum App，然后点击「重试连接」');
    }
  }, [usbStatus.phase]);

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
  const { message } = App.useApp();

  const { account } = useAccount();

  if (!account) return null;

  const handleSignMessage = async () => {
    try {
      const signature = await ledger.signMessage('Hello, Ant Design Web3!');
      message.success(`Signed! ${String(signature).slice(0, 20)}...`);
    } catch {
      // Error already captured by onError / useLedgerError
    }
  };

  const handleSignTransaction = async () => {
    try {
      // 构造一个简单的 EIP-1559 交易（RLP 编码）
      // 实际使用中应通过 ethers.js / viem 等库序列化交易
      // 这里用一个示例的原始交易字节来演示签名流程
      const tx = {
        to: '0x0000000000000000000000000000000000000000',
        value: '0x0',
        gasLimit: '0x5208',
        maxFeePerGas: '0x2540BE400',
        maxPriorityFeePerGas: '0x3B9ACA00',
        nonce: '0x0',
        chainId: '0x1',
        type: '0x2',
      };

      if (ledger.connectType === 'WalletConnect') {
        // WalletConnect 模式：直接传交易对象
        const signature = await ledger.signTransaction(tx);
        message.success(`Transaction signed (WC)! ${String(signature).slice(0, 20)}...`);
      } else {
        // USB 模式：需要传 RLP 编码的 Uint8Array
        // 以下为 EIP-1559 交易的简化 RLP 编码示例（仅用于演示）
        // 生产环境请使用 ethers.Transaction.from(tx).unsignedSerialized
        message.info(
          'USB mode requires RLP-encoded Uint8Array. Use ethers.js or viem to serialize the transaction.',
        );
      }
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
      message.success(`Typed data signed! ${String(signature).slice(0, 20)}...`);
    } catch {
      // Error already captured by onError / useLedgerError
    }
  };

  return (
    <Card title="Account Actions" size="small">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Typography.Text>
          Address: {account.address.slice(0, 10)}...{account.address.slice(-8)}
        </Typography.Text>
        <Typography.Text type="secondary">Path: {ledger.derivationPath}</Typography.Text>
        <Space>
          <Button type="primary" onClick={handleSignMessage}>
            Sign Message
          </Button>
          <Button type="primary" onClick={handleSignTransaction}>
            Sign Transaction
          </Button>
          <Button type="primary" onClick={handleSignTypedData}>
            Sign EIP-712 Typed Data
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

const LedgerDemo: React.FC = () => {
  const projectId = 'c07c0051c2055890eade3556618e38a6';
  const { message } = App.useApp();

  const handleError = (event: LedgerErrorEvent) => {
    console.error(`[Ledger ${event.phase}]`, event.code, event.message);
    message.error(`[${event.phase}] ${event.message}`);
  };

  return (
    <WagmiWeb3ConfigProvider
      eip6963={{ autoAddInjectedWallets: true }}
      wallets={[MetaMask(), WalletConnect()]}
      walletConnect={{ projectId }}
    >
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

export default LedgerDemo;
