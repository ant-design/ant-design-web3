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
      boxSizing: 'border-box',
      width: '100%',

      '.ant-input-number': {
        input: {
          padding: 0,
          fontSize: token.fontSizeHeading3,
          lineHeight: token.lineHeightLG,
          fontWeight: token.fontWeightStrong,
          color: token.colorBgSpotlight,

          '&::placeholder': {
            fontWeight: 'normal',
          },
        },
      },
    },

    [`${token.componentCls}-amount`]: {
      flex: 1,
      border: 'none',
    },

    [`${token.componentCls}-footer`]: {
      '.default-footer': {
        color: token.colorTextTertiary,
        fontWeight: token.fontWeightStrong,

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
