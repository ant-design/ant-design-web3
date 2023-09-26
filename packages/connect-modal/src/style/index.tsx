import { genComponentStyleHook, type FullToken, type GenerateStyle } from 'antd/es/theme/internal';
import type React from 'react';


/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
}

export interface ConnectModalToken extends FullToken<'Modal'> {
  // Custom token here
}

const resetStyle: GenerateStyle<ConnectModalToken> = (token) => {
  const { componentCls } = token;

  return [
    {
      [componentCls]: {
        '.ant-modal-content': {
          padding: 0,
        },
        [`.ant-modal-close`]: {
          top: 24,
          '&:hover': {
            background: 'none'
          },
        },
        ['.ant-list-split .ant-list-item']: {
          borderBlockEnd: 'none',
        },
        ['.ant-list .ant-list-item']: {
          paddingBlock: 5,
        }
      },
    },
  ];
}

const genModalStyle: GenerateStyle<ConnectModalToken> = (token) => {
  const { componentCls } = token;

  return [
    // =========================== Reset ===========================
    resetStyle(token),
    // =========================== Modal ===========================
    {
      [componentCls]: {
        [`${componentCls}-title`]: {
          fontSize: 20,
          color: '#fff',
          lineHeight: '28px',
          fontWeight: 600,
          backgroundImage: 'linear-gradient(90deg, #1677ff 0%, rgba(0,0,0,0.85) 16%, #1677ff 48%, rgba(0,0,0,0.85) 67%, #1677ff 85%, rgba(0,0,0,0.85) 96%)',
          display: 'inline-block',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
        },
        [`${componentCls}-body`]: {
          height: 557,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          [`${componentCls}-list-panel, ${componentCls}-main-panel`]: {
            height: '100%',
            boxSizing: 'border-box',
            padding: 24,
          },
          [`${componentCls}-list-panel`]: {
            width: 268,
            borderRight: '1px solid #979797',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&.simple': {
              borderRight: 'none',
              width: '100%',
            },
            [`${componentCls}-header`]: {
              height: 30,
            },
            [`${componentCls}-list-container`]: {
              flexGrow: 1,
              marginBlock: token.marginSM,
              overflow: 'auto',
              [`${componentCls}-wallet-list`]: {
                [`${componentCls}-group`]: {
                  marginBlockEnd: token.marginSM,
                  [`${componentCls}-group-title`]: {
                    color: 'rgba(0,0,0,0.65)',
                    fontSize: 14,
                  },
                  [`${componentCls}-group-content`]: {
                    [`${componentCls}-item`]: {
                      cursor: 'pointer',
                      [`${componentCls}-extra`]: {
                        fontSize: token.fontSizeSM,
                        color: token.colorTextDescription,
                      },
                      [`${componentCls}-content`]: {
                        width: '70%',
                        display: 'flex',
                        alignItems: 'center',
                        [`${componentCls}-icon`]: {
                          borderRadius: 8,
                          border: `1px solid ${token.colorBorder}`,
                          overflow: 'hidden',
                        },
                        [`${componentCls}-name`]: {
                          fontSize: token.fontSizeLG,
                          justifySelf: 'flex-start',
                          marginInlineStart: token.marginSM,
                        }
                      },
                    },
                  },
                },
              },
            },

          },
          [`${componentCls}-main-panel`]: {
            flexGrow: 1,
            paddingInline: 32,
          }
        }
      },
    },
  ];
};

export default genComponentStyleHook(
  'Modal',
  (token) => {
    return [
      genModalStyle(token),
    ];
  },
);
