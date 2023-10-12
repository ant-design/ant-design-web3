// Only for WallectConnect v2, v1 is not supported
import { EIP1193LikeProvider, WalletProvider, WalletProviderOptions } from '../types';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

export class WalletConnectProvider implements WalletProvider {
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
