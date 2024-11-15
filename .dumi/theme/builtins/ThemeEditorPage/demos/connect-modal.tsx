import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Connect Modal': ['Normal', 'Simple'],
};

export const demos: Record<string, ComponentDemo[]> = {
  Normal: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/panel').default),
      key: 'Panel',
    },
  ],
  Simple: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/panel').SimpleApp),
      key: 'Simple',
    },
  ],
};
