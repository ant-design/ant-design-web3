import { TinyColor } from '@ctrl/tinycolor';

import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface ConnectButtonToken extends Web3AliasToken {
  componentCls: string;
}

const genConnectButtonStyle: GenerateStyle<ConnectButtonToken> = (token) => {
  return {
    [token.componentCls]: {
      [`${token.componentCls}-content`]: {
        display: 'inline-block',
      },
      [`${token.componentCls}-content-inner`]: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      [`${token.componentCls}-text`]: {
        [`${token.antCls}-typography`]: {
          color: 'unset',
        },
      },
      [`${token.componentCls}-avatar`]: {
        height: `${token.lineHeight}em`,
        aspectRatio: '1 / 1',
        [`${token.antCls}-avatar`]: {
          height: '100%',
          width: '100%',
          marginTop: -2,
        },
      },
      [`&${token.antCls}-btn-sm`]: {
        [`${token.componentCls}-avatar`]: {
          [`${token.antCls}-avatar`]: {
            width: '80%',
            height: '80%',
          },
        },
      },
      [`${token.componentCls}-chain-select`]: {
        display: 'inline-block',
        marginRight: token.marginXS,
      },
    },
    [`${token.componentCls}-chain-select-dropdown`]: {
      border: `1px solid ${token.colorBorder}`,
      borderRadius: token.borderRadiusLG,
      marginBlockStart: 12,
    },
    [`${token.componentCls}-chain-select-button`]: {
      padding: 0,
    },
    [`${token.componentCls}-chain-select-placeholder`]: {
      padding: '4px 15px',
    },

    [`${token.componentCls}-quick-connect`]: {
      width: 'fit-content',
    },

    [`${token.componentCls}-quick-connect-icon`]: {
      [`> ${token.antCls}icon`]: {
        height: token.fontSize,
        width: token.fontSize,
      },

      '> img': {
        height: token.fontSize,
        width: token.fontSize,
      },
    },

    [`${token.componentCls}-profile-modal`]: {
      [`${token.antCls}-modal-content`]: {
        padding: token.padding,
      },
      [`${token.antCls}-avatar`]: {
        width: token.sizeXXL,
        height: token.sizeXXL,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      [`${token.antCls}-avatar-image`]: {
        width: token.sizeXXL,
        height: token.sizeXXL,
      },
      '&-footer': {
        display: 'flex',
        marginTop: token.margin,
        gap: token.marginXS,
        [`${token.antCls}-btn`]: {
          flex: 1,
        },
      },
      '&-name': {
        color: token.colorTextHeading,
        fontSize: token.fontSizeLG,
      },
      [`${token.componentCls}-chain-icon`]: {
        fontSize: token.sizeXXL,
      },
      [`${token.componentCls}-default-icon`]: {
        fontSize: token.sizeLG,
      },
    },

    [`${token.componentCls}-tooltip`]: {
      [`${token.componentCls}-tooltip-title`]: {
        color: new TinyColor(token.colorWhite).setAlpha(0.65).toRgbString(),
        fontSize: token.fontSizeSM,
      },
      [`${token.componentCls}-tooltip-content`]: {
        fontSize: token.fontSizeLG,
        color: token.colorWhite,
        textAlign: 'justify',
      },
    },
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('ConnectButton', (token) => {
    const proListToken: ConnectButtonToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genConnectButtonStyle(proListToken)];
  });
}
