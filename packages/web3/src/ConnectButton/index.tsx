import React from 'react';
import { Button } from 'antd';
import useProvider from '../hooks/useProvider';
import useCurrentAccount from '../hooks/useCurrentAccount';

export const ConnectButton = () => {
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
    >
      {account ? account.address.slice(0, 6) + '...' + account.address.slice(-4) : 'Connect'}
    </Button>
  );
};
