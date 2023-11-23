import React from 'react';
import { ConfigProvider } from 'antd';

export function rootContainer(container: React.ReactNode) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000',
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
