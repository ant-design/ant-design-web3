import {
  UniversalWeb3ProviderInterface,
  NFTMetadata,
  Account,
  requestWeb3Asset,
  UniversalWeb3ProviderEventType,
  WalletMetadata,
} from '@ant-design/web3-common';
import { EventEmitter } from 'eventemitter3';
import { ethers } from 'ethers';
import { EthereumProvider } from './eip1193-provider';

const USE_WALLET_LOCAL_STORAGE_KEY = 'antd-web3-use-wallet';

export class UniversalProvider extends EventEmitter implements UniversalWeb3ProviderInterface {
  private useWallet?: string;

  constructor(private eip1193Provider: EthereumProvider) {
    super();
    const wallet: string = localStorage.getItem(USE_WALLET_LOCAL_STORAGE_KEY) || '';
    if (wallet) {
      this.updateUseWallet(wallet);
    }
  }

  private updateUseWallet(wallet: string) {
    this.useWallet = wallet;
    localStorage.setItem(USE_WALLET_LOCAL_STORAGE_KEY, this.useWallet);
    this.eip1193Provider.updateUseWallet(this.useWallet);
  }

  async getAccounts(): Promise<Account[]> {
    if (!this.useWallet) {
      return [];
    }
    const provider = new ethers.BrowserProvider(this.eip1193Provider);
    const accounts = await provider.listAccounts();
    return accounts.map((account) => {
      return {
        address: account.address,
      };
    });
  }

  async getCurrentAccount(): Promise<Account | undefined> {
    const accounts = await this.getAccounts();
    return accounts[0];
  }

  async getCurrentNetwork(): Promise<number> {
    const network = await this.eip1193Provider.getCurrentNetwork();
    return network ?? 1;
  }

  async requestAccounts(wallet?: string): Promise<Account[]> {
    if (wallet) {
      this.updateUseWallet(wallet);
    }
    await this.eip1193Provider.connect?.();
    await this.eip1193Provider.request({
      method: 'eth_requestAccounts',
    });
    const accounts = await this.getAccounts();
    this.emit(UniversalWeb3ProviderEventType.AccountsChanged, accounts);
    return accounts;
  }

  async disconnect(): Promise<void> {
    if (!this.useWallet) {
      return;
    }
    await this.eip1193Provider?.disconnect?.();
    this.updateUseWallet('');
    this.emit(UniversalWeb3ProviderEventType.AccountsChanged, []);
  }

  async getAvaliableWallets(): Promise<WalletMetadata[]> {
    return this.eip1193Provider.wallets;
  }

  getQrCodeLink(wallet: string): Promise<string> {
    return this.eip1193Provider.getQrCodeLink(wallet);
  }

  async getNFTMetadata(address: string, tokenId: number): Promise<NFTMetadata> {
    const provider = new ethers.BrowserProvider(this.eip1193Provider);
    const contract = new ethers.Contract(
      address,
      [`function tokenURI(uint256 tokenId) external view returns (string memory)`],
      provider,
    );
    const tokenURI = await contract.tokenURI(tokenId);
    const metaInfo = await requestWeb3Asset(tokenURI);
    return metaInfo as NFTMetadata;
  }
}
