import React from 'react';
import { useAccount } from '@ant-design/web3';
import { Space } from 'antd';

const App: React.FC = () => {
  const { account } = useAccount();
  if (!account) {
    return <div>Not Connected</div>;
  }
  return <Space direction="vertical">{account.address}</Space>;
};

export default App;
