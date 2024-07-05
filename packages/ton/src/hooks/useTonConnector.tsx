import React from 'react';

import { TonConnectorContext } from '../ton-provider';

const useTonConnector = () => {
  const provider = React.useContext(TonConnectorContext);

  return provider;
};

export default useTonConnector;
