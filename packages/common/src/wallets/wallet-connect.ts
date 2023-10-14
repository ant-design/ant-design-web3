// Only for WallectConnect v2, v1 is not supported
import {
  EIP1193LikeProvider,
  WalletMetadata,
  WalletProvider,
  WalletProviderOptions,
} from '../types';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

export interface WalletConnectConfig {
  projectId: string;
}

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

  constructor(private config?: WalletConnectConfig) {}
  create = async (options?: WalletProviderOptions): Promise<EIP1193LikeProvider> => {
    if (!this.config?.projectId) {
      throw new Error('walletConnectProjectId is required');
    }
    let chains = [1];
    if (options?.chains && options?.chains?.length > 0) {
      chains = options.chains.map((chain) => chain.id as number);
    }
    // docs: https://docs.walletconnect.com/advanced/providers/ethereum
    const provider = await EthereumProvider.init({
      projectId: this.config.projectId,
      chains: [chains[0]],
      optionalChains: chains,
      showQrModal: true,
      methods: ['eth_requestAccounts', 'eth_accounts'],
      events: [],
    });
    return provider;
  };
}
