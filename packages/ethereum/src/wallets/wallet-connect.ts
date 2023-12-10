// Only for WalletConnect v2, v1 is not supported
import type { WalletMetadata } from '@ant-design/web3-common';
import { metadata_WalletConnect } from '@ant-design/web3-assets';
import { EthereumProvider } from '@walletconnect/ethereum-provider';
import type { WalletProvider, WalletProviderOptions, EthereumWallet } from '../types';

export interface WalletConnectConfig {
  projectId: string;
  showQrModal?: boolean;
}

export class WalletConnectProvider implements WalletProvider {
  metadata: WalletMetadata = metadata_WalletConnect;

  private qrCodeLinkPromise: Promise<string> | undefined;
  private resolveQrCodeLink: ((uri: string) => void) | undefined;

  constructor(private config?: WalletConnectConfig) {}

  create = async (options?: WalletProviderOptions): Promise<EthereumWallet> => {
    const { projectId, showQrModal = false } = this.config || {};
    if (!projectId) {
      throw new Error('walletConnectProjectId is required');
    }
    let chains = [1];
    if (options?.chains && options?.chains?.length > 0) {
      chains = options.chains.map((chain) => chain.id as number);
    }
    // docs: https://docs.walletconnect.com/advanced/providers/ethereum
    const provider = await EthereumProvider.init({
      projectId: projectId,
      chains: [chains[0]],
      optionalChains: chains,
      showQrModal,
      methods: ['eth_requestAccounts', 'eth_accounts'],
      events: [],
    });

    provider.on('display_uri', (uri: string) => {
      this.resolveQrCodeLink?.(uri);
    });

    provider.on('disconnect', () => {
      this.initQrCodePromise();
    });

    this.initQrCodePromise();

    return {
      provider,
      ...this.metadata,
      getQrCode: async () => {
        if (!this.qrCodeLinkPromise) {
          throw new Error('WalletConnect is not initialized');
        }
        const uri = await this.qrCodeLinkPromise;
        return {
          uri,
        };
      },
    };
  };

  hasBrowserExtensionInstalled = async (): Promise<boolean> => {
    // If showQrModal is true, it means use WalletConnet offcial modal, Think it's the same as installing extension
    return this.config?.showQrModal ?? false;
  };

  private initQrCodePromise = () => {
    this.qrCodeLinkPromise = new Promise((resolve) => {
      this.resolveQrCodeLink = resolve;
    });
  };
}
