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
    InputNumber: { inputFontSize, inputFontSizeLG, inputFontSizeSM } = {},
  } = token;

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
      },

      [`${antCls}-input-number-lg`]: {
        fontSize: inputFontSizeLG,
      },

      [`${antCls}-input-number-sm`]: {
        fontSize: inputFontSizeSM,
      },
    },

    [`${componentCls}-amount`]: {
      flex: 1,
      border: 'none',
    },

    [`${componentCls}-footer`]: {
      '.default-footer': {
        fontWeight: fontWeightStrong,

        '.total-price': {
          flex: 1,
          color: colorTextTertiary,
          marginInlineEnd: marginSM,
        },

        '.token-balance': {
          color: colorTextTertiary,
          flex: '0 0 auto',
        },

        '.max-button': {
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
      InputNumber: {
        ...CRYPTO_INPUT_TOKEN,
        ...token.InputNumber!,
      },
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
