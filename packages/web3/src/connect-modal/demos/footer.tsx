import React from 'react';
import { Space } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';

const App: React.FC = () => {
  return (
    <Space>
      <BasiceDemo
        footer={
          <div>
            Powered By <a href="https://web3.ant.design">Ant Design Web3</a>
          </div>
        }
      />
      <SimpleDemo
        footer={
          <div>
            Powered By <a href="https://web3.ant.design">Ant Design Web3</a>
          </div>
        }
      />
    </Space>
  );
};

export default App;
