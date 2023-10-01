import type React from 'react';
import type { ModalProps } from 'antd';

export type Wallet = {
  name: string;
  remark: string;
  icon?: string | React.ReactNode;
  link?: string;
  pluginLink?: string;
  group?: string;
};

export type GuideInfoItem = {
  title: string | React.ReactNode;
  icon: string | React.ReactNode;
  description: string | React.ReactNode;
};

export type ConnectModalProps = {
  title?: ModalProps['title'];
  open: ModalProps['open'];
  onOpenChange?: (open: boolean) => void;
  modalProps?: ModalProps;
  prefixCls?: string;
  footer?: React.ReactNode;
  walletList?: Wallet[];
  groupOrder?: (a: string, b: string) => number;
  guide?: false | null | { 
    title: string; 
    infos: GuideInfoItem[]; 
    moreLink: string 
  } | React.ReactNode;
};
