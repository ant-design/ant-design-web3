import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Browser Link': ['Basic Browser Link', 'Complex', 'Custom Name', 'Icon Only'],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic Browser Link': [
    {
      demo: React.createElement(require('@ant-design/web3/browser-link/demos/basic').default),
      tokens: [],
      key: 'Basic Browser Link',
    },
  ],
  Complex: [
    {
      demo: React.createElement(require('@ant-design/web3/browser-link/demos/complex').default),
      tokens: [],
      key: 'Complex',
    },
  ],
  'Custom Name': [
    {
      demo: React.createElement(require('@ant-design/web3/browser-link/demos/customName').default),
      tokens: [],
      key: 'Custom Name',
    },
  ],
  'Icon Only': [
    {
      demo: React.createElement(require('@ant-design/web3/browser-link/demos/icononly').default),
      tokens: [],
      key: 'Icon Only',
    },
  ],
};
