import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Connect Modal': [
    'Basic Connect Modal',
    'Custom Guide',
    'Dark Mode',
    'Panel',
    'Simple',
    'Theme',
    'Ungrouped Basic',
  ],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic Connect Modal': [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/basic').default),
      tokens: [],
      key: 'Basic Connect Modal',
    },
  ],
  'Custom Guide': [
    {
      demo: React.createElement(
        require('@ant-design/web3/connect-modal/demos/customGuide').default,
      ),
      tokens: [],
      key: 'Custom Guide',
    },
  ],
  'Dark Mode': [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/dark').default),
      tokens: [],
      key: 'Dark Mode',
    },
  ],
  Panel: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/panel').default),
      tokens: [],
      key: 'Panel',
    },
  ],
  Simple: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/simple').default),
      tokens: [],
      key: 'Simple',
    },
  ],
  Theme: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-modal/demos/theme').default),
      tokens: [],
      key: 'Theme',
    },
  ],
  'Ungrouped Basic': [
    {
      demo: React.createElement(
        require('@ant-design/web3/connect-modal/demos/ungroupedBasic').default,
      ),
      tokens: [],
      key: 'Ungrouped Basic',
    },
  ],
};
