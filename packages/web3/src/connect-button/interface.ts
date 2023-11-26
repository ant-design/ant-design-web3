import type { ButtonProps, AvatarProps, TooltipProps, MenuProps } from 'antd';
import type { ConnectorTriggerProps } from '@ant-design/web3-common';
import type { MenuItemType as AntMenuItemType } from 'antd/es/menu/hooks/useItems';

export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean;
  title?: boolean | string | React.ReactNode;
};

export type BuildInMenuItemType = 'disconnect' | 'copyAddress';

export type MenuItemType = AntMenuItemType & {
  role?: BuildInMenuItemType;
};

export type ConnectButtonProps = ButtonProps &
  ConnectorTriggerProps & {
    prefixCls?: string;
    avatar?: AvatarProps;
    menuItems?: MenuItemType[];
    onMenuClick?: (e: NonNullable<MenuProps['items']>[number]) => void;
    walletIcon?: React.ReactNode;
    tooltip?: boolean | ConnectButtonTooltipProps;
    clickActionType?: 'showMenu' | 'showProfileModal';
  };

export { ConnectorTriggerProps };
