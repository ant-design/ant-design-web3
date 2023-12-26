import type { ButtonProps, AvatarProps, TooltipProps, MenuProps } from 'antd';
import type { ConnectorTriggerProps, Locale } from '@ant-design/web3-common';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import type { ProfileModalProps } from './profile-modal';
import type { AddressProps } from '../address';

export type ConnectButtonTooltipProps = TooltipProps & {
  __hashId__?: string;
  copyable?: boolean;
  title?: boolean | string | React.ReactNode;
  format?: AddressProps['format'];
};

export type ConnectButtonProps = ButtonProps &
  ConnectorTriggerProps & {
    prefixCls?: string;
    locale?: Locale['ConnectButton'];
    avatar?: AvatarProps;
    onMenuItemClick?: (e: NonNullable<MenuProps['items']>[number]) => void;
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
