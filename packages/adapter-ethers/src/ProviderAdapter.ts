import { Web3ProviderInterface, NFTMetadata } from '@ant-design/web3';

export class ProviderAdapter implements Web3ProviderInterface {
  getAccounts(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  getCurrentAccount(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  requestAccounts(): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
  getQrCodeLink(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  getNFTMetadata(address: string, id: number): Promise<NFTMetadata> {
    throw new Error('Method not implemented.');
  }
}
