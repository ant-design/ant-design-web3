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
    [`${token.componentCls}-select`]: {
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
    [`${token.componentCls}-profile`]: {
      fontSize: 16,
      color: '#000000e0',
      lineHeight: 1.5,
      transition: 'all linear 0.2s',

      '&.selection': {
        paddingBlock: 12,
        paddingInline: 16,

        '&:hover': {
          background: '#00000008',
        },
      },

      '&.selected': {
        borderRadius: 20,
        color: '#000',
      },

      '.icon': {
        width: 24,
        height: 24,
        position: 'relative',

        '.anticon': {
          fontSize: 24,
        },

        img: {
          width: '100%',
          height: '100%',
        },
      },
    },
    [`${token.componentCls}-selected`]: {
      width: 'fit-content',
      paddingBlock: 5,
      paddingInline: 8,
      borderRadius: 20,
      background: '#00000008',
      fontSize: 16,
      lineHeight: 1.5,

      '.anticon-down': {
        fontSize: 12,
        marginInlineStart: 8,
        marginBlockStart: 3,
      },
    },
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

  const getClsName = (cls: string, ...extraCls: (string | undefined)[]) =>
    classNames(`${prefixCls}-${cls}`, hashId, ...extraCls);

  return {
    wrapSSR,
    getClsName,
  };
}
