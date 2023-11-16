import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import type { Wallet } from '@ant-design/web3-common';
import { message } from 'antd';
import type { ConnectorProps } from './interface';
import useProvider from '../hooks/useProvider';
import useWallets from '../hooks/useWallets';

export const Connector: React.FC<ConnectorProps> = (props) => {
  const { children, modalProps, onConnect, onConnected, onDisconnect, onDisconnected } = props;
  const { requestAccounts, disconnect, accounts } = useProvider(props);
  const currentAccount = accounts?.[0];
  const { wallets } = useWallets();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const connect = async (wallet?: Wallet) => {
    onConnect?.();
    try {
      setLoading(true);
      const as = await requestAccounts?.(wallet?.name);
      setOpen(false);
      onConnected?.(as);
    } catch (e: any) {
      messageApi.error(e.message);
      console.error(e);
    }
  };

  return (
    <>
      {contextHolder}
      {React.cloneElement(children as React.ReactElement, {
        address: currentAccount?.address,
        connected: !!currentAccount,
        loading,
        onConnectClicked: () => {
          if (wallets.length <= 1) {
            connect(wallets[0]);
          } else {
            setOpen(true);
          }
        },
        onDisconnectClicked: async () => {
          onDisconnect?.();
          await disconnect?.();
          onDisconnected?.();
        },
      })}

      <ConnectModal
        open={open}
        walletList={wallets}
        onOpenChange={setOpen}
        onSelectWallet={async (wallet) => {
          if (!wallet.getQrCode) {
            // not need show qr code, hide immediately
            setOpen(false);
          }
        }}
        {...modalProps}
      />
    </>
  );
};
