export interface Account {
  address: string;
}

export enum ChainIds {
  Mainnet = 1,
  Polygon = 137,
  BSC = 56,
  Arbitrum = 42_161,
  Optimism = 10,
}

export interface Chain {
  id: ChainIds;
  name: string;
  rpcHttpUrl?: string;
  blockExplorerUrl?: string;
  nativeCurrency?: {
    decimals: number;
    name: string;
    symbol: string;
  };
}

export interface NFTMetadata {
  name?: string;
  description?: string;
  image?: string;
  dna?: string;
  edition?: number;
  date?: number;
  attributes?: {
    trait_type?: string;
    value?: string;
  }[];
  compiler?: string;
}

export enum UniversalWeb3ProviderEventType {
  AccountsChanged = 'accountsChanged',
}

export interface UniversalWeb3ProviderInterface {
  getAccounts: () => Promise<Account[]>;
  getCurrentAccount: () => Promise<Account | undefined>;
  getCurrentNetwork: () => Promise<number>;
  requestAccounts: (wallet?: string) => Promise<Account[]>;
  getQrCodeLink: () => Promise<string>;
  getNFTMetadata: (address: string, id: number) => Promise<NFTMetadata>;
  getAvaliableWallets: () => Promise<WalletMetadata[]>;
  disconnect: () => Promise<void>;
  on: (type: UniversalWeb3ProviderEventType, handler: (params?: any) => void) => void;
  off: (type: UniversalWeb3ProviderEventType, handler: (params?: any) => void) => void;
}

/**
 * This interface is a subset of the EIP-1193 provider interface.
 * See: https://eips.ethereum.org/EIPS/eip-1193
 */
export interface EIP1193LikeProvider {
  request: (request: { method: string; params?: any }) => Promise<any>;
  // connect and disconnect for WallectConnect
  connect?: () => Promise<void>;
  disconnect?: () => Promise<void>;
  networkVersion?: string;
}

export interface WalletProviderOptions {
  chains?: Chain[];
}

export interface EIP1193LikeProviderFactory {
  create: (options?: WalletProviderOptions) => Promise<EIP1193LikeProvider>;
}

export interface WalletProvider extends EIP1193LikeProviderFactory {
  metadata: WalletMetadata;
  getQrCodeLink?: () => Promise<string>;
}

export interface JsonRpcProvider extends EIP1193LikeProviderFactory {
  getRpcUrl: (chain: Chain) => string;
}

/**
 * @desc 浏览器扩展程序信息
 */
export type WalletExtensionItem = {
  /**
   * @desc 支持的浏览器的 key
   * @descEn The key of the supported browser
   */
  key: 'Chrome' | 'Firefox' | 'Edge' | 'Safari' | (string & {});
  /**
   * @desc 浏览器扩展程序的链接
   * @descEn Link to browser extension
   */
  link: string;
  /**
   * @desc 浏览器扩展程序的图标
   * @descEn Icon of browser extension
   */
  browserIcon: string;
  /**
   * @desc 浏览器扩展程序的名称
   * @descEn Name of browser extension
   */
  browserName: string;
  /**
   * @desc 浏览器扩展程序的描述
   * @descEn Description of browser extension
   */
  description: string;
};

/**
 * @desc 钱包
 * @descEn Wallet
 */
export type WalletMetadata = {
  /**
   * @desc 钱包名称
   * @descEn Wallet name
   */
  name: string;
  /**
   * @desc 钱包简介
   * @descEn Wallet introduction
   */
  remark: string;
  /**
   * @desc 钱包的 key
   * @descEn The key of Wallet
   */
  key?: React.Key;
  /**
   * @desc 钱包图标
   * @descEn Wallet icon
   */
  icon?: string | React.ReactNode;
  /**
   * @desc 该钱包支持的浏览器扩展程序列表
   * @descEn The list of browser extensions supported by the wallet
   */
  extensions?: false | WalletExtensionItem[];
  /**
   * @desc 该钱包是否支持 APP 调用
   * @descEn Whether the wallet supports APP calls
   */
  app?:
    | false
    | {
        link: string;
      };
  /**
   * @desc 钱包所属分组名称
   * @descEn The name of the group to which the wallet belongs
   */
  group?: string;
  /**
   * @desc 钱包是否已安装
   * @descEn Whether the wallet is installed
   */
  installed?: boolean;
};
