import React from 'react';
import { Button } from 'antd';
import { Address } from '../address';
import type { ConnectButtonProps } from './interface';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { address, connected, onConnectClicked, onDisconnectClicked } = props;

  return (
    <Button
      {...props}
      style={props.style}
      className={props.className}
      size={props.size}
      type={props.type}
      ghost={props.ghost}
      onClick={() => {
        if (connected) {
          onConnectClicked?.();
        } else {
          onDisconnectClicked?.();
        }
      }}
    >
      {connected ? <Address ellipsis address={address} /> : 'Connect Wallet'}
    </Button>
  );
};

ConnectButton.displayName = 'ConnectButton';
