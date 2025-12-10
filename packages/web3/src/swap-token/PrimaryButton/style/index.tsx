import {
  useStyle as useAntdStyle,
  type GenerateStyle,
  type UseStyleResult,
  type Web3AliasToken,
} from '../../../theme/useStyle';

interface PrimaryButtonToken extends Web3AliasToken {
  componentCls: string;
}

const genPrimaryButtonStyle: GenerateStyle<PrimaryButtonToken> = (token) => {
  const { componentCls, colorWhite } = token;
  const baseBackground = 'linear-gradient(180deg, #676767 0%, rgba(0, 0, 0, 0%) 100%), #000';
  const hoverBackground = `radial-gradient(
      34% 100% at 49% 0%,
      #4d6aff 0%,
      rgba(70, 90, 206, 0.817) 18%,
      rgba(110, 59, 124, 0.512) 48%,
      rgba(122, 129, 255, 0%) 100%
    ),
    ${baseBackground}`;
  const borderImage = 'linear-gradient(180deg, #494848 0%, rgba(138, 138, 138, 33%) 100%) 1';
  const commonShadow = '0 2px 4px -4px rgba(0, 0, 0, 0.06), 0 8px 24px 0 rgba(25, 33, 61, 0.12)';

  const borderRadius = token.borderRadiusLG * 1.25;

  return {
    [componentCls]: {
      borderRadius,
      border: 'none',
      color: colorWhite,
      background: baseBackground,
      boxSizing: 'border-box',
      borderImage,
      boxShadow: commonShadow,
      '&:hover:not(:disabled)': {
        background: `${hoverBackground} !important`,
        borderImage: `${borderImage} !important`,
        boxShadow: `${commonShadow} !important`,
      },
      '&:disabled': {
        opacity: 0.6,
        color: `${colorWhite} !important`,
        background: baseBackground,
        borderImage,
      },
    },
  };
};

export const useStyle = (prefixCls: string): UseStyleResult => {
  return useAntdStyle('SwapTokenPrimaryButton', (token) => {
    const primaryButtonToken: PrimaryButtonToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };
    return [genPrimaryButtonStyle(primaryButtonToken)];
  });
};
