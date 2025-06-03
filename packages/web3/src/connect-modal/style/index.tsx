import type { CSSInterpolation } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';

import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../theme/useStyle';
import { isDarkTheme } from '../utils';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
  selectedWalletBg: string;
  selectedWalletColor: string;
  hoverWalletBg: string;
  panelSplitLineColor: string;
  modalTitleStartColor: string;
  modalTitleEndColor: string;
  walletGroupTextColor: string;
  descriptionColor: string;
  getWalletCardBg: string;
  walletIconSize: number;
  simpleGuideBg: string;
  walletListWidth: number;
  walletListHeight: number;
  modalMinHeight: number;
}

type ConnectModalToken = Web3AliasToken & ComponentToken;

const resetStyle = (token: ConnectModalToken): CSSInterpolation => {
  const { web3ComponentsCls: componentCls } = token;
  return [
    {
      [`${componentCls}`]: {
        '.ant-modal-content': {
          padding: 0,
        },
        '.ant-modal-body': {
          padding: 0,
        },
        '.ant-list-split .ant-list-item': {
          borderBlockEnd: 'none',
        },
        '.ant-list .ant-list-item': {
          paddingBlock: 5,
        },
      },
    },
  ];
};

const getThemeStyle = (token: ConnectModalToken): CSSInterpolation => {
  const { web3ComponentsCls: componentCls } = token;

  return [
    {
      [`${componentCls}`]: {
        paddingBlockEnd: 0,
      },

      [`${componentCls}-body`]: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        minHeight: token.modalMinHeight,
        [`${componentCls}-title`]: {
          fontSize: token.fontSizeXL,
          lineHeight: '28px',
          fontWeight: 600,
          backgroundImage: `linear-gradient(90deg, ${token.modalTitleStartColor} 0%, ${token.modalTitleEndColor} 16%, ${token.modalTitleStartColor} 48%, ${token.modalTitleEndColor} 67%, ${token.modalTitleStartColor} 85%, ${token.modalTitleEndColor} 96%, ${token.modalTitleStartColor} 100%)`,
          display: 'inline-block',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
          paddingInline: token.paddingXS,
          color: 'red',
        },
        [`${componentCls}-list-panel, ${componentCls}-main-panel`]: {
          boxSizing: 'border-box',
        },
        [`${componentCls}-list-panel`]: {
          paddingTop: token.paddingLG,
          paddingBottom: token.paddingContentVerticalLG,
          width: token.walletListWidth,
          flexShrink: 0,
          borderRight: `1px solid ${token.panelSplitLineColor}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          [`${componentCls}-header`]: {
            paddingInline: token.paddingMD,
            height: 30,
            borderBlockEnd: token.wireframe ? `1px solid ${token.panelSplitLineColor}` : 'none',
            paddingBlockEnd: token.wireframe ? token.paddingLG : 0,
          },
          [`${componentCls}-list`]: {
            display: 'flex',
            flexDirection: 'column',
            marginBlockStart: token.marginSM,
            height: token.walletListHeight,
          },
          [`${componentCls}-list-container`]: {
            paddingInline: token.paddingMD,
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'unset',
            height: '100%',
            flexGrow: 1,
            [`${componentCls}-wallet-list`]: {
              overflow: 'scroll',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              [`${componentCls}-group`]: {
                marginBlockEnd: token.marginSM,
                [`${componentCls}-group-title`]: {
                  color: token.walletGroupTextColor,
                  fontSize: token.fontSizeSM,
                  paddingInline: token.paddingXS,
                },
                [`${componentCls}-group-content`]: {
                  marginBlockStart: token.marginSM,
                  [`${componentCls}-wallet-item`]: {
                    cursor: 'pointer',
                    paddingInline: token.paddingSM,
                    borderRadius: 8,
                    transition: 'background .3s, color .3s',
                    marginBlockEnd: 5,
                    border: 'none',
                    width: '100%',
                    [`${componentCls}-content`]: {
                      display: 'flex',
                      flex: 1,
                      alignItems: 'center',
                      width: '100%',
                      overflow: 'hidden',
                      [`${componentCls}-icon`]: {
                        borderRadius: 8,
                        overflow: 'hidden',
                        width: token.walletIconSize,
                        height: token.walletIconSize,
                        fontSize: token.walletIconSize,
                        lineHeight: `${token.walletIconSize}px`,
                        flexShrink: 0,
                      },
                      [`${componentCls}-img`]: {
                        borderRadius: 8,
                        overflow: 'hidden',
                        width: token.walletIconSize,
                        height: token.walletIconSize,
                        flexShrink: 0,
                      },
                      [`${componentCls}-name`]: {
                        fontSize: token.fontSizeLG,
                        justifySelf: 'flex-start',
                        marginInlineStart: token.marginSM,
                        color: token.colorText,
                        wordBreak: 'break-word',
                        flex: 1,
                        marginInlineEnd: token.marginXS,
                      },
                    },
                    [`${componentCls}-qr-icon-empty`]: {
                      width: 30,
                    },
                    [`${componentCls}-plugin-tag`]: {
                      '&:not(:disabled):not(.ant-btn-disabled):hover': {
                        color: token.colorPrimaryTextHover,
                        borderColor: token.colorPrimaryTextHover,
                      },
                    },
                    [`${componentCls}-qr-btn`]: {
                      '&:hover': {
                        color: token.colorPrimaryTextHover,
                        borderColor: token.colorPrimaryTextHover,
                      },
                    },
                    '&:last-child': {
                      marginBlockEnd: 0,
                    },
                    '&:hover:not(.disabled)': {
                      background: token.hoverWalletBg,
                      [`&:has(${componentCls}-qr-btn:not(:hover))`]: {
                        [`${componentCls}-plugin-tag:not(:disabled)`]: {
                          color: token.colorPrimaryTextHover,
                          borderColor: token.colorPrimaryTextHover,
                          background: token.Button?.defaultHoverBg,
                        },
                      },
                      [`&:not(:has(${componentCls}-plugin-tag))`]: {
                        [`${componentCls}-qr-btn`]: {
                          color: token.colorPrimaryTextHover,
                          borderColor: token.colorPrimaryTextHover,
                          background: token.Button?.defaultHoverBg,
                        },
                      },
                      [`&:has(${componentCls}-plugin-tag:disabled)`]: {
                        [`${componentCls}-qr-btn`]: {
                          color: token.colorPrimaryTextHover,
                          borderColor: token.colorPrimaryTextHover,
                          background: token.Button?.defaultHoverBg,
                        },
                      },
                    },
                    '&.selected': {
                      background: token.selectedWalletBg,
                    },
                    '&.disabled': {
                      cursor: 'not-allowed',
                      opacity: 0.65,
                      '&:hover': {
                        background: 'transparent',
                      },
                    },
                  },
                },
              },
            },
            [`${componentCls}-wallets-empty`]: {
              marginTop: '50%',
              transform: 'translateY(-50%)',
            },
          },
          [`${componentCls}-footer-container`]: {
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: '100%',
              width: `calc(100% - ${token.paddingMD * 2}px)`,
              left: '50%',
              transform: 'translateX(-50%)',
              height: token.controlHeightLG,
              backgroundImage: `linear-gradient(to bottom, ${new TinyColor(
                token.Modal?.contentBg || token.colorBgContainer,
              )
                .setAlpha(0)
                .toRgbString()}, ${new TinyColor(token.Modal?.contentBg || token.colorBgContainer)
                .setAlpha(1)
                .toRgbString()})`,
              pointerEvents: 'none',
            },
          },
          [`${componentCls}-footer`]: {
            color: token.descriptionColor,
            borderBlockStart: `1px solid ${token.panelSplitLineColor}`,
            paddingInline: token.paddingMD,
            paddingBlockStart: token.padding,
          },
          [`${componentCls}-simple-guide`]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: token.descriptionColor,
            margin: `${token.marginSM}px ${token.marginMD}px`,
            padding: `${token.paddingXS}px ${token.paddingMD}px`,
            borderRadius: 18,
            background: token.simpleGuideBg,
            [`${componentCls}-simple-guide-right`]: {
              fontWeight: 400,
              padding: '0 15px',
            },
          },
        },
        [`${componentCls}-main-panel`]: {
          flexGrow: 1,
          boxSizing: 'border-box',
          paddingBlock: token.paddingLG,
          paddingInline: token.paddingXL,
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
                background: token.hoverWalletBg,
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
            marginBlockStart: token.marginXXL,
            [`${componentCls}-guide-title`]: {
              textAlign: 'center',
              fontSize: token.fontSizeXL,
              color: token.colorText,
              marginBlock: 0,
            },
          },
          [`${componentCls}-simple-guide-panel`]: {
            marginBlockStart: 0,
            [`${componentCls}-guide-list`]: {
              maxHeight: 400,
            },
          },
          [`${componentCls}-guide-list`]: {
            marginBlock: token.marginLG,
            maxHeight: 300,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            [`${componentCls}-guide-item`]: {
              display: 'flex',
              alignItems: 'center',
              marginBlockEnd: token.marginXL,
              '&:last-child': {
                marginBlockEnd: 0,
              },
              [`${componentCls}-guide-item-icon`]: {
                flexShrink: 0,
                width: 56,
                height: 56,
              },
              [`${componentCls}-guide-item-content`]: {
                marginInlineStart: token.marginSM,
                [`${componentCls}-guide-item-title`]: {
                  fontSize: token.fontSizeLG,
                  color: token.colorText,
                  marginBlock: 0,
                },
                [`${componentCls}-guide-item-description`]: {
                  fontSize: token.fontSizeSM,
                  color: token.descriptionColor,
                  marginBlockStart: token.marginXXS,
                  wordBreak: 'break-word',
                },
              },
            },
          },
          [`${componentCls}-more`]: {
            color: token.colorText,
            fontSize: token.fontSizeLG,
            textAlign: 'center',
            marginBlockStart: token.margin,
            '&:hover': {
              opacity: 1,
            },
          },
          [`${componentCls}-get-wallet-panel`]: {
            position: 'relative',
            height: '100%',
            [`${componentCls}-list`]: {
              marginBlockStart: token.marginXL,
              height: 286,
              overflow: 'auto',
              [`${componentCls}-item`]: {
                marginBlockEnd: token.marginLG,
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
                  color: token.descriptionColor,
                },
                [`${componentCls}-get-wallet-btn`]: {
                  borderColor: token.colorPrimary,
                  color: token.colorPrimary,
                  opacity: 0.6,
                  '&:hover': {
                    opacity: 1,
                  },
                },
              },
            },
            [`${componentCls}-info`]: {
              width: 312,
              marginInline: 'auto',
              marginTop: token.marginXXL,
              textAlign: 'center',
              h3: {
                fontSize: token.fontSizeLG,
                color: token.colorText,
                marginBlockEnd: token.margin,
              },
              p: {
                fontSize: token.fontSizeSM,
                color: token.walletGroupTextColor,
                lineHeight: 1.5,
              },
            },
          },
          [`${componentCls}-card-list`]: {
            marginBlockStart: 25,
            height: '90%',
            overflow: 'auto',
            [`${componentCls}-card-item`]: {
              width: '100%',
              height: 116,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBlockEnd: token.margin,
              boxSizing: 'border-box',
              paddingInline: token.paddingXL,
              background: token.getWalletCardBg,
              borderRadius: token.borderRadiusSM,
              cursor: 'pointer',
              border: '1px solid transparent',
              transition: 'border-color .3s',
              '&:hover': {
                borderColor: token.colorPrimary,
              },
              [`${componentCls}-card-icon`]: {
                width: 56,
                height: 56,
                fontSize: 56,
                lineHeight: 1,
                flexShrink: 0,
                img: {
                  width: '100%',
                  height: '100%',
                  verticalAlign: 'initial',
                },
              },
              [`${componentCls}-card-content`]: {
                marginInlineStart: token.marginSM,
                [`${componentCls}-card-title`]: {
                  fontSize: token.fontSizeLG,
                  color: token.colorText,
                },
                [`${componentCls}-card-description`]: {
                  fontSize: token.fontSize,
                  color: token.descriptionColor,
                },
              },
              '&:last-child': {
                marginBlockEnd: 0,
              },
            },
            [`${componentCls}-card-list-tips-title`]: {
              fontSize: token.fontSizeLG,
              color: token.colorText,
              fontWeight: token.fontWeightStrong,
            },
            [`${componentCls}-card-list-tips-description`]: {
              fontSize: token.fontSize,
              color: token.descriptionColor,
            },
          },
          [`${componentCls}-qr-code-container`]: {
            [`${componentCls}-qr-code-box`]: {
              marginBlockStart: token.marginSM,
              marginInline: 'auto',
              [`${componentCls}-qr-code`]: {
                marginInline: 'auto',
              },
            },
            [`${componentCls}-qr-code-link`]: {
              marginTop: token.marginSM,
              fontSize: token.fontSizeLG,
              textAlign: 'center',
              display: 'block',
              opacity: 0.6,
              color: token.colorPrimary,
              '&:hover': {
                color: token.colorPrimary,
                opacity: 1,
              },
            },
            [`${componentCls}-qr-code-link-loading`]: {
              cursor: 'not-allowed',
              color: token.colorTextDisabled,
            },
            [`${componentCls}-qr-code-tips`]: {
              color: token.descriptionColor,
              fontSize: token.fontSizeLG,
              position: 'relative',
              width: '100%',
              marginBlockStart: token.margin,
              [`${componentCls}-qr-code-tips-download`]: {
                textAlign: 'center',
              },
            },
          },
        },
        [`&${componentCls}-body-simple`]: {
          [`${componentCls}-list-panel`]: {
            borderRight: 'none',
            width: '100%',
            [`${componentCls}-list-container`]: {
              maxHeight: 372,
            },
          },
          [`${componentCls}-main-panel`]: {
            paddingInline: token.paddingLG,
            [`${componentCls}-qr-code-box`]: {
              marginBlockStart: token.marginLG,
            },
            [`${componentCls}-qr-code-tips`]: {
              marginBlockStart: token.margin,
            },
          },
        },
        [`${componentCls}-link-panel`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          flexDirection: 'column',

          '@keyframes ripple': {
            from: {
              transform: 'scale(1)',
              opacity: '1',
            },
            to: {
              transform: 'scale(2)',
              opacity: '0',
            },
          },
          [`${componentCls}-ripple-container`]: {
            position: 'relative',
            width: 56,
            height: 56,
          },
          [`${componentCls}-ripple`]: {
            position: 'absolute',
            border: `1px solid ${token.colorPrimary}`,
            borderRadius: '50%',
            width: '100%',
            height: '100%',
            animationName: 'ripple',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-out',
            animationDelay: '0s',
            transformOrigin: 'center',
            boxSizing: 'border-box',
          },

          [`${componentCls}-ripple:nth-child(2)`]: {
            animationDelay: '-1s',
          },

          [`${componentCls}-ripple:nth-child(3)`]: {
            animationDelay: '-2s',
          },
          [`${componentCls}-wallet-connecting`]: {
            // icon size / 2 + 8px
            marginTop: 36,
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

export function useStyle(prefixCls: string): UseStyleResult {
  return useAntdStyle('ConnectModal', (token) => {
    const isDark = isDarkTheme(token);
    const hoverWalletBg = new TinyColor(isDark ? token.colorWhite : '#000')
      .setAlpha(0.08)
      .onBackground(token.Modal?.contentBg || token.colorBgContainer)
      .toRgbString();

    const connectModalToken: ConnectModalToken = {
      ...token,
      selectedWalletColor: token.Modal?.contentBg || token.colorBgContainer,
      hoverWalletBg,
      selectedWalletBg: hoverWalletBg,
      panelSplitLineColor: new TinyColor(token.colorText).setAlpha(0.06).toRgbString(),
      modalTitleStartColor: token.colorPrimary,
      modalTitleEndColor: new TinyColor(token.colorText).setAlpha(0.85).toRgbString(),
      walletGroupTextColor: new TinyColor(token.colorText).setAlpha(0.65).toRgbString(),
      descriptionColor: new TinyColor(token.colorText).setAlpha(0.65).toRgbString(),
      getWalletCardBg: new TinyColor(token.colorText).setAlpha(0.03).toRgbString(),
      walletIconSize: token.sizeXL,
      web3ComponentsCls: `.${prefixCls}`,
      simpleGuideBg: new TinyColor(token.colorText).complement().setAlpha(0.06).toRgbString(),
      walletListWidth: 328,
      walletListHeight: 436,
      modalMinHeight: 518,
      ...token.ConnectModal,
    };
    return [genModalStyle(connectModalToken)];
  });
}
