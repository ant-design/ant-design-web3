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
    [`${token.componentCls}-wrapper`]: {
      paddingBlock: token.paddingXS,
      paddingInline: token.padding,
      border: `1px solid ${token.colorBorder}`,
      borderRadius: token.borderRadiusLG,
      rowGap: 8,

      '.ant-input-number-group-wrapper': {
        width: '100%',
      },
    },

    [`${token.componentCls}-amount`]: {
      flex: 1,
      border: 'none',
    },

    [`${token.componentCls}-footer`]: {
      '.default-footer': {
        fontWeight: token.fontWeightStrong,

        '.total-price': {
          flex: 1,
          color: token.colorTextTertiary,
          marginInlineEnd: token.marginSM,
        },

        '.token-balance': {
          color: token.colorTextTertiary,
          flex: '0 0 auto',
        },

        '.max-button': {
          marginInlineStart: token.marginXS,
          color: token.colorInfoText,
        },
      },
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

export function useCryptoInputStyle(): {
  wrapSSR: UseStyleResult['wrapSSR'];
  getClsName: (name: string) => string;
} {
  const prefixCls = 'web3-crypto-input';

  const { wrapSSR, hashId } = useStyle(prefixCls);

  const getClsName = (cls: string, ...extraCls: (string | undefined)[]) =>
    classNames(`${prefixCls}-${cls}`, hashId, ...extraCls);

  return {
    wrapSSR,
    getClsName,
  };
}
