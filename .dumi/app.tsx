import React from 'react';
import { ConfigProvider } from 'antd';

console.log(`[dumi] build site with React version: ${React.version}`);

export function rootContainer(container: React.ReactNode): React.ReactNode {
  return <ConfigProvider>{container}</ConfigProvider>;
}
