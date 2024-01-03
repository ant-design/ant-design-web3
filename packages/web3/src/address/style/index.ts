import type React from 'react';

import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface AddressToken extends Web3AliasToken {
  componentCls: string;
}

const genAddressStyle: GenerateStyle<AddressToken> = (token) => {
  return {
    [token.componentCls]: {
      wordBreak: 'break-all',
    },
  };
};

export function useStyle(prefixCls: string) {
  return useAntdStyle('Address', (token) => {
    const proListToken: AddressToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genAddressStyle(proListToken)];
  });
}
