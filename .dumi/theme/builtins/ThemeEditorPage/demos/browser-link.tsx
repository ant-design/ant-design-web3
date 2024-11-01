import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Browser Link': ['Basic Browser Link', 'Icon Only'],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic Browser Link': [
    {
      demo: React.createElement(require('@ant-design/web3/browser-link/demos/basic').default),
      key: 'Basic Browser Link',
    },
  ],
  'Icon Only': [
    {
      demo: React.createElement(require('@ant-design/web3/browser-link/demos/icononly').default),
      key: 'Icon Only',
    },
  ],
};
