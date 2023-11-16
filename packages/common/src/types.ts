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

export interface UniversalWeb3ProviderInterface {
  accounts?: Account[];
  wallets?: Wallet[];

  requestAccounts?: (wallet?: string) => Promise<Account[]>;
  disconnect?: () => Promise<void>;

  getCurrentNetwork?: () => Promise<number>;
  getNFTMetadata?: (params: { address: string; tokenId: bigint }) => Promise<NFTMetadata>;
}

export interface Wallet extends WalletMetadata {
  hasBrowserExtensionInstalled?: () => Promise<boolean>;
  getQrCode?: () => Promise<{
    uri: string;
  }>;
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
};

export type ChainSelectItem = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

export type Banlance = {
  amount: number | bigint;
  type: string;
};

export interface ConnectorTriggerProps {
  address?: string;
  onConnectClicked?: () => void;
  onDisconnectClicked?: () => Promise<void>;
  domain?: string;
  connected?: boolean;
  chains?: ChainSelectItem[];
  banlance?: Banlance[] | Banlance;
}
