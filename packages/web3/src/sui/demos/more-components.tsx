import React from 'react';
import { NFTCard, NFTImage } from '@ant-design/web3';
import { Suiet, SuiWeb3ConfigProvider } from '@ant-design/web3-sui';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <SuiWeb3ConfigProvider wallets={[Suiet()]}>
      <Space>
        <NFTCard address="0x110e5f6b7113ac27cad69b561d0cc595f6b875d07d2d8714e439bb73059aa6f8" />
        <NFTImage address="0x110e5f6b7113ac27cad69b561d0cc595f6b875d07d2d8714e439bb73059aa6f8" />
      </Space>
    </SuiWeb3ConfigProvider>
  );
};

export default App;
