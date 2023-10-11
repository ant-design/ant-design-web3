// Only for WallectConnect v2, v1 is not supported
import { EIP1193LikeProvider, WalletProviderFactory, WalletProviderOptions } from '../types';
import { EthereumProvider } from '@walletconnect/ethereum-provider';

export class WalletConnectProviderFactory implements WalletProviderFactory {
  create = async (options?: WalletProviderOptions): Promise<EIP1193LikeProvider> => {
    if (!options?.walletConnectProjectId) {
      throw new Error('walletConnectProjectId is required');
    }
    // docs: https://docs.walletconnect.com/advanced/providers/ethereum
    const provider = await EthereumProvider.init({
      projectId: options.walletConnectProjectId,
      chains: [1],
      showQrModal: true,
      methods: ['eth_requestAccounts', 'eth_accounts'],
      events: [],
    });
    return provider;
  };
}
