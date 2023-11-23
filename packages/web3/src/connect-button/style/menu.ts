import {
  genComponentStyleHook,
  type FullToken,
  type GenerateStyle,
  mergeToken,
} from 'antd/lib/theme/internal';
import type { CSSInterpolation } from '@ant-design/cssinjs';
import { TinyColor } from '@ctrl/tinycolor';

export type Theme = 'dark' | 'light';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
  // Component token here
}

export interface ConnectButtonMenuToken extends FullToken<'Menu'> {
  // Custom token here
}

const resetStyle = (
  token: ConnectButtonMenuToken,
  themeSuffix: Theme = 'light',
): CSSInterpolation => {
  const { componentCls } = token;

  return [
    {
      [`${componentCls}-${themeSuffix}`]: {},
    },
  ];
};

const getThemeStyle = (
  token: ConnectButtonMenuToken,
  themeSuffix: Theme = 'light',
): CSSInterpolation => {
  const { componentCls } = token;
  return [
    {
      [`${componentCls}-${themeSuffix}`]: {},
    },
  ];
};

const genModalStyle: GenerateStyle<ConnectButtonMenuToken> = (token) => {
  const darkToken = mergeToken<ConnectButtonMenuToken>(token, {});

  return [
    // =========================== Reset ===========================
    resetStyle(token),
    resetStyle(darkToken, 'dark'),
    // =========================== Modal ===========================
    getThemeStyle(token),
    getThemeStyle(darkToken, 'dark'),
  ];
};

export default genComponentStyleHook('Menu', (token) => {
  const connectButtonMenuToken = mergeToken<ConnectButtonMenuToken>(token, {});
  return [genModalStyle(connectButtonMenuToken)];
});
