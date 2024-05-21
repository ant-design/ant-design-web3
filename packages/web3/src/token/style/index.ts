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
    /**
     * single token select style
     */
    [`${token.componentCls}-token-select`]: {
      background: '#fff',
      width: 196,
      borderRadius: 8,
      paddingBlock: 8,
      boxShadow:
        '0px 9px 28px 8px #0000000d, 0px 6px 16px 0px #00000014, 0px 3px 6px -4px #0000001f',

      '.ant-input-wrapper': {
        marginInline: 8,
        marginBlockEnd: 8,
        transition: 'all linear 0.2s',
        border: '1px solid #0000000f',
        borderRadius: 4,
        width: 'auto',

        '&:hover': {
          borderColor: '#1677ff',
        },

        '.ant-input-group-addon,.ant-input-outlined': {
          background: '#fff',
          border: 'none !important',
          boxShadow: 'none',
        },
      },
    },
    [`${token.componentCls}-token-wrapper`]: {
      paddingBlock: 12,
      paddingInline: 16,
      fontSize: 16,
      color: '#000000e0',
      lineHeight: 1.5,
      transition: 'all linear 0.2s',

      '&:hover': {
        background: '#00000008',
      },

      '.icon': {
        width: 24,
        height: 24,
      },
    },
    [`${token.componentCls}-token-selected`]: {
      width: 'fit-content',
      paddingBlock: 5,
      paddingInline: 8,
      lineHeight: 1.5,
      fontSize: 16,
      borderRadius: 20,
      background: '#00000008',

      '.icon': {
        fontSize: 12,
        marginInlineStart: 8,
        marginBlockStart: 3,
      },
    },

    [token.componentCls]: {
      paddingInline: 24,
      paddingBlock: '60px 24px',
    },
    [`${token.componentCls}-token-profile`]: {
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

    [`${token.componentCls}-token-amount`]: {
      flex: 1,
      border: 'none',
    },

    [`${token.componentCls}-submit`]: {
      marginBlockStart: 12,
      width: '100%',
    },
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('token', (token) => {
    const proListToken: TokenStyle = {
      ...token,
      componentCls: `.${prefixCls}`,
    };

    return [getTokenStyle(proListToken)];
  });
}

export function useTokenStyle() {
  const prefixCls = 'web3-token';

  const { wrapSSR, hashId } = useStyle(prefixCls);

  const getClsName = (cls: string) => classNames(`${prefixCls}-${cls}`, hashId);

  return {
    wrapSSR,
    getClsName,
  };
}
