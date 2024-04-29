import React from 'react';
import { NFTCard } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  return (
    <Space>
      <NFTCard
        style={{
          height: 498,
        }}
        getNFTMetadata={async () => {
          throw new Error('This is an error');
        }}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />
      <NFTCard
        style={{
          height: 498,
        }}
        getNFTMetadata={async () => {
          throw new Error('This is an error');
        }}
        errorRender={(e) => e.message}
        address="0x79fcdef22feed20eddacbb2587640e45491b757f"
        tokenId={42n}
      />
      <NFTCard
        name="My NFT"
        tokenId={16}
        description="This is description"
        showAction
        footer="This is footer"
        image="errorimageurl"
      />
    </Space>
  );
};

export default App;
