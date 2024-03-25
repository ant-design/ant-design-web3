import {
  BrowserProvider,
  ethers,
  JsonRpcProvider,
  type Networkish,
  type Provider,
  type Signer,
  type WebSocketLike,
} from 'ethers';
import {
  getAddress,
  UserRejectedRequestError,
  type Address,
  type Chain,
  type ProviderConnectInfo,
  type ProviderMessage,
} from 'viem';
import { createConnector } from 'wagmi';

export type EthersParameters = {
  provider?: Provider;
  signer?: Signer;
  network?: string | Networkish | WebSocketLike; // create provider options
};

export type EthersStorageItem = { 'ethers.connected': true; 'ethers.disconnected': true };

export const ethersConnector = (parameters: EthersParameters = {}) => {
  const _provider: Provider =
    parameters.provider ??
    (window.ethereum && new ethers.BrowserProvider(window.ethereum)) ??
    ethers.getDefaultProvider(parameters.network);

  return createConnector<Provider, any, EthersStorageItem>((config) => ({
    type: 'ethers', // wagmi connector adapter for ethersjs
    id: 'ethers',
    name: 'ethers',
    async connect(args?: { chainId?: number; isReconnecting?: boolean }): Promise<{
      accounts: readonly Address[];
      chainId: number;
    }> {
      const provider = await this.getProvider();
      if (!provider) throw new Error('Provider not found');

      if (!(provider instanceof BrowserProvider) && !(provider instanceof JsonRpcProvider))
        throw new Error('Provider should be BrowserProvider or JsonRpcProvider');

      // Switch to chain if provided
      let chainId = await this.getChainId();
      if (args?.chainId && chainId !== args?.chainId) {
        const chain = await this.switchChain!({ chainId: args.chainId }).catch((error: any) => {
          if (error.code === UserRejectedRequestError.code) throw error;
          return { id: chainId };
        });
        chainId = chain?.id ?? chainId;
      }

      await provider.getSigner();
      const accounts = await this.getAccounts();

      await config.storage?.setItem('ethers.connected', true);
      return { accounts, chainId };
    },

    async disconnect(): Promise<void> {
      await config.storage?.setItem(`ethers.disconnected`, true);
      await config.storage?.removeItem('ethers.connected');
    },

    async getAccounts(): Promise<readonly Address[]> {
      const provider = await this.getProvider();
      if (!provider) throw new Error('Provider not found');

      // Only JsonRpcApiProvider has listAccounts method
      // Such as BrowserProvider, JsonRpcProvider
      if (provider instanceof ethers.JsonRpcApiProvider) {
        const signers = await provider.listAccounts();
        return signers.map((s) => getAddress(s.address));
      }

      // `eth_accounts` is not enabled by default since go-ethereum v1.11.0
      // so we return empty array
      return [];
    },

    async getChainId(): Promise<number> {
      const provider = await this.getProvider();
      if (!provider) throw new Error('Provider not found');

      const network = await provider.getNetwork();
      return Number(network.chainId);
    },

    async getProvider(
      _parameters?: { chainId?: number | undefined } | undefined,
    ): Promise<Provider> {
      return _provider;
    },

    async isAuthorized(): Promise<boolean> {
      try {
        const isDisconnected =
          // If shim exists in storage, connector is disconnected
          await config.storage?.getItem('ethers.disconnected');
        if (isDisconnected) return false;

        const accounts = await this.getAccounts();
        return !!accounts.length;
      } catch {
        return false;
      }
    },

    async switchChain(args: { chainId: number }): Promise<Chain> {
      const provider = await this.getProvider();
      if (!provider) throw new Error('Provider not found');

      const chain = config.chains.find((x) => x.id === args.chainId);
      if (!chain) throw new Error('Chain not found');

      throw new Error('Method not implemented');
    },

    // events
    onAccountsChanged: (accounts: string[]): void => {
      throw new Error('Method not implemented');
    },
    onChainChanged: (chainId: string): void => {
      throw new Error('Method not implemented');
    },
    onConnect: (connectInfo: ProviderConnectInfo): void => {
      throw new Error('Method not implemented');
    },
    onDisconnect: (error?: Error | undefined): void => {
      throw new Error('Method not implemented');
    },
    onMessage: (message: ProviderMessage): void => {
      throw new Error('Method not implemented');
    },
  }));
};
