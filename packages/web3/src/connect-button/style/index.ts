import type React from 'react';
import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type Web3AliasToken,
} from '../../theme/useStyle';

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
        marginRight: 8,
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
