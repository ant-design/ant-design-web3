import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Connect Button': ['Avatar', 'Balance', 'Chains'],
};

export const demos: Record<string, ComponentDemo[]> = {
  Avatar: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/avatar').default),
      key: 'Avatar',
    },
  ],
  Balance: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/balance').default),
      key: 'Balance',
    },
  ],
  Chains: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/chains').default),
      key: 'Chains',
    },
  ],
};
