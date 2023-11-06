import {
  genComponentStyleHook,
  type FullToken,
  type GenerateStyle,
  mergeToken,
} from 'antd/es/theme/internal';

export interface NFTCardToken extends FullToken<'Card'> {
  // NFTCard token here
  nftCardWidth: number;
  nftCardBorderRadius: number;
}

const genNFTCardStyle: GenerateStyle<NFTCardToken> = (token) => {
  const {
    componentCls,
    nftCardWidth,
    colorWhite,
    nftCardBorderRadius,
    padding,
    colorBorder,
    fontSizeHeading3,
    lineHeightHeading3,
    colorText,
    margin,
    fontSizeLG,
    marginXS,
    marginLG,
    controlHeightLG,
    borderRadiusLG,
    colorFillSecondary,
    colorTextQuaternary,
    colorTextSecondary,
    fontSizeHeading5,
    lineHeightHeading5,
    fontSize,
    lineHeight,
  } = token;
  return {
    [`${componentCls}-container`]: {
      width: nftCardWidth,
      backgroundColor: colorWhite,
      borderRadius: nftCardBorderRadius,
      border: `1px solid ${colorBorder}`,
      overflow: 'hidden',
      [`${componentCls}-inner`]: {
        padding,
        gap: padding,
        display: 'flex',
        flexDirection: 'column',
        [`${componentCls}-content`]: {
          borderRadius: nftCardBorderRadius,
          overflow: 'hidden',
          position: 'relative',
          [`${componentCls}-serial-number`]: {
            fontSize: fontSizeHeading3,
            lineHeight: lineHeightHeading3,
            color: colorWhite,
            opacity: 0.25,
            fontWeight: 500,
            position: 'absolute',
            insetInlineStart: marginXS,
            top: 8,
            zIndex: 1,
          },
        },
        [`${componentCls}-body`]: {
          [`${componentCls}-serial-number`]: {
            fontSize: fontSize,
            lineHeight: lineHeight,
            color: colorText,
            opacity: 0.5,
            letterSpacing: 0.44,
            marginBottom: margin,
          },
          [`${componentCls}-name`]: {
            fontSize: fontSizeHeading3,
            lineHeight: lineHeightHeading3,
            color: colorText,
            fontWeight: 500,
            marginBottom: margin,
          },
          [`${componentCls}-description`]: {
            fontSize: fontSizeHeading5,
            lineHeight: lineHeightHeading5,
            color: colorTextSecondary,
            marginBottom: margin,
          },
          [`${componentCls}-info`]: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: fontSizeLG,
            color: colorText,
            fontWeight: 500,
            [`${componentCls}-price`]: {
              gap: marginXS,
              display: 'flex',
              alignItems: 'center',
              [`${componentCls}-price-icon`]: {
                fontSize: fontSizeHeading3,
              },
            },
            [`${componentCls}-likes`]: {
              gap: marginXS,
              display: 'flex',
              alignItems: 'center',
              [`${componentCls}-like-icon`]: {
                fontSize: fontSizeHeading3,
                width: 24,
                height: 28,
                cursor: 'pointer',
                position: 'relative',
                [`${componentCls}-like-icon-icon-heart`]: {
                  svg: {
                    path: {
                      fill: colorText,
                    },
                  },
                },
                [`${componentCls}-like-icon-group`]: {
                  transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
                  opacity: 0,
                },
                [`&${componentCls}-like-icon-liked`]: {
                  [`${componentCls}-like-icon-group`]: {
                    opacity: 1,
                  },
                },
              },
            },
          },
          [`${componentCls}-action`]: {
            marginTop: marginLG,
            '.ant-btn': {
              backgroundColor: colorFillSecondary,
              height: controlHeightLG,
              borderRadius: borderRadiusLG,
              border: 'none',
              color: colorText,
              fontWeight: 500,
            },
          },
          [`${componentCls}-footer`]: {
            color: colorTextSecondary,
            fontSize,
            '.ant-divider': {
              borderColor: colorTextQuaternary,
              marginTop: margin,
              marginBottom: marginXS,
            },
          },
        },
      },
      [`&${componentCls}-pithy`]: {
        [`${componentCls}-inner`]: {
          padding: 0,
        },
        [`${componentCls}-content`]: {
          borderRadius: 0,
        },
        [`${componentCls}-body`]: {
          padding: `0 ${padding}px ${padding}px`,
        },
      },
      [`&${componentCls}-theme-dark`]: {
        backgroundColor: 'rgb(0, 0, 0)',
        [`${componentCls}-inner`]: {
          background: 'rgba(255,255,255,0.25)',
          backgroundImage:
            'radial-gradient(circle at 52% 1.1e+02%, rgba(77,186,255,0.53) 0%, rgba(0,0,0,0.00) 58%),radial-gradient(circle at 50% 38%, #FFFFFF -50%, rgba(0,0,0,0.21) 53%)',
        },
        [`&${componentCls}-pithy`]: {
          borderWidth: 0,
        },
      },
    },
  };
};

export default genComponentStyleHook('Card', (token) => {
  const nftCardToken = mergeToken<NFTCardToken>(token, {
    nftCardWidth: 282,
    nftCardBorderRadius: token.borderRadiusLG * 2,
  });
  return [genNFTCardStyle(nftCardToken)];
});
