import type { ButtonProps, AvatarProps, TooltipProps, MenuProps } from 'antd';
import type { ConnectorTriggerProps } from '@ant-design/web3-common';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import type { ProfileModalProps } from './profile-modal';

export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean;
  title?: boolean | string | React.ReactNode;
};

export type ConnectButtonProps = ButtonProps &
  ConnectorTriggerProps & {
    prefixCls?: string;
    avatar?: AvatarProps;
    onMenuClick?: (e: NonNullable<MenuProps['items']>[number]) => void;
    walletIcon?: React.ReactNode;
    tooltip?: boolean | ConnectButtonTooltipProps;
    profileModal?: boolean | ProfileModalProps['modalProps'];
    actionsMenu?:
      | boolean
      | {
          /**
           * Will override the default items
           */
          items?: MenuItemType[];
          /**
           * Will append to the default items
           */
          extraItems?: MenuItemType[];
        };
  };

export { ConnectorTriggerProps };
