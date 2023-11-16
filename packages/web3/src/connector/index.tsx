import React from 'react';
import { ConnectModal, type ConnectModalProps } from '@ant-design/web3';
import { message } from 'antd';
import type { Account, Wallet } from '@ant-design/web3-common';
import useAccounts from '../hooks/useAccounts';
import useProvider from '../hooks/useProvider';
import useWallets from '../hooks/useWallets';

export interface ConnectorProps {
  children: React.ReactNode;
  modalProps?: ConnectModalProps;

  onConnect?: () => Promise<void>;
  onDisconnect?: () => Promise<void>;
  onConnected?: (account: Account) => Promise<void>;
  onDisconnected?: () => Promise<void>;

  wallets?: Wallet[];
  accounts?: Account[];
  requestAccounts?: (wallet: string) => Promise<Account[]>;
  disconnect?: () => Promise<void>;
}

export const Connector: React.FC<ConnectorProps> = (props) => {
  const { children, modalProps } = props;
  const { currentAccount } = useAccounts();
  const { requestAccounts, disconnect } = useProvider();
  const { wallets } = useWallets();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      {React.cloneElement(children as React.ReactElement, {
        address: currentAccount?.address,
        connected: !!currentAccount,
        loading,
        onClick: () => {
          if (currentAccount) {
            disconnect?.();
          } else {
            setOpen(true);
          }
        },
      })}

      <ConnectModal
        open={open}
        walletList={wallets}
        onOpenChange={setOpen}
        onSelectWallet={async (wallet) => {
          requestAccounts?.(wallet.name)
            .then(() => {
              setOpen(false);
            })
            .finally(() => {
              setLoading(false);
            })
            .catch((e) => {
              messageApi.error(e.message);
              console.error(e);
            });

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
