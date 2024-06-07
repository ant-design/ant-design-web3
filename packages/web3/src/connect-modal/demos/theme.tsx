import React from 'react';
import { ConfigProvider, Space } from 'antd';

import BasiceDemo from './basic';
import SimpleDemo from './simple';
import { customToken } from './tokens';

const App: React.FC = () => {
  return (
    <Space>
      <ConfigProvider theme={customToken}>
        <BasiceDemo />
      </ConfigProvider>
      <ConfigProvider theme={customToken}>
        <SimpleDemo />
      </ConfigProvider>
    </Space>
  );
};

export default App;
