import type React from 'react';
import type { ModalProps } from 'antd';
import type { Wallet } from '@ant-design/web3-common';
import { get } from 'lodash';

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
  description?: string | React.ReactNode;
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
  /**
   * @desc 创建钱包按钮文案
   * @descEn Create wallet button text
   */
  getWalletBtnText?: string;
  /**
   * @desc 更多链接文案
   * @descEn More link text
   */
  moreLinkText?: string;
};

export type ConnectModalProps = ModalProps & {
  /**
   * @desc 选中钱包回调
   * @descEn Callback when the wallet is selected
   * @param wallet 选中的钱包
   * @paramEn Selected wallet
   * @returns
   */
  onSelectWallet?: (wallet: Wallet) => void;
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
  guide?: boolean | null | DefaultGuide;
};

export type PanelRoute = 'guide' | 'getWallet' | 'wallet' | 'qrCode';

export type MainPanelProps = Pick<ConnectModalProps, 'guide' | 'walletList'>;
