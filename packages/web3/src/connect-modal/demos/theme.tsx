import React from 'react';
import { ConfigProvider, Space } from 'antd';

import BasiceDemo from './basic';

const App: React.FC = () => {
  return (
    <Space>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#8442ff',
          },
          components: {
            Button: {
              borderRadius: 16,
              borderRadiusLG: 24,
            },
            Modal: {
              borderRadiusLG: 24,
            },
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
          components: {
            Button: {
              borderRadius: 16,
              borderRadiusLG: 24,
            },
            Modal: {
              borderRadiusLG: 24,
            },
          },
        }}
      >
        <BasiceDemo />
      </ConfigProvider>
    </Space>
  );
};

export default App;
