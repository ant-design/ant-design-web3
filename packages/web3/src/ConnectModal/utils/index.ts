import type React from 'react';

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
