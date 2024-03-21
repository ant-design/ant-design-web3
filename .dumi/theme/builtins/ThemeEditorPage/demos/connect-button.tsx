import React from 'react';
import { ConnectButton, type Chain } from '@ant-design/web3';
import { Mainnet, Polygon } from '@ant-design/web3-assets';
import { Space } from 'antd';
import type { ComponentDemo } from 'antd-token-previewer-web3';

const Demo = () => {
  const [chain, setChain] = React.useState<Chain>(Polygon);

  return (
    <Space>
      <ConnectButton account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }} tooltip />
      <ConnectButton
        chain={chain}
        availableChains={[Mainnet, Polygon]}
        account={{ address: '3ea2cfd153b8d8505097b81c87c11f5d05097c18' }}
        onSwitchChain={async (c) => {
          setChain(c);
        }}
      />
    </Space>
  );
};

const demos: ComponentDemo[] = [
  {
    demo: <Demo />,
    tokens: [],
    key: 'Connect Button',
  },
];

export default demos;
