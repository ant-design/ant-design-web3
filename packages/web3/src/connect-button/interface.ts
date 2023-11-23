import type { ButtonProps, AvatarProps, TooltipProps, MenuProps } from 'antd';
import type { ConnectorTriggerProps } from '@ant-design/web3-common';

export type ConnectButtonTooltipProps = TooltipProps & {
  copyable?: boolean;
  title?: boolean | string | React.ReactNode;
};

export type ConnectButtonProps = ButtonProps &
  ConnectorTriggerProps & {
    avatar?: AvatarProps;
    menuItems?: MenuProps['items'];
    onMenuClick?: (e: NonNullable<MenuProps['items']>[number]) => void;
    walletIcon?: React.ReactNode;
    tooltip?: boolean | ConnectButtonTooltipProps;
  };

export { ConnectorTriggerProps };
