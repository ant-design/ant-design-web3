import type { GlobalToken } from 'antd';
import { TinyColor } from '@ctrl/tinycolor';

export const getPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes('chrome')) {
    return 'Chrome';
  } else if (userAgent.includes('firefox')) {
    return 'Firefox';
  } else if (userAgent.includes('edge')) {
    return 'Edge';
  } else if (userAgent.includes('safari')) {
    return 'Safari';
  } else {
    return 'Other';
  }
};

export const isDarkTheme = (token: GlobalToken) => {
  const hsv = new TinyColor(token.colorFill).onBackground(token.colorBgElevated).toHsv();
  return hsv.v < 0.5;
};

export const formatNumUnit = (num: number) => {
  return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};
