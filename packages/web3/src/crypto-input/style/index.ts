import classNames from 'classnames';

import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';
import { CRYPTO_INPUT_TOKEN } from '../constants';

export interface TokenStyle extends Web3AliasToken {
  componentCls: string;
}

const getTokenStyle: GenerateStyle<TokenStyle> = (token) => {
  const {
    componentCls,
    antCls,
    paddingXS,
    padding,
    colorBorder,
    borderRadiusLG,
    fontWeightStrong,
    colorTextTertiary,
    marginSM,
    marginXS,
    colorInfoText,
    lineHeightSM,
    lineHeightHeading1,
    lineHeightHeading3,
  } = token;

  const { inputFontSize, inputFontSizeSM, inputFontSizeLG, paddingInline, paddingBlock } =
    CRYPTO_INPUT_TOKEN;

  return {
    [`${componentCls}-wrapper`]: {
      paddingBlock: paddingXS,
      paddingInline: padding,
      border: `1px solid ${colorBorder}`,
      borderRadius: borderRadiusLG,
      rowGap: marginXS,
      width: '100%',
      boxSizing: 'border-box',

      [`${antCls}-input-number`]: {
        fontSize: inputFontSize,

        [`${antCls}-input-number-input`]: {
          fontWeight: fontWeightStrong,
          lineHeight: lineHeightHeading3,
          paddingInline: paddingInline,
          paddingBlock: paddingBlock,

          '&::placeholder': {
            fontWeight: 'normal',
          },
        },
      },

      [`${antCls}-input-number-lg`]: {
        fontSize: inputFontSizeLG,

        [`${antCls}-input-number-input`]: {
          lineHeight: lineHeightHeading1,
        },
      },

      [`${antCls}-input-number-sm`]: {
        fontSize: inputFontSizeSM,

        [`${antCls}-input-number-input`]: {
          lineHeight: lineHeightSM,
        },
      },

      [`${antCls}-input-number-group-addon`]: {
        paddingInlineEnd: paddingInline,
      },
    },

    [`${componentCls}-amount`]: {
      flex: 1,
      border: 'none',
    },

    [`${componentCls}-footer`]: {
      [`${componentCls}-default-footer`]: {
        fontWeight: fontWeightStrong,

        [`${componentCls}-total-price`]: {
          flex: 1,
          color: colorTextTertiary,
          marginInlineEnd: marginSM,
        },

        [`${componentCls}-token-balance`]: {
          color: colorTextTertiary,
          flex: '0 0 auto',
        },

        [`${componentCls}-max-button`]: {
          marginInlineStart: marginXS,
          color: colorInfoText,
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
