import React, { useEffect } from 'react';
import { ConnectModal, type ConnectModalActionType } from '@ant-design/web3';
import type { Chain, ConnectOptions, ConnectorTriggerProps, Wallet } from '@ant-design/web3-common';
import { useFarcaster } from '@ant-design/web3-farcaster';
import { message } from 'antd';

import useProvider from '../hooks/useProvider';
import type { ConnectorProps } from './interface';

export const Connector: React.FC<ConnectorProps> = (props) => {
  const {
    children,
    modalProps,
    onConnect,
    onConnected,
    onDisconnect,
    onDisconnected,
    onChainSwitched,
    onConnectError,
  } = props;
  const {
    availableWallets,
    connect,
    disconnect,
    account,
    availableChains,
    chain,
    switchChain,
    balance,
    addressPrefix,
  } = useProvider(props);
  const [open, setOpen] = React.useState(false);
  const [connecting, setConnecting] = React.useState(false);
  const [defaultSelectedWallet, setDefaultSelectedWallet] = React.useState<Wallet>();
  const actionRef = React.useRef<ConnectModalActionType>();
  const [messageApi, contextHolder] = message.useMessage();

  // close modal when login farcaster success
  const { isSuccess } = useFarcaster();
  useEffect(() => {
    if (!isSuccess) return;
    setOpen(false);
  }, [isSuccess]);

  const connectWallet = async (wallet?: Wallet, options?: ConnectOptions) => {
    onConnect?.();
    try {
      setConnecting(true);
      const connectedAccount = await connect?.(wallet, options);
      onConnected?.(connectedAccount ? connectedAccount : undefined);
      setOpen(false);
    } catch (e: any) {
      if (typeof onConnectError === 'function') {
        onConnectError(e);
      } else {
        messageApi.error(e.message);
        console.error(e);
      }
    } finally {
      setConnecting(false);
    }
  };

  if (!React.isValidElement(children)) {
    console.error('"children" property of the "Connector" is must be a React element');
    return null;
  }

  return (
    <>
      {contextHolder}
      {React.cloneElement(children as React.ReactElement<ConnectorTriggerProps>, {
        account,
        onConnectClick: async (wallet?: Wallet) => {
          if (!wallet) {
            setOpen(true);
            return;
          }
          if (await wallet?.hasExtensionInstalled?.()) {
            // call extension directly
            connectWallet(wallet, {
              connectType: 'extension',
            });
            return;
          }
          // show qr code
          if (actionRef.current?.selectWallet) {
            // ConnectModal already mounted, call select
            actionRef.current.selectWallet(wallet);
          } else {
            // ConnectModal not mounted, set defaultSelectWallet
            connectWallet(wallet, {
              connectType: 'qrCode',
            });
            setDefaultSelectedWallet(wallet);
          }
          setOpen(true);
        },
        onDisconnectClick: () => {
          setConnecting(true);
          onDisconnect?.();
          disconnect?.().then(() => {
            onDisconnected?.();
            setConnecting(false);
          });
        },
        balance,
        availableChains,
        availableWallets,
        chain,
        addressPrefix,
        onSwitchChain: async (c: Chain) => {
          await switchChain?.(c);
          onChainSwitched?.(c);
        },
        loading: connecting,
        ...children.props,
      })}

      <ConnectModal
        connecting={connecting}
        open={open}
        actionRef={actionRef}
        defaultSelectedWallet={defaultSelectedWallet}
        walletList={availableWallets}
        {...modalProps}
        onWalletSelected={async (wallet, options) => {
          await connectWallet(wallet, options);
        }}
        onCancel={(e) => {
          modalProps?.onCancel?.(e);
          setOpen(false);
          setConnecting(false);
          modalProps?.onCancel?.(e);
        }}
      />
    </>
  );
};
