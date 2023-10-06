import {
  genComponentStyleHook,
  type FullToken,
  type GenerateStyle,
  mergeToken,
} from 'antd/es/theme/internal';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import { Theme } from '../interface';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
}

export interface ConnectModalToken extends FullToken<'Modal'> {
  // Custom token here
  mainBg: string;
  selectedColor: string;
  hoverBg: string;
  splitColor: string;
  modalTitleStartColor: string;
  modalTitleEndColor: string;
  mainTextColor: string;
  groupTextColor: string;
  guideTitleColor: string;
  listItemTitleColor: string;
  listItemDescriptionColor: string;
  buttonBg: string;
  cardBg: string;
}

const resetStyle = (token: ConnectModalToken, themeSuffix: Theme = 'light'): CSSInterpolation => {
  const { componentCls } = token;

  return [
    {
      [`${componentCls}-${themeSuffix}`]: {
        '.ant-modal-content': {
          padding: 0,
        },
        [`.ant-modal-close`]: {
          top: 13,
          color: token.listItemDescriptionColor,
          '&:hover': {
            color: token.mainTextColor,
            background: 'transparent',
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

const getThemeStyle = (
  token: ConnectModalToken,
  themeSuffix: Theme = 'light',
): CSSInterpolation => {
  const { componentCls } = token;
  return [
    {
      [`${componentCls}-${themeSuffix}`]: {
        borderRadius: token.borderRadiusLG,
        overflow: 'hidden',
        paddingBlockEnd: 0,
        '.ant-modal-content': {
          background: token.mainBg,
        },
        [`${componentCls}-title`]: {
          fontSize: 20,
          color: '#fff',
          lineHeight: '28px',
          fontWeight: 600,
          backgroundImage: `linear-gradient(90deg, ${token.modalTitleStartColor} 0%, ${token.modalTitleEndColor} 16%, ${token.modalTitleStartColor} 48%, ${token.modalTitleEndColor} 67%, ${token.modalTitleStartColor} 85%, ${token.modalTitleEndColor} 96%)`,
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
          position: 'relative',
          '&.mini': {
            height: 490,
          },
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
            padding: '10px 18px 24px',
            boxSizing: 'border-box',
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
                    color: token.groupTextColor,
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
                          background:
                            themeSuffix === 'light'
                              ? 'rgba(0, 0, 0, 0.25)'
                              : 'rgba(255, 255, 255, 0.25)',
                        },
                        [`${componentCls}-name`]: {
                          fontSize: token.fontSizeLG,
                          justifySelf: 'flex-start',
                          marginInlineStart: token.marginSM,
                          color: token.mainTextColor,
                        },
                      },
                      '&:last-child': {
                        marginBlockEnd: 0,
                      },
                      '&:hover': {
                        background: token.hoverBg,
                      },
                      '&.selected': {
                        background: token.selectedColor,
                        [`${componentCls}-name`]: {
                          color: '#fff',
                        },
                      },
                    },
                  },
                },
              },
            },
            [`${componentCls}-footer`]: {
              color: token.listItemDescriptionColor
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
                color: token.mainTextColor,
                '&:hover': {
                  background: token.hoverBg,
                },
              },
              [`${componentCls}-main-panel-header-title`]: {
                flex: 1,
                textAlign: 'center',
                fontSize: token.fontSizeLG,
                color: token.mainTextColor,
              },
            },
            [`${componentCls}-guide-panel`]: {
              marginBlockStart: 48,
              [`${componentCls}-guide-title`]: {
                textAlign: 'center',
                fontSize: token.fontSizeXL,
                color: token.guideTitleColor,
                marginBlock: 0,
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
                  flexShrink: 0,
                  width: 56,
                  height: 56,
                },
                [`${componentCls}-guide-item-content`]: {
                  marginInlineStart: 12,
                  [`${componentCls}-guide-item-title`]: {
                    fontSize: token.fontSizeLG,
                    color: token.listItemTitleColor,
                    marginBlock: 0,
                  },
                  [`${componentCls}-guide-item-description`]: {
                    fontSize: token.fontSizeSM,
                    color: token.listItemDescriptionColor,
                    marginBlockStart: 4,
                    wordBreak: 'break-all',
                  },
                },
              },
            },
            [`${componentCls}-get-btn`]: {
              background: token.buttonBg,
              color: '#fff',
              borderRadius: 8,
            },
            [`${componentCls}-more`]: {
              color: token.mainTextColor,
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
                  '.ant-avatar': {
                    background:
                      themeSuffix === 'light' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(255, 255, 255, 0.25)',
                  },
                  '.ant-list-item-meta-title': {
                    color: token.listItemTitleColor,
                  },
                  '.ant-list-item-meta-description': {
                    color: token.listItemDescriptionColor,
                  },
                  [`${componentCls}-get-wallet-btn`]: {
                    width: 66,
                    height: 32,
                    lineHeight: 0,
                    fontSize: token.fontSizeLG,
                    borderColor: token.buttonBg,
                    background: 'rgba(255,255,255,0.15)',
                    color: token.mainTextColor,
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
                  color: token.mainTextColor,
                  marginBlockEnd: 16,
                },
                p: {
                  fontSize: token.fontSizeSM,
                  color: token.groupTextColor,
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
                background: token.cardBg,
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
                    color: token.listItemTitleColor,
                  },
                  [`${componentCls}-card-description`]: {
                    fontSize: token.fontSize,
                    color: token.listItemDescriptionColor,
                  },
                },
                '&:last-child': {
                  marginBlockEnd: 0,
                },
              },
            },
            [`${componentCls}-qr-code-container`]: {
              [`${componentCls}-qr-code-box`]: {
                marginBlockStart: 12,
                marginInline: 'auto',
                [`${componentCls}-qr-code`]: {
                  marginInline: 'auto',
                },
              },
              [`${componentCls}-qr-code-tips`]: {
                color: token.listItemDescriptionColor,
                fontSize: token.fontSizeLG,
                position: 'relative',
                width: '100%',
                marginBlockStart: 58,
                [`${componentCls}-get-wallet-btn`]: {
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 66,
                  height: 40,
                  lineHeight: 0,
                  background: themeSuffix === 'light' ? '#fff' : 'rgba(255,255,255,0.15)',
                  borderColor: themeSuffix === 'light' ? token.buttonBg : 'transparent',
                  color: token.mainTextColor,
                  '&:hover': {
                    borderColor: token.colorPrimary,
                  },
                },
              },
            },
          },
          '&.simple': {
            [`${componentCls}-list-panel`]: {
              borderRight: 'none',
              width: '100%',
            },
            [`${componentCls}-main-panel`]: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              background: token.mainBg,
              [`${componentCls}-qr-code-box`]: {
                marginBlockStart: 24,
              },
              [`${componentCls}-qr-code-tips`]: {
                marginBlockStart: 46,
              },
            },
          },
        },
      },
    },
  ];
};

const genModalStyle: GenerateStyle<ConnectModalToken> = (token) => {
  const darkToken = mergeToken<ConnectModalToken>(token, {
    mainBg: '#1a1b1f',
    selectedColor: '#1677FF',
    hoverBg: 'rgba(255, 255, 255, 0.2)',
    splitColor: new TinyColor(token.colorTextLightSolid).setAlpha(0.06).toRgbString(),
    modalTitleStartColor: '#fff',
    modalTitleEndColor: '#4d4d4d',
    mainTextColor: '#fff',
    groupTextColor: 'rgba(255,255,255,0.65)',
    guideTitleColor: '#fff',
    listItemTitleColor: '#fff',
    listItemDescriptionColor: 'rgba(255,255,255,0.65)',
    buttonBg: 'rgba(255,255,255,0.15)',
    cardBg: 'rgba(255,255,255,0.1)',
  });

  return [
    // =========================== Reset ===========================
    resetStyle(token),
    resetStyle(darkToken, 'dark'),
    // =========================== Modal ===========================
    getThemeStyle(token),
    getThemeStyle(darkToken, 'dark'),
  ];
};

export default genComponentStyleHook('Modal', (token) => {
  const connectModalToken = mergeToken<ConnectModalToken>(token, {
    mainBg: '#ffffff',
    mainTextColor: 'rgba(0,0,0,0.85)',
    selectedColor: '#1677FF',
    hoverBg: 'rgba(0, 0, 0, 0.06)',
    splitColor: new TinyColor(token.colorText).setAlpha(0.06).toRgbString(),
    modalTitleStartColor: '#1677ff',
    modalTitleEndColor: 'rgba(0,0,0,0.85)',
    groupTextColor: 'rgba(0,0,0,0.65)',
    guideTitleColor: token.colorText,
    listItemTitleColor: token.colorText,
    listItemDescriptionColor: 'rgba(0,0,0,0.65)',
    buttonBg: 'rgba(0,0,0,0.85)',
    cardBg: 'rgba(0,0,0,0.1)',
  });
  return [genModalStyle(connectModalToken)];
});
