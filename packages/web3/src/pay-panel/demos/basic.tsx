import React from 'react';
import { PayPanel } from '@ant-design/web3';
import {
  BSC,
  Mainnet,
  metadata_imToken,
  metadata_MetaMask,
  metadata_TokenPocket,
  USDT,
} from '@ant-design/web3-assets';
import { Card } from 'antd';
import { parseUnits } from 'viem';

const App: React.FC = () => {
  return (
    <Card style={{ width: 450 }}>
      <PayPanel
        target={{
          [Mainnet.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
          [BSC.id]: '0x35ceCD3d51Fe9E5AD14ea001475668C5A5e5ea76',
        }}
        supportedChains={[{ chain: Mainnet }, { chain: BSC }]}
        token={USDT}
        amount={parseUnits('1', USDT.decimal)}
        wallets={[metadata_MetaMask, metadata_imToken, metadata_TokenPocket]}
        onFinish={() => {
          console.log('complete');
        }}
      />
    </Card>
  );
};

export default App;
