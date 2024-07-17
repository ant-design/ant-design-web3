import React from 'react';

import { TonConnectorContext } from '../ton-provider/TonWeb3ConfigProvider';

export const useTonConnector = () => {
  const provider = React.useContext(TonConnectorContext);
  return {
    connector: provider?.tonConnectSdk,
    account: provider?.tonConnectSdk?.account,
    tonSelectWallet: provider?.tonSelectWallet,
    setTonSelectWallet: provider?.setTonSelectWallet,
    connectConfig: provider?.connectConfig,
  };
};
