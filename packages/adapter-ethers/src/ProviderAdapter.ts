import {
  Web3ProviderInterface,
  NFTMetadata,
  Account,
  Wallets,
  getWalletProviderFactory,
  WalletProviderOptions,
  JsonRpcProvider,
  Chains,
  requestWeb3Asset,
  EIP1193LikeProvider,
  Web3ProviderEventType,
} from '@ant-design/web3-common';
import { EventEmitter } from 'eventemitter3';
import { ethers } from 'ethers';

const USE_WALLET_LOCAL_STORAGE_KEY = 'antd-web3-use-wallet';

export class ProviderAdapter extends EventEmitter implements Web3ProviderInterface {
  private useWallet?: Wallets;
  private eip1193Provider?: EIP1193LikeProvider;

  constructor(private rpcProvider?: JsonRpcProvider, private options?: WalletProviderOptions) {
    super();
    const wallet = localStorage.getItem(USE_WALLET_LOCAL_STORAGE_KEY);
    if (Object.values(Wallets).includes(wallet as Wallets)) {
      this.useWallet = wallet as Wallets;
    }
  }

  private async getEip1193Provider(): Promise<EIP1193LikeProvider> {
    if (this.eip1193Provider) {
      return this.eip1193Provider;
    }
    if (!this.useWallet) {
      throw new Error('Wallet not set');
    }
    const provderFactory = getWalletProviderFactory(this.useWallet);
    const eip1193Provider = await provderFactory.create(this.options);
    this.eip1193Provider = eip1193Provider;
    return eip1193Provider;
  }

  async getAccounts(): Promise<Account[]> {
    if (!this.useWallet) {
      return [];
    }
    const eip1193Provider = await this.getEip1193Provider();
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

    const eip1193Provider = await this.getEip1193Provider();
    // for wallect connect provider
    // TODO: fix type
    // @ts-ignore
    await eip1193Provider?.connect?.();
    const provider = new ethers.BrowserProvider(eip1193Provider);
    await provider.getSigner();
    const accounts = await this.getAccounts();
    this.emit(Web3ProviderEventType.AccountsChanged, accounts);
    return accounts;
  }

  async disconnect(): Promise<void> {
    if (!this.useWallet) {
      return;
    }
    const eip1193Provider = await this.getEip1193Provider();
    // for wallect connect provider
    // TODO: fix type
    // @ts-ignore
    await eip1193Provider?.disconnect?.();
    // TODO: disconnect for MetaMask
    this.useWallet = undefined;
    this.eip1193Provider = undefined;
    localStorage.removeItem(USE_WALLET_LOCAL_STORAGE_KEY);
    this.emit(Web3ProviderEventType.AccountsChanged, []);
  }

  getQrCodeLink(): Promise<string> {
    throw new Error('Method not implemented.');
  }

  async getNFTMetadata(address: string, tokenId: number): Promise<NFTMetadata> {
    if (!this.rpcProvider) {
      throw new Error('RPC provider not set');
    }
    // TODO support other chains
    const url = this.rpcProvider.getRpcUrl(Chains.EthereumMainnet);
    const provider = new ethers.JsonRpcProvider(url);
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
