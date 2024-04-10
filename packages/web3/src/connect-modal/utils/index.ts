import type React from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import type { GlobalToken } from 'antd';

export const mergeReactNodeProps = (
  node: React.ReactNode,
  defaultNode: React.ReactNode,
  resolveString?: (node: string) => React.ReactNode,
) => {
  if (node === null || node === false) return node;
  if (typeof node === 'string' && resolveString) return resolveString(node);
  return node ?? defaultNode;
};

export const defaultGroupOrder = (a: string, b: string) => {
  if (a === 'Popular' && b !== 'Popular') {
    return -1;
  }
  if (a === 'More' && b !== 'More') {
    return 1;
  }
  return a.localeCompare(b);
};

export const isDarkTheme = (token: GlobalToken) => {
  const hsv = new TinyColor(token.colorFill).onBackground(token.colorBgElevated).toHsv();
  return hsv.v < 0.5;
};
