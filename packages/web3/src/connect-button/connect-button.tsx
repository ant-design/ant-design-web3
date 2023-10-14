import React from 'react';
import { Button } from 'antd';
import useAccounts from '../hooks/useAccounts';
import useProvider from '../hooks/useProvider';
import { Address } from '../address';
import type { ConnectButtonProps } from './interface';
import { UnconnectedButton } from './unconnected-button';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const { buttonProps } = props;
  const { currentAccount } = useAccounts();
  const { provider } = useProvider();

  if (!currentAccount) {
    return <UnconnectedButton {...props} />;
  }

  return (
    <Button
      {...buttonProps}
      onClick={async () => {
        await provider?.disconnect();
      }}
    >
      <Address ellipsis address={currentAccount.address} />
    </Button>
  );
};
ConnectButton.displayName = 'ConnectButton';
