import type { ButtonProps, AvatarProps, MenuItemProps, TooltipProps } from 'antd';
import type { ConnectorTriggerProps } from '@ant-design/web3-common';

export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean;
  title?: boolean | string;
};

export type ConnectButtonProps = ButtonProps &
  ConnectorTriggerProps & {
    avatar?: AvatarProps;
    menuItems?: MenuItemProps[];
    onMenuClick?: (e: MenuItemProps) => void;
    walletIcon?: React.ReactNode;
    tooltip?: boolean | ConnectButtonTooltipProps;
  };
