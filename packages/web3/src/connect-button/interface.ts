import type { ButtonProps, AvatarProps, MenuItemProps, TooltipProps } from 'antd';

export type ChainSelectItem = {
  id: number;
  name: string;
  icon?: React.ReactNode;
};

export type Banlance = {
  amount: number | bigint;
  type: string;
};

export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean;
  title?: boolean | string;
};

export type ConnectButtonProps = ButtonProps & {
  address?: string;
  domain?: string;
  connected?: boolean;
  chains?: ChainSelectItem[];
  banlance?: Banlance[];
  avatar?: AvatarProps;
  menuItems?: MenuItemProps[];
  onMenuClick?: (e: MenuItemProps) => void;
  walletIcon?: React.ReactNode;
  tooltip?: boolean | ConnectButtonTooltipProps;
};
