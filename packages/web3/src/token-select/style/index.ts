import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface TokenStyle extends Web3AliasToken {
  componentCls: string;
}

const getTokenStyle: GenerateStyle<TokenStyle> = () => {
  return {};
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('web3-token-select', (token) => {
    const proListToken: TokenStyle = {
      ...token,
      componentCls: `.${prefixCls}`,
    };

    return [getTokenStyle(proListToken)];
  });
}
