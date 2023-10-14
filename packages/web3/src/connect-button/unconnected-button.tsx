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
  return (
    <>
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
          setOpen(false);
          setLoading(true);
          provider
            ?.requestAccounts(wallet.name)
            .finally(() => setLoading(false))
            .catch((e) => {
              message.error(e.message);
              console.error(e);
            });
        }}
      />
    </>
  );
};
UnconnectedButton.displayName = 'UnconnectedButton';
UnconnectedButton.defaultProps = {};
