import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  Address: ['Basic Address', 'Copyable', 'Custom Tooltip', 'Format'],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic Address': [
    {
      demo: React.createElement(require('@ant-design/web3/address/demos/basic').default),
      tokens: [],
      key: 'Basic Address',
    },
  ],
  Copyable: [
    {
      demo: React.createElement(require('@ant-design/web3/address/demos/copyable').default),
      tokens: [],
      key: 'Copyable',
    },
  ],
  'Custom Tooltip': [
    {
      demo: React.createElement(require('@ant-design/web3/address/demos/customTooltip').default),
      tokens: [],
      key: 'Custom Tooltip',
    },
  ],
  Format: [
    {
      demo: React.createElement(require('@ant-design/web3/address/demos/format').default),
      tokens: [],
      key: 'Format',
    },
  ],
};
