import { readdirSync } from 'fs';
import { join } from 'path';
import { defineConfig } from 'dumi';

// utils must build before core
// runtime must build before renderer-react
const pkgList = readdirSync(join(__dirname, 'packages')).map((pkg) => {
  const packageJson = require(join(__dirname, 'packages', pkg, 'package.json'));

  return {
    name: packageJson.name,
    exports: packageJson.exports,
    path: join(__dirname, 'packages', pkg, 'src'),
  };
});

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
    atomDirs: [{ type: 'component', dir: 'packages/web3/src' }],
  },
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  copy: ['CNAME'],
  define: {
    YOUR_ZAN_API_KEY: 'd0eeefc2a4da4a8ba707889259b437d6',
    YOUR_INFURA_API_KEY: '287294cbc30b44efab9455664b69b130',
    YOUR_WALLET_CONNET_PROJECT_ID: 'c07c0051c2055890eade3556618e38a6',
    YOUR_HELIUS_API_KEY: 'cec63e24-d5fd-4e7e-a2ee-5518e08b8485',
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
        { title: 'Components', link: '/components/icons' },
      ],
      'zh-CN': [
        { title: '课程', link: '/course/introduction-cn' },
        { title: '指南', link: '/guide/ant-design-web3-cn' },
        { title: '组件', link: '/components/icons-cn' },
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
    docVersions: {
      'v1.x': '',
    },
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
              title: 'ZAN',
              description: 'Web3 tools and services',
              url: 'https://zan.top?chInfo=ch_antdweb3',
              openExternal: true,
            },
            {
              title: 'Theme Editor',
              description: 'Customize theme',
              url: '/theme-editor',
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
            {
              title: 'X (Twitter)',
              url: 'https://twitter.com/AntDesignWeb3',
            },
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
              title: 'ZAN',
              description: 'Web3 工具服务',
              url: 'https://zan.top?chInfo=ch_antdweb3',
              openExternal: true,
            },
            {
              title: '主题编辑器',
              description: '定制主题',
              url: '/theme-editor-cn',
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
            {
              title: 'X (Twitter)',
              url: 'https://twitter.com/AntDesignWeb3',
            },
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
  extraBabelPlugins: ['inline-react-svg', 'react-inline-svg-unique-id'],
});
