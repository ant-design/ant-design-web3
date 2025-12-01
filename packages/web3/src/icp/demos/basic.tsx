import React, { useEffect, useMemo, useState } from 'react';
import { ConnectButton, ConnectModal } from '@ant-design/web3';
import type { Wallet } from '@ant-design/web3';
import { ConnectStatus } from '@ant-design/web3-common';
import { IcpWeb3ConfigProvider, isPlugInstalled, useIcpWallet } from '@ant-design/web3-icp';
import { message, Modal } from 'antd';

type WalletType = 'plug';

type WalletMeta = {
  name: string;
  remark: string;
  group: string;
  color: string;
  checkInstalled?: () => Promise<boolean>;
};

const walletMetaMap: Record<WalletType, WalletMeta> = {
  plug: {
    name: 'Plug',
    remark: '浏览器扩展，适合日常使用',
    group: 'Popular',
    color: '#4f64ff',
    checkInstalled: async () => isPlugInstalled(),
  },
};

const WalletIcon: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <span
    style={{
      width: 28,
      height: 28,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: color,
      color: '#fff',
      fontWeight: 600,
    }}
  >
    {label}
  </span>
);

const walletList: Wallet[] = (Object.keys(walletMetaMap) as WalletType[]).map((type) => {
  const meta = walletMetaMap[type];
  return {
    key: type,
    name: meta.name,
    remark: meta.remark,
    icon: <WalletIcon color={meta.color} label={meta.name.slice(0, 1)} />,
    group: meta.group,
    hasExtensionInstalled: meta.checkInstalled
      ? async () => !!(await meta.checkInstalled?.())
      : undefined,
    hasWalletReady: meta.checkInstalled ? async () => !!(await meta.checkInstalled?.()) : undefined,
  };
});

interface IcpConnectButtonProps {
  walletType: WalletType;
  onSelectWallet: () => void;
  autoConnect: boolean;
  onAutoConnectConsumed: () => void;
}

const IcpConnectButton: React.FC<IcpConnectButtonProps> = ({
  walletType,
  onSelectWallet,
  autoConnect,
  onAutoConnectConsumed,
}) => {
  const { principal, connecting, connect, disconnect, installed } = useIcpWallet();
  const [messageApi, contextHolder] = message.useMessage();
  const walletName = walletMetaMap[walletType].name;

  const handleConnect = async () => {
    try {
      if (!installed) {
        Modal.info({
          title: `未检测到 ${walletName} 钱包`,
          content: (
            <>
              <p>当前浏览器环境未检测到 {walletName} 钱包扩展。</p>
              <p>请先安装该钱包并完成初始化，再刷新页面重试。</p>
            </>
          ),
          okText: '我知道了',
        });
        return;
      }
      await connect();
    } catch (error: any) {
      messageApi.error(error?.message ?? `连接 ${walletName} 钱包失败，请检查插件是否安装。`);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error: any) {
      messageApi.error(error?.message ?? `断开 ${walletName} 钱包失败，请重试。`);
    }
  };

  useEffect(() => {
    if (autoConnect) {
      void (async () => {
        await handleConnect();
        onAutoConnectConsumed();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoConnect, walletType]);

  return (
    <>
      {contextHolder}
      <ConnectButton
        loading={connecting}
        onConnectClick={() => {
          if (!principal) {
            onSelectWallet();
          }
        }}
        onDisconnectClick={() => {
          void handleDisconnect();
        }}
        account={
          principal
            ? {
                address: principal,
                name: walletName,
                status: ConnectStatus.Connected,
              }
            : undefined
        }
      />
    </>
  );
};

export default () => {
  const [walletType, setWalletType] = useState<WalletType>('plug');
  const [modalOpen, setModalOpen] = useState(false);
  const [autoConnect, setAutoConnect] = useState(false);

  const walletGroupOrder = useMemo(
    () => (a: string, b: string) => {
      if (a === 'Popular') return -1;
      if (b === 'Popular') return 1;
      return a.localeCompare(b);
    },
    [],
  );

  const handleWalletSelected = async (wallet: Wallet) => {
    const nextType = (wallet.key as WalletType) ?? 'plug';
    const meta = walletMetaMap[nextType];
    const installed = (await meta.checkInstalled?.()) ?? true;

    if (!installed) {
      Modal.info({
        title: `${meta.name} 未检测到浏览器插件`,
        content: (
          <>
            <p>请先在浏览器中安装 {meta.name} 钱包扩展或确保插件已启用。</p>
            <p>安装完成后刷新页面，再次选择该钱包即可连接。</p>
          </>
        ),
        okText: '我知道了',
      });
      return;
    }

    setWalletType(nextType);
    setModalOpen(false);
    setAutoConnect(true);
  };

  return (
    <IcpWeb3ConfigProvider walletType={walletType}>
      <IcpConnectButton
        walletType={walletType}
        onSelectWallet={() => setModalOpen(true)}
        autoConnect={autoConnect}
        onAutoConnectConsumed={() => setAutoConnect(false)}
      />

      <ConnectModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        walletList={walletList}
        group={{
          groupOrder: walletGroupOrder,
        }}
        onWalletSelected={(wallet) => {
          void handleWalletSelected(wallet);
        }}
      />
    </IcpWeb3ConfigProvider>
  );
};
