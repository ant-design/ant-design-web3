import React from 'react';
import { Button, message } from 'antd';
import { Wallet } from '@ant-design/web3-icons';
import useProvider from '../hooks/useProvider';
import type { UnconnectedButtonProps } from './interface';
import { ConnectModal } from '../connect-modal';
import useWallets from '../hooks/useWallets';

export const UnconnectedButton: React.FC<UnconnectedButtonProps> = (props) => {
  const { provider } = useProvider();
  const { wallets } = useWallets();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      <Button
        style={props.style}
        className={props.className}
        size={props.size}
        type={props.type}
        ghost={props.ghost}
        loading={loading}
        onClick={async () => {
          setOpen(true);
        }}
        icon={props.connectIcon === false ? undefined : props.connectIcon ?? <Wallet />}
      >
        {props.connectText ?? 'Connect Wallet'}
      </Button>
      <ConnectModal
        open={open}
        walletList={wallets}
        onOpenChange={setOpen}
        onSelectWallet={async (wallet) => {
          provider
            ?.requestAccounts(wallet.name)
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
      />
    </>
  );
};
UnconnectedButton.displayName = 'UnconnectedButton';
UnconnectedButton.defaultProps = {};
