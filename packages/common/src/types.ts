// biome-ignore lint/suspicious/noConstEnum: <explanation>
export const enum ConnectStatus {
  Connected = 'connected',
  Disconnected = 'disconnected',
  Signed = 'signed',
}

export interface Account {
  address: string;
  name?: string;
  avatar?: string;
  addresses?: [`0x${string}`, ...`0x${string}`[]] | readonly `0x${string}`[];
  status?: ConnectStatus;
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
  Sepolia = 11_155_111,
  Holesky = 17_000,
  Scroll = 534_352,
  ScrollSepolia = 534_351,
  Hardhat = 31_337,
  Localhost = 1_337,
  Base = 8453,
}

export enum SolanaChainIds {
  MainnetBeta = 2,
  Devnet = 3,
  Testnet = 4,
}

export enum SuiChainIds {
  Mainnet = 1,
  Testnet = 2,
  Devnet = 3,
  Localnet = 4,
}

export type BrowserLinkType = 'address' | 'transaction';

export type BalanceMetadata = {
  icon?: React.ReactNode;
  decimals?: number;
  symbol?: string;
};

export enum ChainType {
  /**
   * Ethereum virtual machine and EVM compatible chains
   */
  EVM = 'EVM',

  /**
   * Solana virtual machine
   */
  SVM = 'SVM',

  /**
   * Bitcoin chain
   */
  Bitcoin = 'Bitcoin',

  /**
   * Sui chain
   */
  Sui = 'Sui',
}

export interface Chain {
  id: ChainIds | number;
  name: string;
  type?: ChainType;
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
  edition?: string | number;
  date?: number;
  attributes?: {
    trait_type?: string;
    value?: string;
  }[];
  compiler?: string;
}

export interface ConnectOptions {
  connectType?: 'extension' | 'qrCode' | 'openMobile';
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

  // biome-ignore lint/suspicious/noConfusingVoidType: by design
  connect?: (wallet?: Wallet, options?: ConnectOptions) => Promise<void | Account>;
  disconnect?: () => Promise<void>;
  switchChain?: (chain: Chain) => Promise<void>;

  // For Bitcoin, tokenId is undefined.
  getNFTMetadata?: (params: { address: string; tokenId?: bigint }) => Promise<NFTMetadata>;

  // For Sign
  sign?: SignConfig;
}

export interface Wallet extends WalletMetadata {
  _standardWallet?: any;
  _isMobileWallet?: boolean;

  hasWalletReady?: () => Promise<boolean>;
  hasExtensionInstalled?: () => Promise<boolean>;
  getQrCode?: () => Promise<{ uri: string }>;
  customQrCodePanel?: boolean;
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
  /**
   * @desc 支持的链虚拟机类型
   * @descEn Supported chain virtual machine types
   */
  supportChainTypes?: ChainType[];
  /**
   * @desc 快捷扫码的参数是否支持
   * @descEn Whether the parameters of fast scan code are supported
   */
  transferQRCodeFormatter?: (params: Record<string, any>) => string;
  /**
   * @desc 钱包支持的 Universal Link 配置
   * @descEn Wallet Universal Link configuration
   */
  deeplink?: {
    /**
     * @desc Universal Link 的 URL 模板，用于构建钱包的通用链接
     * @descEn URL template for Universal Link, used to build universal links for the wallet
     * @example "https://phantom.com/ul/browse/${url}?ref=${ref}"
     */
    urlTemplate: string;
  };
};

export type Balance = BalanceMetadata & {
  value?: bigint;
  coverAddress?: boolean;
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
    sign: string;
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
    walletConnectSuccess: string;
    walletListEmpty: string;
    getWalletTipsTitle: string;
    getWalletTipsDesc: string;
    linkWallet: string;
    walletConnecting: string;
    walletSigning: string;
  };
  NFTCard: {
    actionText: string;
  };
  Address: {
    copyTips: string;
    copiedTips: string;
  };
  TokenSelect: {
    placeholder: string;
  };
  CryptoInput: {
    placeholder: string;
    maxButtonText: string;
  };
  PayPanel: {
    tips: string;
  };
}

export interface Locale {
  ConnectButton?: Partial<RequiredLocale['ConnectButton']>;
  ConnectModal?: Partial<RequiredLocale['ConnectModal']>;
  NFTCard?: Partial<RequiredLocale['NFTCard']>;
  Address?: Partial<RequiredLocale['Address']>;
  TokenSelect?: Partial<RequiredLocale['TokenSelect']>;
  CryptoInput?: Partial<RequiredLocale['CryptoInput']>;
  PayPanel?: Partial<RequiredLocale['PayPanel']>;
}

export interface UniversalEIP6963Config {
  autoAddInjectedWallets?: boolean;
}

export type Token = {
  name: string;
  symbol: string;
  icon: React.ReactNode;
  decimal: number;
  availableChains: {
    chain: Chain;
    contract?: string;
  }[];
};

export interface SignConfig {
  // required
  signIn: (address: string) => Promise<void>;
  signOut?: () => Promise<void>;

  // signOutOnDisconnect?: boolean; // defaults true
  // signOutOnAccountChange?: boolean; // defaults true
  // signOutOnNetworkChange?: boolean; // defaults true
}

export type ConnectingStatus = 'signing' | 'connecting';

export type ConnectingStatusConfig =
  | boolean
  | {
      status: ConnectingStatus;
    };
