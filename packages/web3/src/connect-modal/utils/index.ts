import type React from 'react';
import type { Wallet } from '../interface';
import { getPlatform } from '../../utils';
import type { GlobalToken } from 'antd';
import { TinyColor } from '@ctrl/tinycolor';

export const mergeReactNodeProps = (
  node: React.ReactNode,
  defaultNode: React.ReactNode,
  resolveString?: (node: string) => React.ReactNode,
) => {
  if (node === null || node === false) return node;
  if (typeof node === 'string' && resolveString) return resolveString(node);
  return node ?? defaultNode;
};

export const defaultGroupOrder = (a: string, b: string) => a.localeCompare(b);

export const getWalletRoute = (wallet: Wallet) => {
  const curExtensions =
    wallet?.extensions && wallet.extensions.some((item) => item.key === getPlatform());

  if (curExtensions) {
    return 'wallet';
  }

  if (wallet?.app) {
    return 'qrCode';
  }

  return 'unknown';
};

export const isDarkTheme = (token: GlobalToken) => {
  const hsv = new TinyColor(token.colorFill).onBackground(token.colorBgElevated).toHsv();
  return hsv.v < 0.5;
};
