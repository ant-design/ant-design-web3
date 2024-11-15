import React from 'react';
import type { ComponentDemo } from 'antd-token-previewer-web3';

export const components: Record<string, string[]> = {
  'NFT Card': ['Basic NFT Card'],
};

export const demos: Record<string, ComponentDemo[]> = {
  'Basic NFT Card': [
    {
      demo: React.createElement(require('@ant-design/web3/nft-card/demos/basic').default),
      tokens: [],
      key: 'Basic NFT Card',
    },
  ],
};
