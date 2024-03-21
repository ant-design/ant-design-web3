export interface Account {
  address: string;
  name?: string;
}

export enum ChainIds {
  Mainnet = 1,
  Polygon = 137,
  BSC = 56,
  Arbitrum = 42_161,
  Optimism = 10,
  Goerli = 5,
  Avalanche = 43_114,
  X1Testnet = 195,
}

export enum SolanaChainIds {
  MainnetBeta = 2,
  Devnet = 3,
  Testnet = 4,
}

export type BrowserLinkType = 'address' | 'transaction';

export type BalanceMetadata = {
  icon?: React.ReactNode;
  decimals?: number;
  symbol?: string;
};

export interface Chain {
  id: ChainIds | number;
  name: string;
  icon?: React.ReactNode;
  browser?: {
    icon?: React.ReactNode;
    getBrowserLink?: (address: string, type: BrowserLinkType) => string;
  };
  nativeCurrency?: BalanceMetadata & {
    name: string;
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

export interface ConnectOptions {
  connectType?: 'extension' | 'qrCode';
}

export interface UniversalWeb3ProviderInterface {
  // current connected account
  account?: Account;
  // current connected chain
  chain?: Chain;
  // current account balance
  balance?: Balance;

  availableWallets?: Wallet[];
  availableChains?: Chain[];

  extendsContextFromParent?: boolean;

  /** Such as `0x` */
  addressPrefix?: string | false;

  connect?: (wallet?: Wallet, options?: ConnectOptions) => Promise<void>;
  disconnect?: () => Promise<void>;
  switchChain?: (chain: Chain) => Promise<void>;

  getNFTMetadata?: (params: { address: string; tokenId: bigint }) => Promise<NFTMetadata>;
}

export interface Wallet extends WalletMetadata {
  hasWalletReady?: () => Promise<boolean>;
  hasExtensionInstalled?: () => Promise<boolean>;
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
  browserIcon: React.ReactNode | string;
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
   * @desc 是否是通用协议
   * @descEn Whether it is a universal protocol
   */
  universalProtocol?: {
    link: string;
  };
};

export type Balance = BalanceMetadata & {
  value?: bigint;
};

export interface ConnectorTriggerProps {
  account?: Account;
  loading?: boolean;
  onConnectClick?: (wallet?: Wallet) => void;
  onDisconnectClick?: () => void;
  onSwitchChain?: (chain: Chain) => Promise<void>;
  availableChains?: Chain[];
  availableWallets?: Wallet[];
  chain?: Chain;
  balance?: Balance;
}

export interface RequiredLocale {
  ConnectButton: {
    connect: string;
    disconnect: string;
    copyAddress: string;
    copied: string;
    walletAddress: string;
    moreWallets: string;
  };
  ConnectModal: {
    title: string;
    guideTitle: string;
    guideInfos1Title: string;
    guideInfos1Desc: string;
    guideInfos2Title: string;
    guideInfos2Desc: string;
    guideInfos3Title: string;
    guideInfos3Desc: string;
    guideInfosGetWalletBtnText: string;
    guideInfosMoreLinkText: string;
    getWalletBtnText: string;
    getWalletUniversalProtocolBtnText: string;
    getWalletPanelTitle: string;
    getWalletPanelInfoTitle: string;
    getWalletPanelInfoDesc: string;
    qrCodePanelTitleForDownload: string;
    qrCodePanelTitleForScan: string;
    qrCodePanelTitleForUniversalProtocol: string;
    qrCodePanelLinkForDownload: string;
    qrCodePanelLinkForConnect: string;
    qrCodePanelDownloadTipForReady: string;
    qrCodePanelDownloadTipForNotReady: string;
    qrCodePanelUniversalProtocolTipForNotReady: string;
    walletCardPanelTitle: string;
    walletCardAppTitle: string;
    walletCardAppDesc: string;
    walletCardExtensionTitle: string;
    guideTipTitle: string;
    guideTipLearnMoreLinkText: string;
    walletPanelPlugin: string;
  };
  NFTCard: {
    actionText: string;
  };
  Address: {
    copyTips: string;
    copiedTips: string;
  };
}

export interface Locale {
  ConnectButton?: Partial<RequiredLocale['ConnectButton']>;
  ConnectModal?: Partial<RequiredLocale['ConnectModal']>;
  NFTCard?: Partial<RequiredLocale['NFTCard']>;
  Address?: Partial<RequiredLocale['Address']>;
}
