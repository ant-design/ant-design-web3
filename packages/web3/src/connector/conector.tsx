import React from 'react';
import { ConnectModal } from '@ant-design/web3';
import type { Wallet, ConnectorTriggerProps, ChainIds } from '@ant-design/web3-common';
import { message } from 'antd';
import type { ConnectorProps } from './interface';
import useProvider from '../hooks/useProvider';

export const Connector: React.FC<ConnectorProps> = (props) => {
  const {
    children,
    modalProps,
    onConnect,
    onConnected,
    onDisconnect,
    onDisconnected,
    onChainSwitched,
  } = props;
  const { wallets, requestAccounts, disconnect, accounts, chains, currentChain, switchChain } =
    useProvider(props);
  const currentAccount = accounts?.[0];
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      {React.cloneElement(children as React.ReactElement<ConnectorTriggerProps>, {
        address: currentAccount?.address,
        connected: !!currentAccount,
        loading,
        onConnectClick: () => {
          setOpen(true);
        },
        onDisconnectClick: async () => {
          setLoading(true);
          onDisconnect?.();
          await disconnect?.();
          onDisconnected?.();
          setLoading(false);
        },
        chains,
        currentChain,
        onSwitchChain: async (chainId: ChainIds) => {
          await switchChain?.(chainId);
          onChainSwitched?.(chainId);
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
          await connect(wallet);
        }}
        {...modalProps}
      />
    </>
  );
};
