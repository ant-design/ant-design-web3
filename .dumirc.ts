import { existsSync, readdirSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'dumi';

// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages'))
  .map((pkg) => {
    const packagePath = join(__dirname, 'packages', pkg, 'package.json');
    if (!existsSync(packagePath)) {
      return;
    }

    const packageJson = require(packagePath);

    return {
      name: packageJson.name,
      exports: packageJson.exports,
      path: join(__dirname, 'packages', pkg, 'src'),
    };
  })
  .filter((v) => !!v);

const alias = pkgList.reduce(
  (pre, pkg) => {
    pre[pkg.name] = pkg.path;

    // has multiple entries
    if (pkg.exports?.['.']) {
      Object.keys(pkg.exports).forEach((key) => {
        pre[`${pkg.name}/${key}`] = join(pkg.path, key);
      });
    }

    return pre;
  },
  {} as Record<string, string>,
);

export default defineConfig({
  title: 'Ant Design Web3 - A React components collection for Web3!',
  headScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-C31HWEY1D4',
      async: true,
    },
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-C31HWEY1D4');
    `,
  ],
  mfsu: false,
  alias,
  metas: [
    {
      name: 'keywords',
      content:
        'Ethereum, Solana, Ton, Sui, Bitcoin, web3, Ant Design Web3, Ant Design, antd, dapp, frontend, components, react, ui kit, Connect Wallet, web3 icons',
    },
    { name: 'description', content: 'A Components for Web3, Based on Ant Design.' },
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
        'Ant Design Web3 is a Web3 React component library based on Ant Design. It offers a suite of components that can help you quickly build decentralized applications (DApps). Ant Design Web3 是一个基于 Ant Design 的 Web3 React 组件库，它提供了一系列的组件，可以帮助你快速构建去中心化应用（DApp）。',
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
    atomDirs: [{ type: 'component', dir: 'packages/web3/src' }],
  },
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  copy: ['CNAME'],
  define: {
    YOUR_ZAN_API_KEY: 'd0eeefc2a4da4a8ba707889259b437d6',
    YOUR_INFURA_API_KEY: '287294cbc30b44efab9455664b69b130',
    YOUR_WALLET_CONNECT_PROJECT_ID: 'c07c0051c2055890eade3556618e38a6',
    YOUR_TIPLINK_CLIENT_ID: '4f243e28-3cfa-4d6c-abed-6b8f72a0d18d',
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
    rtl: false,
    nav: {
      'en-US': [
        { title: 'Course', link: '/course/introduction' },
        { title: 'Guide', link: '/guide/ant-design-web3' },
        { title: 'Components', link: '/components/overview' },
      ],
      'zh-CN': [
        { title: '课程', link: '/course/introduction-cn' },
        { title: '指南', link: '/guide/ant-design-web3-cn' },
        { title: '组件', link: '/components/overview-cn' },
      ],
    },
    // @ts-ignore
    footer: {
      'en-US':
        'Made with<span style="color: rgb(255, 255, 255);">&nbsp;❤&nbsp;</span>by <span>ZAN Team and Ant Design Community</span>',
      'zh-CN':
        'Made with<span style="color: rgb(255, 255, 255);">&nbsp;❤&nbsp;</span>by <span>ZAN Team and Ant Design Community</span>',
    },
    localesEnhance: [
      { id: 'en-US', switchPrefix: '中' },
      { id: 'zh-CN', switchPrefix: 'en' },
    ],
    sidebarGroupModePath: ['/guide', '/components'],
    docVersions: false,
    footerLinks: {
      'en-US': [
        {
          title: 'Related Resources',
          items: [
            {
              title: 'Ant Design',
              description: 'Front-end component library',
              url: 'https://ant.design',
              openExternal: true,
            },
            {
              title: 'Umi',
              description: 'React framework',
              url: 'https://umijs.org',
              openExternal: true,
            },
            {
              title: 'Theme Editor',
              description: 'Customize theme',
              url: '/theme-editor',
              openExternal: true,
            },
            {
              title: 'WTF Dapp Course',
              description: 'WTF DApp minimal introduction course',
              url: 'https://github.com/WTFAcademy/WTF-Dapp',
              openExternal: true,
            },
            {
              title: 'Faucet',
              description: 'Get testnet Sepolia ETH',
              url: 'https://zan.top/faucet?chInfo=ch_antdweb3',
              openExternal: true,
            },
          ],
        },
        {
          title: 'Partners',
          items: [
            {
              title: 'ZAN',
              description: 'Web3 tool service',
              url: 'https://zan.top?chInfo=ch_antdweb3',
              openExternal: true,
            },
            {
              title: 'WTF Academy',
              description: 'Web3 open source university for developers',
              url: 'https://www.wtf.academy',
              openExternal: true,
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {
              icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*4HOsS7jr3rwAAAAAAAAAAAAADlrGAQ/original',
              title: 'GitHub',
              url: 'https://github.com/ant-design/ant-design-web3',
              openExternal: true,
            },
            {
              icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*E4sRT7fDjkoAAAAAAAAAAAAADlrGAQ/original',
              title: 'Changelog',
              url: 'https://github.com/ant-design/ant-design-web3/releases',
            },
            {
              icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*WoCtSojslJQAAAAAAAAAAAAADlrGAQ/original',
              title: 'Report Bug',
              url: 'https://github.com/ant-design/ant-design-web3/issues/new',
              openExternal: true,
            },
          ],
        },
        {
          title: 'Community',
          items: [
            { title: 'X (Twitter)', url: 'https://twitter.com/AntDesignWeb3' },
            { title: 'Telegram', url: 'https://t.me/antdweb3' },
          ],
        },
      ],
      'zh-CN': [
        {
          title: '相关资源',
          items: [
            {
              title: 'Ant Design',
              description: '前端组件库',
              url: 'https://ant.design',
              openExternal: true,
            },
            {
              title: 'Umi',
              description: 'React 应用开发框架',
              url: 'https://umijs.org',
              openExternal: true,
            },
            {
              title: '主题编辑器',
              description: '定制主题',
              url: '/theme-editor-cn',
              openExternal: true,
            },
            {
              title: 'WTF Dapp 课程',
              description: 'WTF DApp 极简入门教程',
              url: 'https://github.com/WTFAcademy/WTF-Dapp',
              openExternal: true,
            },
            {
              title: '测试网水龙头',
              description: '获取测试网 Sepolia ETH',
              url: 'https://zan.top/faucet?chInfo=ch_antdweb3',
              openExternal: true,
            },
          ],
        },
        {
          title: '合作伙伴',
          items: [
            {
              title: 'ZAN',
              description: 'Web3 工具服务',
              url: 'https://zan.top?chInfo=ch_antdweb3',
              openExternal: true,
            },
            {
              title: 'WTF Academy',
              description: '开发者的 Web3 开源大学',
              url: 'https://www.wtf.academy',
              openExternal: true,
            },
          ],
        },
        {
          title: '帮助',
          items: [
            {
              icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*4HOsS7jr3rwAAAAAAAAAAAAADlrGAQ/original',
              title: 'GitHub',
              url: 'https://github.com/ant-design/ant-design-web3',
              openExternal: true,
            },
            {
              icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*E4sRT7fDjkoAAAAAAAAAAAAADlrGAQ/original',
              title: '更新日志',
              url: 'https://github.com/ant-design/ant-design-web3/releases',
            },
            {
              icon: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*WoCtSojslJQAAAAAAAAAAAAADlrGAQ/original',
              title: '报告 Bug',
              url: 'https://github.com/ant-design/ant-design-web3/issues/new',
              openExternal: true,
            },
          ],
        },
        {
          title: '社区',
          items: [
            { title: 'X (Twitter)', url: 'https://twitter.com/AntDesignWeb3' },
            { title: 'Telegram', url: 'https://t.me/antdweb3' },
          ],
        },
      ],
    },
  },
  favicons: [
    'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*XACEQ5Lqbt8AAAAAAAAAAAAADlrGAQ/original',
  ],
  locales: [
    {
      id: 'en-US',
      name: 'English',
      suffix: '',
    },
    {
      id: 'zh-CN',
      name: '中文',
      suffix: '-cn',
    },
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
                  removeViewBox: false,
                },
              },
            },
            'removeDimensions',
            'convertStyleToAttrs',
          ],
        },
      },
    ],
    'react-inline-svg-unique-id',
  ],
});
