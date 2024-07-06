import React from 'react';

import { TonConnectorContext } from '../ton-provider';

const useTonConnector = () => {
  const provider = React.useContext(TonConnectorContext);

  return {
    connector: provider?.tonConnectSdk,
    tonSelectWallet: provider?.tonSelectWallet,
    setTonConnectSdk: provider?.setTonConnectSdk,
  };
};

export default useTonConnector;
