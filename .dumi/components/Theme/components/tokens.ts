import React from 'react';
import type { Web3ThemeConfig } from '@ant-design/web3';
import { theme } from 'antd';

export type ThemeValue = 'default' | 'violet' | 'dark' | 'green' | 'pink';

export const customToken: Web3ThemeConfig = {
  token: {
    borderRadius: 16,
    wireframe: false,
    padding: 24,
    paddingSM: 16,
    paddingXS: 12,
    fontSize: 16,
    fontSizeLG: 18,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    fontSizeHeading2: 36,
    fontSizeXL: 24,
    colorPrimary: '#8442ff',
    colorInfo: '#8442ff',
    paddingContentHorizontal: 20,
    paddingContentHorizontalSM: 16,
    paddingContentHorizontalLG: 24,
  },
  components: {
    Button: {
      controlHeight: 44,
      marginXS: 8,
      fontSizeLG: 18,
      controlHeightLG: 52,
      controlHeightSM: 36,
      paddingXS: 16,
    },
    List: {
      paddingLG: 24,
      marginLG: 24,
      marginXXL: 48,
      paddingContentHorizontalLG: 24,
      fontSizeLG: 20,
      padding: 16,
      paddingContentVertical: 24,
      paddingXS: 8,
      paddingSM: 12,
    },

    Modal: {
      controlHeightLG: 44,
      fontSizeHeading5: 20,
      fontSizeLG: 18,
      marginSM: 12,
      margin: 16,
      marginLG: 24,
      marginXS: 8,
      padding: 16,
      paddingContentHorizontalLG: 24,
      paddingLG: 24,
      paddingMD: 20,
      paddingXS: 12,
    },
  },
};

export type ThemeSetting = {
  color: string;
  value: ThemeValue;
  name: string;
  token: Web3ThemeConfig;
  style?: React.CSSProperties;
};

// 部分参考 antd 官网的主题 https://github.com/ant-design/ant-design/blob/master/.dumi/pages/index/components/Theme/index.tsx#L305
export const themeList: ThemeSetting[] = [
  {
    color: '#1677FF',
    value: 'default',
    name: 'Default',
    token: {
      token: {},
    },
  },
  {
    color: '#000',
    value: 'dark',
    name: 'Dark',
    token: {
      token: {
        borderRadius: 2,
        colorPrimary: '#000',
        colorPrimaryTextHover: 'rgba(255, 255, 255, 0.8)',
        colorLink: 'rgba(255, 255, 255, 0.75)',
        colorText: 'rgba(255, 255, 255, 0.75)',
      },
      components: {
        Button: {
          defaultHoverColor: 'rgba(255, 255, 255, 0.8)',
          defaultHoverBorderColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
      algorithm: theme.darkAlgorithm,
    },
  },
  // 需要设计师那边给一下配套的整个网站对应的风格图片配置到 Thumbnail.tsx 里面，先不放开
  // {
  //   color: '#796d6f',
  //   value: 'retro',
  //   name: 'Retro',
  //   style: {
  //     boxShadow: '-10px 10px 0px #000000,inset 0 0 0 2px #000000',
  //     border: 'none',
  //   },
  //   token: {
  //     token: {
  //       colorPrimary: '#000000',
  //       colorLink: '#8b837d',
  //       colorBgContainer: '#eadcd1',
  //     },
  //     components: {
  //       Button: {
  //         defaultShadow: '-4px 4px 0px #000000,inset 0 0 0 2px #000000',
  //         defaultHoverBg: '#f3eae4',
  //         defaultBorderColor: '#000000',
  //         defaultBg: '#fff',
  //       },
  //     },
  //     web3Components: {
  //       ConnectModal: {
  //         hoverWalletBg: '#f3eae4',
  //       },
  //     },
  //   },
  // },
  {
    value: 'green',
    name: 'Forest green',
    color: '#00B96B',
    token: {
      token: {
        colorPrimary: '#00B96B',
        borderRadius: 4,
        colorLink: '#00B96B',
      },
    },
  },
  {
    value: 'pink',
    name: 'Blossom',
    color: '#ED4192',
    token: {
      token: {
        colorPrimary: '#ED4192',
        borderRadius: 16,
        colorLink: '#ED4192',
      },
    },
  },
  {
    color: '#8343FF',
    value: 'violet',
    name: 'Violet',
    token: customToken,
  },
];
