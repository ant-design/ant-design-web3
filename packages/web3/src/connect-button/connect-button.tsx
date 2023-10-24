import React from 'react';
import { Button } from 'antd';
import useAccounts from '../hooks/useAccounts';
import useProvider from '../hooks/useProvider';
import { Address } from '../address';
import type { ConnectButtonProps } from './interface';
import { UnconnectedButton } from './unconnected-button';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { currentAccount } = useAccounts();
  const { disconnect } = useProvider();

  if (!currentAccount) {
    return <UnconnectedButton {...props} />;
  }

  return (
    <Button
      {...props}
      style={props.style}
      className={props.className}
      size={props.size}
      type={props.type}
      ghost={props.ghost}
      onClick={async () => {
        await disconnect?.();
      }}
    >
      <Address ellipsis address={currentAccount.address} />
    </Button>
  );
};
ConnectButton.displayName = 'ConnectButton';
