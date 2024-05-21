import classNames from 'classnames';

import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface TokenStyle extends Web3AliasToken {
  componentCls: string;
}

const getTokenStyle: GenerateStyle<TokenStyle> = (token) => {
  return {
    [`${token.componentCls}-output`]: {
      '.ant-input-number': {
        boxShadow: 'none !important',

        input: {
          padding: 0,
          fontSize: 24,
          lineHeight: 1.5,
          fontWeight: 600,
          color: '#000000db',

          '&::placeholder': {
            fontWeight: 'normal',
          },
        },
      },
    },

    [`${token.componentCls}-output-amount`]: {
      flex: 1,
      border: 'none',
    },
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('crypto-input', (token) => {
    const proListToken: TokenStyle = {
      ...token,
      componentCls: `.${prefixCls}`,
    };

    return [getTokenStyle(proListToken)];
  });
}

export function useCryptoInputStyle() {
  const prefixCls = 'web3-crypto-input';

  const { wrapSSR, hashId } = useStyle(prefixCls);

  const getClsName = (cls: string, ...extraCls: (string | undefined)[]) =>
    classNames(`${prefixCls}-${cls}`, hashId, ...extraCls);

  return {
    wrapSSR,
    getClsName,
  };
}
