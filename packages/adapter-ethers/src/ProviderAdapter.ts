import {
  Web3ProviderInterface,
  NFTMetadata,
  Account,
  Wallets,
  getWalletProviderFactory,
} from '@ant-design/web3-common';
import { ethers } from 'ethers';

const USE_WALLET_LOCAL_STORAGE_KEY = 'antd-web3-use-wallet';

export class ProviderAdapter implements Web3ProviderInterface {
  private useWallet?: Wallets;

  constructor() {
    const wallet = localStorage.getItem(USE_WALLET_LOCAL_STORAGE_KEY);
    if (Object.values(Wallets).includes(wallet as Wallets)) {
      this.useWallet = wallet as Wallets;
    }
  }

  async getAccounts(): Promise<Account[]> {
    if (!this.useWallet) {
      return [];
    }
    const provderFactory = getWalletProviderFactory(this.useWallet);
    const eip1193Provider = await provderFactory.create();
    const provider = new ethers.BrowserProvider(eip1193Provider);
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

  async requestAccounts(wallet?: Wallets): Promise<Account[]> {
    this.useWallet = wallet || Wallets.MetaMask;
    localStorage.setItem(USE_WALLET_LOCAL_STORAGE_KEY, this.useWallet);

    const provderFactory = getWalletProviderFactory(this.useWallet);
    const eip1193Provider = await provderFactory.create();
    const provider = new ethers.BrowserProvider(eip1193Provider);
    await provider.getSigner();
    return this.getAccounts();
  }

  getQrCodeLink(): Promise<string> {
    throw new Error('Method not implemented.');
  }

  getNFTMetadata(address: string, id: number): Promise<NFTMetadata> {
    throw new Error('Method not implemented.');
  }
}
