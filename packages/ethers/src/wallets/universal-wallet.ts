import type { WalletMetadata } from '@ant-design/web3-common';
import type { WalletFactory, WalletUseInWagmiAdapter } from '@ant-design/web3-wagmi';
import type { Connector } from 'wagmi';

export class UniversalWallet implements WalletFactory {
  public connectors: string[] = ['ethers', 'WalletConnect'];

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

  public constructor(protected readonly wallet: WalletMetadata) {
    this.connectors.push(wallet.name);
  }
  public create = (connectors?: readonly Connector[]): WalletUseInWagmiAdapter => {
    const ethersConnector = connectors?.find((item) => item.name === 'ethers');
    const walletConnector = connectors?.find((item) => item.name === 'WalletConnect');

    return {
      hasExtensionInstalled: async () => !!ethersConnector,
      hasWalletReady: async () => !!(await ethersConnector?.getProvider()),
      getWagmiConnector: async () => ethersConnector,
      getQrCode: walletConnector ? () => this.getQrCode(walletConnector) : undefined,
      ...this.wallet,
    };
  };
}
