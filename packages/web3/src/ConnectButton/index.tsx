import React from 'react';
import { Button, ButtonProps, Space } from 'antd';
// TODO use web3 icons
import { WalletFilled } from '@ant-design/icons';
import useProvider from '../hooks/useProvider';
import useCurrentAccount from '../hooks/useCurrentAccount';
import { Address } from '../Address';

export interface ConnectButtonAvatar {
  src?: string | React.ReactNode;
  position?: 'left' | 'right';
}

export interface ChainOptions {
  name: string | React.ReactNode;
  id: number;
}

export interface ConnectButtonProps extends ButtonProps {
  icon?: boolean | React.ReactNode;
  ellipsis?: boolean;
  tooltip?: boolean;
  avatar?: ConnectButtonAvatar;
  chainOptions?: ChainOptions[];
}

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { icon, ellipsis, tooltip, avatar, chainOptions, ...rest } = props;
  const { provider } = useProvider();
  const { account, refresh } = useCurrentAccount();
  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      type="primary"
      loading={loading}
      onClick={async () => {
        setLoading(true);
        await provider?.requestAccounts();
        await refresh();
        setLoading(false);
      }}
      {...rest}
    >
      <Space>
        {icon ? <WalletFilled /> : undefined}
        {account ? <Address ellipsis={ellipsis} address={account.address} /> : 'Connect'}
      </Space>
    </Button>
  );
};
