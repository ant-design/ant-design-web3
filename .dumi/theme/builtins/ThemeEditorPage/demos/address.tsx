import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  Address: ['Basic Address', 'Copyable'],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic Address': [
    {
      demo: React.createElement(require('@ant-design/web3/address/demos/basic').default),
      key: 'Basic Address',
    },
  ],
  Copyable: [
    {
      demo: React.createElement(require('@ant-design/web3/address/demos/copyable').default),
      key: 'Copyable',
    },
  ],
};
