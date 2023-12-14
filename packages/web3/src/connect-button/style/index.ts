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
      [`${token.componentCls}-text`]: {
        display: 'inline-block',
      },
      [`${token.componentCls}-chain-select`]: {
        display: 'inline-block',
        marginRight: token.marginXS,
      },
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
