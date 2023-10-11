import React from 'react';
import { Button } from 'antd';
import useCurrentAccount from '../hooks/useCurrentAccount';
import useProvider from '../hooks/useProvider';
import { Address } from '../Address';
import type { ConnectButtonProps } from './interface';
import { UnconnectedButton } from './unconnected-button';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { account } = useCurrentAccount();
  const { provider } = useProvider();

  if (!account) {
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
        await provider?.disconnect();
      }}
    >
      <Address ellipsis address={account.address} />
    </Button>
  );
};
ConnectButton.displayName = 'ConnectButton';
