import {
  Web3ProviderInterface,
  NFTMetadata,
  Account,
  Wallets,
  getWalletProviderFactory,
  JsonRpcProvider,
  Chains,
  requestWeb3Asset,
} from '@ant-design/web3-common';
import { ethers } from 'ethers';

const USE_WALLET_LOCAL_STORAGE_KEY = 'antd-web3-use-wallet';

export class ProviderAdapter implements Web3ProviderInterface {
  private useWallet?: Wallets;

  constructor(private rpcProvider?: JsonRpcProvider) {
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
