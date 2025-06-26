import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';

export interface ConnectPanelToken extends Web3AliasToken {
  componentCls: string;
}

const genConnectPanelStyle: GenerateStyle<ConnectPanelToken> = (token) => {
  return {
    [token.componentCls]: {
      display: 'flex',
      gap: 32,
      justifyContent: 'center',
      alignItems: 'center',
      [`${token.componentCls}-card`]: {
        width: 240,
        height: 260,
        background: '#fafaff',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        transition: 'box-shadow 0.2s',
        cursor: 'pointer',
        ':hover': {
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        },
      },
      [`${token.componentCls}-icon`]: {
        marginBottom: 24,
      },
      [`${token.componentCls}-name`]: {
        fontSize: 28,
        fontWeight: 500,
        marginBottom: 12,
      },
      [`${token.componentCls}-action`]: {
        color: '#666',
        fontSize: 22,
      },
    },
  };
};

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('ConnectPanel', (token) => {
    const panelToken: ConnectPanelToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genConnectPanelStyle(panelToken)];
  });
}
