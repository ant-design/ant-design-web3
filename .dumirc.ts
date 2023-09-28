import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'packages/web3/src',
      },
    ],
  },
  mfsu: false,
  // TODO: remove after get a domain
  publicPath: '/ant-design-web3/',
  base: '/ant-design-web3',
  themeConfig: {
    name: 'Ant Design Web3',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  metas: [
    { name: 'keywords', content: 'web3, Ant Design Web3, Ant Design, dapp, frontend, components' },
    { name: 'description', content: 'A Components for Web3, Based on Ant Design' },
  ],
  locales: [
    {
      id: 'en-US',
      name: 'English',
    },
    { id: 'zh-CN', name: '中文' },
  ],
});
