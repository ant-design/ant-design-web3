import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'Crypto Price': ['Basic Crypto Price', 'Custom Chains', 'With Icon'],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic Crypto Price': [
    {
      demo: React.createElement(require('@ant-design/web3/crypto-price/demos/basic').default),
      tokens: [],
      key: 'Basic Crypto Price',
    },
  ],
  'Custom Chains': [
    {
      demo: React.createElement(
        require('@ant-design/web3/crypto-price/demos/custom-chain').default,
      ),
      tokens: [],
      key: 'Custom Chains',
    },
  ],
  'With Icon': [
    {
      demo: React.createElement(require('@ant-design/web3/crypto-price/demos/icon').default),
      tokens: [],
      key: 'With Icon',
    },
  ],
};
