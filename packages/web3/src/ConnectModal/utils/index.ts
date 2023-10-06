import type React from 'react';
import type { Wallet } from '../interface';
import { getPlatform } from '../../utils';

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
