import { metadata_WalletConnect } from '@ant-design/web3-assets';
import type { WalletMetadata } from '@ant-design/web3-common';
import type { WalletUseInWagmiAdapter } from '@ant-design/web3-wagmi';
import type { Connector } from 'wagmi';
import type { WalletConnectParameters } from 'wagmi/connectors';

import { UniversalWallet } from './universal-wallet';

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

export class WalletConnectFactory extends UniversalWallet {
  public params: WalletConnectParameters;
  public useWalletConnectOfficialModal: boolean = false;

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
    super({ ...metadata_WalletConnect, ...wallet });
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
