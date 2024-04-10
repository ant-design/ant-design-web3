import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface CryptoPriceToken extends Web3AliasToken {
  componentCls: string;
}

const genCryptoPriceStyle: GenerateStyle<CryptoPriceToken> = (token) => {
  return {
    [token.componentCls]: {},
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('CryptoPrice', (token) => {
    const proListToken: CryptoPriceToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genCryptoPriceStyle(proListToken)];
  });
}
