// Only for WallectConnect v2, v1 is not supported
import {
  EIP1193LikeProvider,
  WalletMetadata,
  WalletProvider,
  WalletProviderOptions,
} from '../types';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

export class WalletConnectProvider implements WalletProvider {
  metadata: WalletMetadata = {
    icon: 'https://docs.walletconnect.com/img/walletconnect-logo-black.svg#light-mode-only',
    name: 'WalletConnect',
    remark: 'Connect with mobile APP',
    app: {
      link: 'https://walletconnect.com/',
    },
    group: 'Popular',
    installed: true,
  };

  constructor(private options?: WalletProviderOptions) {}
  create = async (): Promise<EIP1193LikeProvider> => {
    if (!this.options?.projectId) {
      throw new Error('walletConnectProjectId is required');
    }
    // docs: https://docs.walletconnect.com/advanced/providers/ethereum
    const provider = await EthereumProvider.init({
      projectId: this.options.projectId,
      chains: [1],
      showQrModal: true,
      methods: ['eth_requestAccounts', 'eth_accounts'],
      events: [],
    });
    return provider;
  };
}
