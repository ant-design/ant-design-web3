import {
  genComponentStyleHook,
  type FullToken,
  type GenerateStyle,
  mergeToken,
} from 'antd/lib/theme/internal';

export interface NFTCardToken extends FullToken<'Card'> {
  // NFTCard token here
  nftCardWidth: number;
  nftCardBorderRadius: number;
  nftCardImageHeight: number;
}

const genNFTCardStyle: GenerateStyle<NFTCardToken> = (token) => {
  const {
    componentCls,
    nftCardWidth,
    colorWhite,
    nftCardBorderRadius,
    padding,
    colorBorder,
    nftCardImageHeight,
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
    fontSize,
  } = token;
  return {
    [`${componentCls}-container`]: {
      width: nftCardWidth,
      backgroundColor: colorWhite,
      borderRadius: nftCardBorderRadius,
      border: `1px solid ${colorBorder}`,
      [`${componentCls}-inner`]: {
        padding,
        gap: padding,
        display: 'flex',
        flexDirection: 'column',
        [`${componentCls}-content`]: {
          borderRadius: nftCardBorderRadius,
          height: nftCardImageHeight,
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
          },
        },
        [`${componentCls}-body`]: {
          [`${componentCls}-name`]: {
            fontSize: fontSizeHeading3,
            lineHeight: lineHeightHeading3,
            color: colorText,
            fontWeight: 500,
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
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: `1px solid ${colorBorder}`,
              },
            },
            [`${componentCls}-likes`]: {
              gap: marginXS,
              display: 'flex',
              alignItems: 'center',
              [`${componentCls}-like-icon`]: {
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: `1px solid ${colorBorder}`,
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
    },
  };
};

export default genComponentStyleHook('Card', (token) => {
  const nftCardToken = mergeToken<NFTCardToken>(token, {
    nftCardWidth: 282,
    nftCardBorderRadius: token.borderRadiusLG * 2,
    nftCardImageHeight: 304,
  });
  return [genNFTCardStyle(nftCardToken)];
});
