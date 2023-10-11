import React from 'react';
import { Button } from 'antd';
import { Wallet } from '@ant-design/web3-icons';
import useProvider from '../hooks/useProvider';
import { Wallets } from '@ant-design/web3-common';
import type { UnconnectedButtonProps } from './interface';

export const UnconnectedButton: React.FC<UnconnectedButtonProps> = (props) => {
  const { provider } = useProvider();
  return (
    <Button
      style={props.style}
      className={props.className}
      size={props.size}
      type={props.type}
      ghost={props.ghost}
      onClick={async () => {
        await provider?.requestAccounts(Wallets.WalletConnect);
      }}
      icon={props.connectIcon === false ? undefined : props.connectIcon ?? <Wallet />}
    >
      {props.connectText ?? 'Connect Wallet'}
    </Button>
  );
};
UnconnectedButton.displayName = 'UnconnectedButton';
UnconnectedButton.defaultProps = {};
