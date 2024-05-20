import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface SwapToken extends Web3AliasToken {
  componentCls: string;
}

const genSwapStyle: GenerateStyle<SwapToken> = (token) => {
  return {
    [token.componentCls]: {
      paddingInline: 24,
      paddingBlock: '60px 24px',
    },
    [`${token.componentCls}-token-wrapper`]: {
      padding: 16,
      border: '1px solid #0000000f',
      borderRadius: 8,
      marginBlockEnd: 12,
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
    [`${token.componentCls}-token-select`]: {
      background: '#fff',
      borderRadius: 8,
      padding: 8,
      boxShadow:
        '0px 9px 28px 8px #0000000d, 0px 6px 16px 0px #00000014, 0px 3px 6px -4px #0000001f',

      '.ant-input-group-wrapper': {
        transition: 'all linear 0.2s',
        border: '1px solid #0000000f',
        borderRadius: 4,

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
    [`${token.componentCls}-token-selected`]: {
      paddingBlock: 5,
      paddingInline: 8,
      lineHeight: 1.5,
      fontSize: 16,
      borderRadius: 20,
      background: '#00000008',
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
  return useAntdStyle('swap', (token) => {
    const proListToken: SwapToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genSwapStyle(proListToken)];
  });
}
