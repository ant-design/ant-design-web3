import React from 'react';
import { useNFT } from '@ant-design/web3';
import { Spin } from 'antd';

const App: React.FC = () => {
  const { metadata, error, loading } = useNFT('0x79fcdef22feed20eddacbb2587640e45491b757f', 42n);
  if (error) {
    return <div>{error.message}</div>;
  }
  return <Spin spinning={loading}>{metadata.name}</Spin>;
};

export default App;
