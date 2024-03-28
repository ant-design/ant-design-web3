import { metadata_WalletConnect } from '@ant-design/web3-assets';
import type { WalletMetadata } from '@ant-design/web3-common';
import type { WalletFactory, WalletUseInWagmiAdapter } from '@ant-design/web3-wagmi';
import type { Connector } from 'wagmi';
import type { WalletConnectParameters } from 'wagmi/connectors';

export type WalletConnectConnectorParams = Pick<
  WalletConnectParameters,
  | 'disableProviderPing'
  | 'isNewChainsStale'
  | 'projectId'
  | 'metadata'
  | 'relayUrl'
  | 'storageOptions'
  | 'qrModalOptions'
>;

export interface WalletConnectMetadata
  extends Partial<WalletMetadata>,
    WalletConnectConnectorParams {
  useWalletConnectOfficialModal?: boolean;
}

export class WalletConnectFactory implements WalletFactory {
  public params: WalletConnectParameters;
  public useWalletConnectOfficialModal: boolean = false;
  public connectors: string[] = ['ethers', 'WalletConnect'];

  protected wallet: WalletMetadata;
  protected qrCodeUri?: string;
  protected getQrCode = async (walletConnector: Connector) => {
    const provider = await walletConnector?.getProvider();
    return new Promise<{ uri: string }>((resolve) => {
      if (this.qrCodeUri) {
        return resolve({ uri: this.qrCodeUri });
      }
      (provider as any)?.on('display_uri', (uri: string) => {
        this.qrCodeUri = uri;
        resolve({ uri });
      });
    });
  };

  public constructor({
    disableProviderPing,
    isNewChainsStale,
    projectId,
    metadata,
    relayUrl,
    storageOptions,
    qrModalOptions,
    useWalletConnectOfficialModal = false,
    ...wallet
  }: WalletConnectMetadata) {
    this.wallet = { ...metadata_WalletConnect, ...wallet };
    this.connectors.push(this.wallet.name);
    this.useWalletConnectOfficialModal = useWalletConnectOfficialModal;
    this.params = {
      disableProviderPing,
      isNewChainsStale,
      projectId,
      metadata,
      relayUrl,
      storageOptions,
      qrModalOptions,
    };
  }

  public create = (connectors?: readonly Connector[]): WalletUseInWagmiAdapter => {
    const walletConnector = connectors?.find((item) => item.name === 'WalletConnect');
    if (!walletConnector) {
      throw new Error('WalletConnect config not found');
    }
    return {
      ...this.wallet,
      hasWalletReady: async () => true,
      getWagmiConnector: async () => walletConnector,
      getQrCode: this.useWalletConnectOfficialModal
        ? undefined
        : () => this.getQrCode(walletConnector),
    };
  };
}

export const WalletConnect = (metadata: WalletConnectMetadata) =>
  new WalletConnectFactory(metadata);
