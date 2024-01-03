import React from 'react';
import { ConfigProvider, Space, theme } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Space>
        <BasiceDemo />
        <SimpleDemo />
      </Space>
    </ConfigProvider>
  );
};

export default App;
