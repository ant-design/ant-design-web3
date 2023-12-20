import React from 'react';
import { mergeToken } from 'antd/lib/theme/internal';
import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type Web3AliasToken,
} from '../../theme/useStyle';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';
import { isDarkTheme } from '../utils';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
}

export interface ConnectModalToken extends Web3AliasToken {
  // Custom token here
  contentBorderRadius: number;
  selectedBg: string;
  selectedColor: string;
  hoverBg: string;
  splitColor: string;
  modalTitleStartColor: string;
  modalTitleEndColor: string;
  groupTextColor: string;
  listItemDescriptionColor: string;
  cardBg: string;
  iconSize: number;
}

const resetStyle = (token: ConnectModalToken): CSSInterpolation => {
  const { web3ComponentsCls: componentCls } = token;
  const isDark = isDarkTheme(token);
  return [
    {
      [`${componentCls}`]: {
        '.ant-modal-content': {
          padding: 0,
        },
        [`.ant-modal-close`]: {
          top: 24,
          color: isDark ? '#767676' : '#C9C9C9',
          '&:hover': {
            color: token.colorText,
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

const getThemeStyle = (token: ConnectModalToken): CSSInterpolation => {
  const { web3ComponentsCls: componentCls } = token;
  const isDark = isDarkTheme(token);
  return [
    {
      [`${componentCls}`]: {
        borderRadius: token.contentBorderRadius,
        overflow: 'hidden',
        paddingBlockEnd: 0,
        '.ant-modal-content': {
          background: token.colorBgContainer,
        },
      },

      [`${componentCls}-body`]: {
        minHeight: 557,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        '&.mini': {
          minHeight: 490,
        },

        [`${componentCls}-title`]: {
          fontSize: 20,
          lineHeight: '28px',
          fontWeight: 600,
          // color: token.colorText,
          backgroundImage: `linear-gradient(90deg, ${token.modalTitleStartColor} 0%, ${token.modalTitleEndColor} 16%, ${token.modalTitleStartColor} 48%, ${token.modalTitleEndColor} 67%, ${token.modalTitleStartColor} 85%, ${token.modalTitleEndColor} 96%, ${token.modalTitleStartColor} 100%)`,
          display: 'inline-block',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
          paddingInline: 6,
          color: 'red',
        },
        [`${componentCls}-list-panel, ${componentCls}-main-panel`]: {
          boxSizing: 'border-box',
        },
        [`${componentCls}-list-panel`]: {
          paddingInline: 18,
          paddingBlock: 24,
          width: 268,
          flexShrink: 0,
          borderRight: `1px solid ${token.splitColor}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
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
                  marginBlockStart: 8,
                  [`${componentCls}-wallet-item`]: {
                    cursor: 'pointer',
                    paddingInline: 6,
                    borderRadius: 8,
                    transition: 'background .3s, color .3s',
                    marginBlockEnd: 5,
                    border: 'none',
                    [`${componentCls}-extra`]: {
                      fontSize: token.fontSizeSM,
                      color: token.colorTextDescription,
                    },
                    [`${componentCls}-content`]: {
                      display: 'flex',
                      alignItems: 'center',
                      [`${componentCls}-icon`]: {
                        borderRadius: 8,
                        overflow: 'hidden',
                        width: token.iconSize,
                        height: token.iconSize,
                        fontSize: token.iconSize,
                        lineHeight: 1,
                        img: {
                          width: '100%',
                          height: '100%',
                        },
                      },
                      [`${componentCls}-name`]: {
                        fontSize: token.fontSizeLG,
                        justifySelf: 'flex-start',
                        marginInlineStart: token.marginSM,
                        color: token.colorText,
                      },
                    },
                    '&:last-child': {
                      marginBlockEnd: 0,
                    },
                    '&:hover': {
                      background: token.hoverBg,
                    },
                    '&.selected': {
                      background: token.selectedBg,
                      [`${componentCls}-name`]: {
                        color: token.selectedColor,
                      },
                    },
                  },
                },
              },
            },
          },
          [`${componentCls}-footer`]: {
            color: token.listItemDescriptionColor,
          },
        },
        [`${componentCls}-main-panel`]: {
          flexGrow: 1,
          boxSizing: 'border-box',
          paddingBlock: 24,
          paddingInline: 40,
          [`${componentCls}-main-panel-header`]: {
            display: 'flex',
            [`${componentCls}-main-panel-header-back`]: {
              width: 24,
              height: 24,
              cursor: 'pointer',
              borderRadius: 4,
              transition: 'background .3s',
              textAlign: 'center',
              color: token.colorText,
              '&:hover': {
                background: token.hoverBg,
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
            marginBlockStart: 48,
            [`${componentCls}-guide-title`]: {
              textAlign: 'center',
              fontSize: token.fontSizeXL,
              color: token.colorText,
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
                  color: token.colorText,
                  marginBlock: 0,
                },
                [`${componentCls}-guide-item-description`]: {
                  fontSize: token.fontSizeSM,
                  color: token.listItemDescriptionColor,
                  marginBlockStart: 4,
                  wordBreak: 'break-word',
                },
              },
            },
          },
          [`${componentCls}-get-btn`]: {
            borderRadius: 8,
            background: isDark
              ? new TinyColor(token.colorWhite).setAlpha(0.15).toRgbString()
              : token.colorPrimary,
            color: token.colorTextLightSolid,
            opacity: 0.8,
            fontSize: token.fontSizeLG,
            ['&:hover']: {
              opacity: 1,
            },
          },
          [`${componentCls}-more`]: {
            color: token.colorText,
            fontSize: token.fontSizeLG,
            textAlign: 'center',
            marginBlockStart: 16,
            opacity: 0.8,
            ['&:hover']: {
              opacity: 1,
            },
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
                '.anticon': {
                  fontSize: 48,
                  '>svg': {
                    width: '100%',
                    height: '100%',
                  },
                },
                '.ant-list-item-meta-title': {
                  color: token.colorText,
                },
                '.ant-list-item-meta-description': {
                  color: token.listItemDescriptionColor,
                },
                [`${componentCls}-get-wallet-btn`]: {
                  width: 66,
                  height: 32,
                  lineHeight: 0,
                  fontSize: token.fontSizeLG,
                  ['&:hover']: {
                    borderColor: isDark ? token.colorWhite : token.colorPrimary,
                    color: isDark ? token.colorWhite : token.colorPrimary,
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
                borderColor: isDark ? token.colorWhite : token.colorPrimary,
              },
              [`${componentCls}-card-icon`]: {
                width: 64,
                height: 64,
                fontSize: 64,
                lineHeight: 1,
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
            [`${componentCls}-qr-code-link`]: {
              marginTop: token.marginSM,
              textAlign: 'center',
              display: 'block',
            },
            [`${componentCls}-qr-code-link-loading`]: {
              cursor: 'not-allowed',
              color: token.colorTextDisabled,
            },
            [`${componentCls}-qr-code-tips`]: {
              color: token.listItemDescriptionColor,
              fontSize: token.fontSizeLG,
              position: 'relative',
              width: '100%',
              marginBlockStart: token.marginMD,
              [`${componentCls}-get-wallet-btn`]: {
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 66,
                height: 40,
                lineHeight: 0,
                ['&:hover']: {
                  borderColor: isDark ? token.colorWhite : token.colorPrimary,
                  color: isDark ? token.colorWhite : token.colorPrimary,
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
            background: token.colorBgContainer,
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
  ];
};

const genModalStyle: GenerateStyle<ConnectModalToken> = (token) => {
  return [
    // =========================== Reset ===========================
    resetStyle(token),
    // =========================== Modal ===========================
    getThemeStyle(token),
  ];
};

export function useStyle(prefixCls: string) {
  return useAntdStyle('ConnectModal', (token) => {
    const isDark = isDarkTheme(token);
    const connectModalToken: ConnectModalToken = mergeToken<ConnectModalToken>(token, {
      selectedBg: isDark ? token.colorWhite : token.colorPrimary,
      selectedColor: token.colorBgContainer,
      hoverBg: new TinyColor(isDark ? token.colorWhite : token.colorPrimary)
        .setAlpha(0.1)
        .onBackground(token.colorBgContainer)
        .toRgbString(),
      splitColor: new TinyColor(token.colorText).setAlpha(0.06).toRgbString(),
      modalTitleStartColor: isDark ? token.colorWhite : token.colorPrimary,
      modalTitleEndColor: new TinyColor('#000')
        .setAlpha(0.85)
        .onBackground(token.colorWhite)
        .toRgbString(),
      groupTextColor: new TinyColor(token.colorText).setAlpha(0.65).toRgbString(),
      listItemDescriptionColor: new TinyColor(token.colorText).setAlpha(0.65).toRgbString(),
      cardBg: new TinyColor(token.colorText).setAlpha(0.1).toRgbString(),
      iconSize: token.sizeXL,
      web3ComponentsCls: `.${prefixCls}`,
      contentBorderRadius: 24,
    });
    return [genModalStyle(connectModalToken)];
  });
}
