import { ConfigProvider, Space } from 'antd';
import React from 'react';
import BasiceDemo from './basic';

const App: React.FC = () => {
  return (
    <Space>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
        }}
      >
        <BasiceDemo />
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#000',
          },
        }}
      >
        <BasiceDemo />
      </ConfigProvider>
    </Space>
  );
};

export default App;
