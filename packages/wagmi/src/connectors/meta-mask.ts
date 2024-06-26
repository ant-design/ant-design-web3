import type { WalletMetadata } from '@ant-design/web3-common';
import type { CreateConnectorFn } from 'wagmi';
import { injected, type InjectedParameters } from 'wagmi/connectors';

export const metaMask = (
  params?: InjectedParameters & Partial<WalletMetadata>,
): CreateConnectorFn => {
  return injected({
    target: {
      id: 'io.metamask',
      name: 'MetaMask',
      provider: window.ethereum,
    },
    ...params,
  });
};
