import {
  genComponentStyleHook,
  type FullToken,
  type GenerateStyle,
  mergeToken,
} from 'antd/es/theme/internal';
import { TinyColor } from '@ctrl/tinycolor';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
}

export interface ConnectModalToken extends FullToken<'Modal'> {
  // Custom token here
  selectedColor: string;
  splitColor: string;
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
            background: 'none',
          },
        },
        ['.ant-list-split .ant-list-item']: {
          borderBlockEnd: 'none',
        },
        ['.ant-list .ant-list-item']: {
          paddingBlock: 5,
        },
      },
    },
  ];
};

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
          backgroundImage:
            'linear-gradient(90deg, #1677ff 0%, rgba(0,0,0,0.85) 16%, #1677ff 48%, rgba(0,0,0,0.85) 67%, #1677ff 85%, rgba(0,0,0,0.85) 96%)',
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
            padding: 12,
          },
          [`${componentCls}-list-panel`]: {
            width: 268,
            flexShrink: 0,
            borderRight: `1px solid ${token.splitColor}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 18,
            boxSizing: 'border-box',
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
                    paddingInline: 6,
                  },
                  [`${componentCls}-group-content`]: {
                    [`${componentCls}-item`]: {
                      cursor: 'pointer',
                      paddingInline: 6,
                      borderRadius: 8,
                      transition: 'background .3s, color .3s',
                      marginBlockEnd: 5,
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
                          overflow: 'hidden',
                        },
                        [`${componentCls}-name`]: {
                          fontSize: token.fontSizeLG,
                          justifySelf: 'flex-start',
                          marginInlineStart: token.marginSM,
                        },
                      },
                      '&:last-child': {
                        marginBlockEnd: 0,
                      },
                      '&:hover': {
                        background: token.colorBgTextHover,
                      },
                      '&.selected': {
                        background: token.selectedColor,
                        color: token.colorTextLightSolid,
                        [`${componentCls}-extra`]: {
                          color: new TinyColor(token.colorTextLightSolid)
                            .setAlpha(0.8)
                            .onBackground(token.selectedColor)
                            .toHexShortString(),
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          [`${componentCls}-main-panel`]: {
            flexGrow: 1,
            boxSizing: 'border-box',
            [`${componentCls}-main-panel-header`]: {
              display: 'flex',
              [`${componentCls}-main-panel-header-back`]: {
                width: 24,
                height: 24,
                cursor: 'pointer',
                borderRadius: 4,
                transition: 'background .3s',
                textAlign: 'center',
                '&:hover': {
                  background: token.colorBgTextHover,
                },
              },
              [`${componentCls}-main-panel-header-title`]: {
                flex: 1,
                textAlign: 'center',
                fontSize: token.fontSizeLG,
                color: token.colorText,
              },
            },
            [`${componentCls}-guide-panel`]: {
              [`${componentCls}-guide-title`]: {
                textAlign: 'center',
                fontSize: token.fontSizeXL,
                color: token.colorText,
              },
            },
            [`${componentCls}-guide-list`]: {
              marginBlock: 28,
              maxHeight: 300,
              overflow: 'auto',
              [`${componentCls}-guide-item`]: {
                display: 'flex',
                alignItems: 'center',
                marginBlockEnd: 32,
                '&:last-child': {
                  marginBlockEnd: 0,
                },
                [`${componentCls}-guide-item-icon`]: {
                  width: 56,
                  height: 56,
                },
                [`${componentCls}-guide-item-content`]: {
                  marginInlineStart: 12,
                  [`${componentCls}-guide-item-title`]: {
                    fontSize: token.fontSizeLG,
                    color: token.colorText,
                    marginBlock: 0,
                  },
                  [`${componentCls}-guide-item-description`]: {
                    fontSize: token.fontSizeSM,
                    color: token.colorTextDescription,
                    marginBlockStart: 4,
                    wordBreak: 'break-all',
                  },
                },
              },
            },
            [`${componentCls}-get-btn`]: {
              background: 'rgba(0,0,0,0.85)',
              color: '#fff',
              borderRadius: 8,
            },
            [`${componentCls}-more`]: {
              color: token.colorText,
              fontSize: token.fontSizeLG,
              textAlign: 'center',
              marginBlockStart: 16,
            },
            [`${componentCls}-get-wallet-panel`]: {
              position: 'relative',
              height: '100%',
              [`${componentCls}-list`]: {
                marginBlockStart: 32,
                maxHeight: 350,
                overflow: 'auto',
                [`${componentCls}-item`]: {
                  marginBlockEnd: 24,
                  '&:last-child': {
                    marginBlockEnd: 0,
                  },
                  [`${componentCls}-get-wallet-btn`]: {
                    width: 66,
                    height: 32,
                    lineHeight: 0,
                    fontSize: token.fontSizeLG,
                    borderColor: token.colorText,
                    '&:hover': {
                      borderColor: token.colorPrimary,
                    },
                  },
                },
              },
              [`${componentCls}-info`]: {
                position: 'absolute',
                bottom: 0,
                width: 312,
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                h3: {
                  fontSize: token.fontSizeLG,
                  color: token.colorText,
                  marginBlockEnd: 16,
                },
                p: {
                  fontSize: token.fontSizeSM,
                  color: token.colorTextDescription,
                  lineHeight: 1.5,
                },
              },
            },
            [`${componentCls}-card-list`]: {
              marginBlockStart: 25,
              [`${componentCls}-card-item`]: {
                width: '100%',
                height: 220,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBlockEnd: 16,
                boxSizing: 'border-box',
                paddingInline: 58,
                background: new TinyColor(token.colorText).setAlpha(0.06).toRgbString(),
                borderRadius: 16,
                cursor: 'pointer',
                border: `1px solid transparent`,
                transition: 'border-color .3s',
                '&:hover': {
                  borderColor: token.selectedColor,
                },
                [`${componentCls}-card-icon`]: {
                  width: 64,
                  height: 64,
                  flexShrink: 0,
                  img: {
                    width: '100%',
                    height: '100%',
                  },
                },
                [`${componentCls}-card-content`]: {
                  marginInlineStart: 12,
                  [`${componentCls}-card-title`]: {
                    fontSize: token.fontSizeLG,
                    color: token.colorText,
                  },
                  [`${componentCls}-card-description`]: {
                    fontSize: token.fontSize,
                    color: new TinyColor(token.colorText).setAlpha(0.65).toRgbString(),
                  },
                },
                '&:last-child': {
                  marginBlockEnd: 0,
                },
              },
            },
            [`${componentCls}-qr-code`]: {
              [`${componentCls}-qr-code-box`]: {
                marginBlockStart: 12,
                marginInline: 'auto',
              },
              [`${componentCls}-qr-code-tips`]: {
                color: new TinyColor(token.colorText).setAlpha(0.65).toRgbString(),
                fontSize: token.fontSizeLG,
                position: 'relative',
                width: 400,
                marginBlockStart: 27,
                [`${componentCls}-get-wallet-btn`]: {
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 66,
                  height: 40,
                  lineHeight: 0,
                },
              },
            },
          },
        },
      },
    },
  ];
};

export default genComponentStyleHook('Modal', (token) => {
  const connectModalToken = mergeToken<ConnectModalToken>(token, {
    selectedColor: '#1677FF',
    splitColor: new TinyColor(token.colorText).setAlpha(0.06).toRgbString(),
  });
  return [genModalStyle(connectModalToken)];
});
