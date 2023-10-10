import React from 'react';
import { Button, ButtonProps, Space } from 'antd';
import { Wallet } from '@ant-design/web3-icons';
import { ConnectModal } from '../ConnectModal';
import useProvider from '../hooks/useProvider';
import useCurrentAccount from '../hooks/useCurrentAccount';
import { Address } from '../Address';
import { WalletsPresets, walletsPresetsConfig } from '../constants';

export interface ConnectButtonAvatar {
  src?: string | React.ReactNode;
  position?: 'left' | 'right';
}

export interface ChainOptions {
  name: string | React.ReactNode;
  id: number;
}

export interface ConnectButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  ellipsis?: boolean;
  tooltip?: boolean;
  avatar?: ConnectButtonAvatar;
  chainOptions?: ChainOptions[];
  walletsPresets?: WalletsPresets;
}

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { icon, ellipsis, tooltip, avatar, chainOptions, walletsPresets, ...rest } = props;
  const [open, setOpen] = React.useState(false);
  const { provider } = useProvider();
  const { account, refresh } = useCurrentAccount();
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <Button
        type="primary"
        loading={loading}
        onClick={async () => {
          setOpen(true);
        }}
        {...rest}
      >
        <Space>
          {icon && <Wallet />}
          {account ? <Address ellipsis={ellipsis} address={account.address} /> : 'Connect'}
        </Space>
      </Button>
      <ConnectModal
        open={open}
        walletList={walletsPresetsConfig[walletsPresets || WalletsPresets.SIMPLE]}
        onOpenChange={setOpen}
        onSelectWallet={async () => {
          setLoading(true);
          await provider?.requestAccounts();
          await refresh();
          setLoading(false);
        }}
      />
    </>
  );
};
ConnectButton.displayName = 'ConnectButton';
