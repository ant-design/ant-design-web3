import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface SwapTokenToken extends Web3AliasToken {
  // SwapToken token here
  componentCls: string;
}

const genSwapTokenStyle: GenerateStyle<SwapTokenToken> = (token) => {
  const { componentCls, antCls, colorTextSecondary, colorPrimary, colorBorder, colorBgContainer } =
    token;

  return {
    [`${componentCls}-content`]: {
      width: 600,
      position: 'relative',
      margin: '0 auto',
      [`${componentCls}-background`]: {
        img: {
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
        },
      },
      [`${componentCls}-main-content`]: {
        padding: '14px 18px',
        position: 'relative',
        zIndex: 1,
      },
      [`${componentCls}-crypto-input`]: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        padding: '36px 32px',
        boxSizing: 'border-box',
        [`${componentCls}-crypto-input-left`]: {
          [`${componentCls}-title`]: {
            color: colorTextSecondary,
            marginBottom: 8,
          },
          input: {
            fontSize: 40,
            padding: 0,
            border: 'none',
            lineHeight: 1,
            '&:focus, &:focus-within': {
              boxShadow: 'none',
            },
            '&:active': {
              color: colorPrimary,
            },
          },
        },
        [`${componentCls}-crypto-input-right`]: {
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          [`${componentCls}-select`]: {
            width: '100px',
            height: '40px',
            borderRadius: '20px',
            border: `1px solid ${colorBorder}`,
            padding: '7px',
          },
          [`${componentCls}-select-text`]: {
            minWidth: 152,
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 8,
            padding: 7,
            borderRadius: 40,
            border: '1px solid #e6ecf4',
            boxSizing: 'border-box',
            boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 2%)',

            '&:hover': {
              background:
                'linear-gradient(#fbfcfd, #fbfcfd) padding-box, linear-gradient(102deg, #326cff, #6effff) border-box',
              border: '1px solid transparent',
            },
            '&:active': {
              background: '#f7f8fa',
            },
          },
          [`${componentCls}-balance`]: {
            color: colorTextSecondary,
            marginTop: 8,
            width: 'max-content',
          },
        },
      },
      [`${componentCls}-swap-icon`]: {
        position: 'absolute',
        zIndex: 2,
        left: 273,
        top: 198,
        width: 54,
        height: 54,
        padding: 10,
        backgroundColor: colorBgContainer,
        borderRadius: '50%',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 10%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
      [`${componentCls}-operation`]: {
        paddingInline: 16,
        position: 'relative',
        zIndex: 2,
      },
      [`${componentCls}-btn`]: {
        color: '#fff',
      },
      [`${componentCls}-input-value`]: {
        fontSize: 40,
        fontWeight: 400,
        maxWidth: 310,
        overflow: 'scroll',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      [`${componentCls}-btn-container`]: {
        position: 'relative',
        height: 10,
        background: '#a8a8a8',
        margin: '0 auto',
        width: '80%',
        filter: 'blur(10px)',
        zIndex: 1,
        top: -5,
      },
      [`${componentCls}-under-button`]: {
        paddingInline: 16,
        position: 'relative',
        transform: 'translateY(-12px)',
        zIndex: 1,
      },
      [`${componentCls}-token-selector`]: {
        [`& ${antCls}-select-selection-item`]: {
          color: 'rgba(0, 0, 0, 0.8)',
          fontWeight: 'bold',
        },
        [`& ${antCls}-select-selector`]: {
          minWidth: 152,
          borderRadius: 464,
          background: '#fbfcfd',
          boxSizing: 'border-box',
          border: '1px solid #e6ecf4',
          boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.02)',
          transition: 'background 0.3s ease',
          '&:hover': {
            background:
              'linear-gradient(#fbfcfd, #fbfcfd) padding-box, linear-gradient(102deg, #326cff, #6effff) border-box',
            border: '1px solid transparent',
          },
          '&:active': {
            background:
              'linear-gradient(#fbfcfd, #fbfcfd) padding-box, linear-gradient(102deg, #326cff, #6effff) border-box',
            border: '1px solid transparent',
          },
        },
      },
    },
    [`${componentCls}-token-selector-dropdown`]: {
      [`& ${antCls}-select-item`]: {
        '&:hover': {
          background: '#f7f8fa',
        },
        '&:active': {
          fontWeight: 'bold',
        },
      },
    },
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('SwapToken', (token) => {
    const swapTokenToken: SwapTokenToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genSwapTokenStyle(swapTokenToken)];
  });
}
