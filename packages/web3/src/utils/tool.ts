import { TinyColor } from '@ctrl/tinycolor';
import type { GlobalToken } from 'antd';

export const isDarkTheme = (token: GlobalToken) => {
  const hsv = new TinyColor(token.colorFill).onBackground(token.colorBgElevated).toHsv();
  return hsv.v < 0.5;
};

export const formatNumUnit = (num: number) => {
  /* v8 ignore next */
  return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};
