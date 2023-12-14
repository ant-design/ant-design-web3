import React from 'react';
import { ConnectButton, type Chain } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';

const App: React.FC = () => {
  const [chain, setChain] = React.useState<Chain>(Polygon);
  return (
    <ConnectButton
      chain={chain}
      availableChains={[Mainnet, Polygon]}
      account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
      onSwitchChain={async (c) => {
        setChain(c);
      }}
    />
  );
};

export default App;
