import type { Web3ThemeConfig } from '@ant-design/web3';
import { theme } from 'antd';

export type ThemeValue =
  | 'default'
  | 'violet'
  | 'dark'
  | 'green'
  | 'pink'
  | 'retro'
  | 'win95'
  | 'material';

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
  buttonType?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
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
  {
    color: '#008080',
    value: 'win95',
    name: 'Windows 95',
    buttonType: 'default',
    token: {
      token: {
        colorPrimary: '#008080',
        colorLink: '#0000FF',
        colorBgContainer: '#C0C0C0',
        borderRadius: 0,
      },
      components: {
        Button: {
          defaultBg: '#C0C0C0',
          defaultBorderColor: '#FFFFFF #808080 #808080 #FFFFFF',
          defaultHoverBg: '#C0C0C0',
          defaultShadow: 'inset -1px -1px #0a0a0a,inset 1px 1px #fff',
        },
        Modal: {
          contentBg: '#C0C0C0',
          boxShadow: 'inset -1px -1px #0a0a0a,inset 1px 1px #fff',
        },
      },
      web3Components: {
        ConnectModal: {
          hoverWalletBg: '#DFDFDF',
        },
      },
    },
  },
  {
    color: '#796d6f',
    value: 'retro',
    name: 'Retro',
    buttonType: 'default',
    token: {
      token: {
        colorPrimary: '#000000',
        colorLink: '#8b837d',
        colorBgContainer: '#f3eae4',
      },
      components: {
        Button: {
          defaultShadow: '-4px 4px 0px #000000,inset 0 0 0 2px #000000',
          defaultHoverBg: '#f3eae4',
          defaultBg: '#fff',
          defaultBorderColor: '#000000',
        },
        Modal: {
          boxShadow: '-10px 10px 0px #000000,inset 0 0 0 2px #000000',
          contentBg: '#eadcd1',
        },
      },
      web3Components: {
        ConnectModal: {
          hoverWalletBg: '#f3eae4',
        },
      },
    },
  },
  {
    color: '#6750A4',
    value: 'material',
    name: 'Material Design 3',
    buttonType: 'primary',
    token: {
      token: {
        colorPrimary: '#6750a4',
        colorBorderBg: '',
        colorLink: '#6750a4',
        colorBgBase: '#fdfbff',
        colorBgContainer: '#fdfbff',
        colorBgMask: 'rgba(0, 0, 0, 0.32)',
        controlHeight: 40,
      },
      components: {
        Button: {
          colorBorder: 'transparent',
          colorText: '#6750a4',
          colorPrimaryBg: '#6750a4',
          primaryShadow: 'none',
          dangerShadow: 'none',
          defaultShadow: 'none',
        },
        Modal: {
          contentBg: '#fffbfe',
          boxShadow: 'none',
        },
      },
    },
  },
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
