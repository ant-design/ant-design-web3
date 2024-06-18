import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface PayPanelToken extends Web3AliasToken {
  componentCls: string;
}

const genPaypanelStyle: GenerateStyle<PayPanelToken> = (token) => {
  return {
    [token.componentCls]: {
      [`${token.componentCls}-content`]: {
        [`${token.componentCls}-title`]: {
          fontSize: token.fontSizeHeading4,
          lineHeight: token.lineHeightHeading4,
          color: token.colorTextBase,
          paddingBottom: token.paddingContentVerticalLG,
        },
        [`${token.componentCls}-desc`]: {
          fontSize: token.fontSize,
          color: token.colorTextLabel,
          lineHeight: token.lineHeightSM,
        },
        [`${token.componentCls}-chainItem`]: {
          width: '100%',
          paddingBlock: token.paddingXS,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          [`${token.componentCls}-chainInfo`]: {
            fontSize: token.fontSizeHeading5,
            display: 'flex',
            alignItems: 'center',
            [`${token.componentCls}-icon`]: {
              fontSize: token.fontSizeHeading1,
              paddingInlineEnd: token.paddingContentVerticalSM,
            },
            [`${token.componentCls}-type`]: {
              fontSize: token.fontSize,
              color: token.colorTextDescription,
              lineHeight: token.lineHeightSM,
            },
          },
          [`${token.componentCls}-gasInfo`]: {
            fontSize: token.fontSize,
            color: token.colorTextDescription,
            lineHeight: token.lineHeightSM,
          },
        },
        [`${token.componentCls}-code-title`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeightHeading4,
          color: token.colorTextBase,
          paddingBottom: token.paddingContentVertical,
        },
        [`${token.componentCls}-code-amount`]: {
          fontSize: token.fontSizeHeading1,
          lineHeight: token.lineHeightHeading1,
          color: token.colorTextBase,
          paddingBlock: token.paddingContentVertical,
        },

        [`${token.componentCls}-code-content`]: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          [`${token.componentCls}-code-desc`]: {
            fontSize: token.fontSize,
            color: token.colorTextLabel,
            lineHeight: token.lineHeightSM,
            width: '100%',
          },
          [`${token.componentCls}-code-tips`]: {
            fontSize: token.fontSize,
            lineHeight: token.lineHeightHeading1,
            paddingBlock: token.paddingContentVertical,
            color: token.colorTextDescription,
            display: 'flex',
            gap: token.paddingContentVerticalSM,
          },
        },
      },
    },
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('PayPanel', (token) => {
    const proListToken: PayPanelToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genPaypanelStyle(proListToken)];
  });
}
