import { Web3ProviderInterface, NFTMetadata, Account } from '@ant-design/web3-common';

export class ProviderAdapter implements Web3ProviderInterface {
  getAccounts(): Promise<Account[]> {
    throw new Error('Method not implemented.');
  }
  getCurrentAccount(): Promise<Account> {
    throw new Error('Method not implemented.');
  }
  requestAccounts(): Promise<Account[]> {
    throw new Error('Method not implemented.');
  }
  getQrCodeLink(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  getNFTMetadata(address: string, id: number): Promise<NFTMetadata> {
    throw new Error('Method not implemented.');
  }
}
