import { defineConfig } from 'dumi';
import { readdirSync } from 'fs';
import { join } from 'path';

// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).map((pkg) => {
  return {
    name: require(join(__dirname, 'packages', pkg, 'package.json')).name,
    path: join(__dirname, 'packages', pkg, 'src'),
  };
});

const alias = pkgList.reduce(
  (pre, pkg) => {
    pre[pkg.name] = pkg.path;
    return {
      ...pre,
    };
  },
  {} as Record<string, string>,
);

export default defineConfig({
  mfsu: false,
  alias,
  metas: [
    {
      name: 'keywords',
      content:
        'web3, Ant Design Web3, Ant Design, dapp, frontend, components,web3, admin , Ant Design, ant design, react, alibaba',
    },
    { name: 'description', content: 'A Components for Web3, Based on Ant Design,' },
    {
      property: 'og:site_name',
      content: 'Ant Design Web3',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    },
    {
      property: 'og:description',
      content:
        'Ant Design Web3 是一个基于 Ant Design 的 Web3 React 组件库，它提供了一系列的组件，可以帮助你快速构建去中心化应用（DApp）。',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'theme-color',
      content: '#1890ff',
    },
    {
      name: 'google-site-verification',
      content: '9LDp--DeEC-xOggsHl_t1MlR_1_2O972JpSUu8NZKMU',
    },
  ],
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
    logo: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*MgfMRpa9Df8AAAAAAAAAAAAADlrGAQ/original',
    socialLinks: {
      github: 'https://github.com/ant-design/ant-design-web3',
      twitter: 'https://twitter.com/AntDesignWeb3',
    },
  },
  favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  locales: [
    {
      id: 'en-US',
      name: 'English',
    },
    { id: 'zh-CN', name: '中文' },
  ],
  extraBabelPlugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIDs: {
                    // Don't minify ids in `svg` to avoid conflict.
                    preservePrefixes: ['ant-web3-icon-'],
                  },
                },
              },
            },
          ],
        },
      },
    ],
  ],
});
