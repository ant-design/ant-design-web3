import React from 'react';
import { ConnectModal, type ConnectModalActionType } from '@ant-design/web3';
import type { Chain, ConnectOptions, ConnectorTriggerProps, Wallet } from '@ant-design/web3-common';
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
  const [loading, setLoading] = React.useState(false);
  const [defaultSelectedWallet, setDefaultSelectedWallet] = React.useState<Wallet>();
  const actionRef = React.useRef<ConnectModalActionType>();
  const [messageApi, contextHolder] = message.useMessage();

  const connectWallet = async (wallet?: Wallet, options?: ConnectOptions) => {
    onConnect?.();
    try {
      setLoading(true);
      await connect?.(wallet, options);
      onConnected?.();
      setOpen(false);
    } catch (e: any) {
      messageApi.error(e.message);
      console.error(e);
    } finally {
      setLoading(false);
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
          if (wallet) {
            if (await wallet?.hasExtensionInstalled?.()) {
              // call extnesion directly
              connectWallet(wallet, {
                connectType: 'extension',
              });
            } else {
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
            }
          } else {
            setOpen(true);
          }
        },
        onDisconnectClick: () => {
          setLoading(true);
          onDisconnect?.();
          disconnect?.().then(() => {
            onDisconnected?.();
            setLoading(false);
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
        loading,
        ...children.props,
      })}

      <ConnectModal
        open={open}
        actionRef={actionRef}
        defaultSelectedWallet={defaultSelectedWallet}
        walletList={availableWallets}
        onWalletSelected={async (wallet, options) => {
          if (options?.connectType !== 'qrCode') {
            // not need show qr code, hide immediately
            setOpen(false);
          }
          await connectWallet(wallet, options);
        }}
        {...modalProps}
        onCancel={(e) => {
          modalProps?.onCancel?.(e);
          setOpen(false);
          setLoading(false);
          modalProps?.onCancel?.(e);
        }}
      />
    </>
  );
};
