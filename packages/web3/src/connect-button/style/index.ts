import type React from 'react';
import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type Web3AliasToken,
} from '../../theme/useStyle';
import { TinyColor } from '@ctrl/tinycolor';

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
      [`${token.componentCls}-avatar`]: {
        height: `${token.lineHeight}em`,
        aspectRatio: '1 / 1',
        [`${token.antCls}-avatar`]: {
          height: '100%',
          width: '100%',
          marginTop: -2,
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
      padding: `4px 15px`,
    },

    [`${token.componentCls}-profile-modal`]: {
      [`${token.antCls}-modal-content`]: {
        padding: token.padding,
      },
      [`&-footer`]: {
        display: 'flex',
        [`${token.antCls}-btn`]: {
          flex: 1,
        },
      },
      [`${token.componentCls}-chain-icon`]: {
        fontSize: 38,
      },
      [`${token.antCls}-web3-address`]: {
        color: token.colorTextSecondary,
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

export function useStyle(prefixCls: string) {
  return useAntdStyle('ConnectButton', (token) => {
    const proListToken: ConnectButtonToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genConnectButtonStyle(proListToken)];
  });
}
