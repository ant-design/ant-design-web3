import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Connect Button': [
    'Avatar',
    'Balance',
    'Basic',
    'Chains',
    'Icon',
    'Menu',
    'Name',
    'Profile Modal',
    'Quick Connect',
    'Tooltip',
    'Type',
  ],
};

export const demos: Record<string, ComponentDemo[]> = {
  Avatar: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/avatar').default),
      tokens: [],
      key: 'Avatar',
    },
  ],
  Balance: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/balance').default),
      tokens: [],
      key: 'Balance',
    },
  ],
  Basic: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/basic').default),
      tokens: [],
      key: 'Basic',
    },
  ],
  Chains: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/chains').default),
      tokens: [],
      key: 'Chains',
    },
  ],
  Icon: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/icon').default),
      tokens: [],
      key: 'Icon',
    },
  ],
  Menu: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/menu').default),
      tokens: [],
      key: 'Menu',
    },
  ],
  Name: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/name').default),
      tokens: [],
      key: 'Name',
    },
  ],
  'Profile Modal': [
    {
      demo: React.createElement(
        require('@ant-design/web3/connect-button/demos/profileModal').default,
      ),
      tokens: [],
      key: 'Profile Modal',
    },
  ],
  'Quick Connect': [
    {
      demo: React.createElement(
        require('@ant-design/web3/connect-button/demos/quick-connect').default,
      ),
      tokens: [],
      key: 'Quick Connect',
    },
  ],
  Tooltip: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/tooltip').default),
      tokens: [],
      key: 'Tooltip',
    },
  ],
  Type: [
    {
      demo: React.createElement(require('@ant-design/web3/connect-button/demos/type').default),
      tokens: [],
      key: 'Type',
    },
  ],
};
