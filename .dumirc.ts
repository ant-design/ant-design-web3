import { defineConfig } from 'dumi';

export default defineConfig({
  mfsu: false,
  resolve: {
    atomDirs: [
      {
        type: 'component',
        dir: 'packages/web3/src',
      },
    ],
  },
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  copy: ['CNAME'],
  define: {
    YOUR_ZAN_API_KEY: 'd0eeefc2a4da4a8ba707889259b437d6',
    YOUR_INFURA_API_KEY: '287294cbc30b44efab9455664b69b130',
    YOUR_WALLET_CONNET_PROJECT_ID: 'c07c0051c2055890eade3556618e38a6',
  },
  publicPath: process.env.PUBLIC_PATH || '/',
  base: process.env.BASE || '/',
  themeConfig: {
    name: 'Ant Design Web3',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    socialLinks: {
      github: 'https://github.com/ant-design/ant-design-web3',
      twitter: 'https://twitter.com/AntDesignWeb3',
    },
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
