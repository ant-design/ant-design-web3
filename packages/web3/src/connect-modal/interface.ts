import type React from 'react';
import type { ModalProps } from 'antd';
import type { Wallet } from '@ant-design/web3-common';

export type { Wallet, WalletExtensionItem } from '@ant-design/web3-common';

/**
 * @desc 新手指引面板的信息项
 * @descEn Information items of the newbie guide panel
 */
export type GuideInfoItem = {
  /**
   * @desc 新手指引面板的信息项标题
   * @descEn The title of the information item of the newbie guide panel
   */
  title: string | React.ReactNode;
  /**
   * @desc 新手指引面板的信息项图标
   * @descEn The icon of the information item of the newbie guide panel
   */
  icon: string | React.ReactNode;
  /**
   * @desc 新手指引面板的信息项描述
   * @descEn The description of the information item of the newbie guide panel
   */
  description: string | React.ReactNode;
};

/**
 * @desc 新手指引面板
 * @descEn Newbie guide panel
 */
export type DefaultGuide = {
  /**
   * @desc 新手指引面板的标题
   * @descEn The title of the newbie guide panel
   */
  title: string;
  /**
   * @desc 新手指引面板的信息列表
   * @descEn Information list of the newbie guide panel
   */
  infos: GuideInfoItem[];
  /**
   * @desc 新手指引面板的更多链接
   * @descEn More links to the newbie guide panel
   */
  moreLink: string;
};

export type Theme = 'dark' | 'light';

export type ConnectModalProps = {
  /**
   * @desc ConnectModal 的标题，与 Modal 的 title 类型相同
   * @descEn The title of ConnectModal, the same as Modal's title type
   */
  title?: ModalProps['title'];
  /**
   * @desc ConnectModal 的主题
   * @descEn The theme of ConnectModal
   * @default 'light'
   */
  theme?: Theme;
  /**
   * @desc 弹框是否展示，与 Modal 的 open 类型相同
   * @descEn Whether the Modal is displayed, the same as the Modal's open type
   */
  open: ModalProps['open'];
  /**
   * @desc 弹框可见性改变回调
   * @descEn Callback when the Modal visibility changes
   * @param open 弹框是否展示
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * @desc 选中钱包回调
   * @descEn Callback when the wallet is selected
   * @param wallet 选中的钱包
   * @paramEn Selected wallet
   * @returns
   */
  onSelectWallet?: (wallet: Wallet) => void;
  /**
   * @desc 透传 Modal 的 props，需要注意的是以下属性将会被内部逻辑覆盖，配置不生效。
   * - title
   * - open
   * - onOpenChange
   * @descEn Pass through the props of Modal. Note that the following attributes will be overwritten by internal logic and the configuration will not take effect.
   */
  modalProps?: ModalProps;
  /**
   * @desc class 前缀
   * @descEn Class prefix
   */
  prefixCls?: string;
  /**
   * @desc 自定义 footer
   * @descEn Custom footer
   */
  footer?: React.ReactNode;
  /**
   * @desc 钱包列表
   * @descEn Wallet list
   */
  walletList?: Wallet[];
  /**
   * @desc 钱包分组排序函数
   * @descEn Wallet group sorting function
   * @param a groupName1
   * @param b groupName2
   * @returns
   */
  groupOrder?: (a: string, b: string) => number;
  /**
   * @desc 新手指引面板
   * @descEn Newbie guide panel
   */
  guide?: false | null | DefaultGuide;
  /**
   * @desc 自定义类名
   * @descEn Custom class name
   */
  className?: string;
};

export type PanelRoute = 'guide' | 'getWallet' | 'wallet' | 'qrCode';

export type MainPanelProps = Pick<ConnectModalProps, 'guide' | 'walletList'>;
