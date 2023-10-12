import {
  UniversalWeb3ProviderInterface,
  NFTMetadata,
  Account,
  Wallets,
  requestWeb3Asset,
  EIP1193LikeProvider,
  UniversalWeb3ProviderEventType,
} from '@ant-design/web3-common';
import { EventEmitter } from 'eventemitter3';
import { ethers } from 'ethers';

const USE_WALLET_LOCAL_STORAGE_KEY = 'antd-web3-use-wallet';

export class UniversalProvider extends EventEmitter implements UniversalWeb3ProviderInterface {
  private useWallet?: Wallets;

  constructor(private eip1193Provider: EIP1193LikeProvider) {
    super();
    const wallet = localStorage.getItem(USE_WALLET_LOCAL_STORAGE_KEY);
    if (Object.values(Wallets).includes(wallet as Wallets)) {
      this.useWallet = wallet as Wallets;
    }
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

  async requestAccounts(wallet?: Wallets): Promise<Account[]> {
    this.useWallet = wallet || Wallets.MetaMask;
    localStorage.setItem(USE_WALLET_LOCAL_STORAGE_KEY, this.useWallet);
    await this.eip1193Provider?.connect?.();
    const provider = new ethers.BrowserProvider(this.eip1193Provider);
    await provider.getSigner();
    const accounts = await this.getAccounts();
    this.emit(UniversalWeb3ProviderEventType.AccountsChanged, accounts);
    return accounts;
  }

  async disconnect(): Promise<void> {
    if (!this.useWallet) {
      return;
    }
    await this.eip1193Provider?.disconnect?.();
    this.useWallet = undefined;
    localStorage.removeItem(USE_WALLET_LOCAL_STORAGE_KEY);
    this.emit(UniversalWeb3ProviderEventType.AccountsChanged, []);
  }

  getQrCodeLink(): Promise<string> {
    throw new Error('Method not implemented.');
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
