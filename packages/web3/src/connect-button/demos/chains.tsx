import React from 'react';
import { ConnectButton, type Chain } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import { Space } from 'antd';

const App: React.FC = () => {
  const [chain, setChain] = React.useState<Chain>(Polygon);
  return (
    <Space>
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        type="primary"
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        size="large"
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
    </Space>
  );
};

export default App;
