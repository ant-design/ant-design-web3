import React, { useContext, useMemo, useState } from 'react';
import { CopyOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { Chain } from '@ant-design/web3-common';
import type { ButtonProps } from 'antd';
import { Avatar, Button, ConfigProvider, Divider, Dropdown, message, Space } from 'antd';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import classNames from 'classnames';

import { Address } from '../address';
import { CryptoPrice } from '../crypto-price';
import useIntl from '../hooks/useIntl';
import type { IntlType } from '../hooks/useIntl';
import { fillWith0x, writeCopyText } from '../utils';
import { ChainSelect } from './chain-select';
import type { ChainSelectProps } from './chain-select';
import type { ConnectButtonProps, ConnectButtonTooltipProps } from './interface';
import type { ProfileModalProps } from './profile-modal';
import { ProfileModal } from './profile-modal';
import { useStyle } from './style';
import { ConnectButtonTooltip } from './tooltip';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const {
    onConnectClick,
    onDisconnectClick,
    availableChains,
    onSwitchChain,
    tooltip,
    chain,
    account,
    avatar,
    profileModal = true,
    onMenuItemClick,
    actionsMenu = false,
    loading,
    onClick,
    balance,
    className,
    locale,
    ...restProps
  } = props;
  const intl = useIntl('ConnectButton', locale);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [profileOpen, setProfileOpen] = useState(false);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const [messageApi, contextHolder] = message.useMessage();
  const [showMenu, setShowMenu] = useState(false);
  let buttonText: React.ReactNode = intl.getMessage(intl.messages.connect);
  if (account) {
    buttonText =
      account?.name && !balance ? (
        account?.name
      ) : (
        <Address tooltip={false} ellipsis address={account.address}>
          {balance ? <CryptoPrice icon {...balance} /> : undefined}
        </Address>
      );
  }

  const buttonProps: ButtonProps = {
    style: props.style,
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    loading,
    className: classNames(className, prefixCls, hashId),
    onClick: (e) => {
      setShowMenu(false);
      if (account && !profileOpen && profileModal) {
        setProfileOpen(true);
      } else {
        onConnectClick?.();
      }
      onClick?.(e);
    },
    ...restProps,
  };

  const chainProps: ChainSelectProps = {
    hashId,
    onSwitchChain,
    currentChain: chain,
    chains: availableChains as Chain[],
  };

  const profileModalProps: ProfileModalProps = {
    intl,
    open: profileOpen,
    __hashId__: hashId,
    onDisconnect: () => {
      setProfileOpen(false);
      onDisconnectClick?.();
    },
    onClose: () => {
      setProfileOpen(false);
    },
    address: account?.address,
    name: account?.name,
    avatar: avatar ?? {
      icon: chain?.icon ? (
        <div className={`${prefixCls}-chain-icon`}>{chain?.icon}</div>
      ) : (
        <UserOutlined className={`${prefixCls}-default-icon`} />
      ),
    },
    balance,
    modalProps: typeof profileModal === 'object' ? profileModal : undefined,
  };

  const chainSelect =
    availableChains && availableChains.length > 1 ? <ChainSelect {...chainProps} /> : null;

  const buttonInnerText = (
    <div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-content-inner`}>
        <div className={`${prefixCls}-text`}>{buttonText}</div>
        {avatar && (
          <>
            <Divider type="vertical" />
            <div className={`${prefixCls}-avatar`}>
              <Avatar {...avatar} />
            </div>
          </>
        )}
      </div>
    </div>
  );

  const buttonContent = chainSelect ? (
    <Space.Compact>
      {chainSelect}
      <Button {...buttonProps}>{buttonInnerText}</Button>
    </Space.Compact>
  ) : (
    <Button {...buttonProps}>{buttonInnerText}</Button>
  );

  const defaultMenuItems: MenuItemType[] = useMemo(
    () => [
      {
        label: 'Copy Address',
        key: 'copyAddress',
        onClick: () => {
          setProfileOpen(false);
          if (account?.address) {
            writeCopyText(account?.address).then(() => {
              messageApi.success(intl.messages.addressCopied);
            });
          }
        },
        icon: <CopyOutlined />,
      },
      {
        label: intl.getMessage(intl.messages.disconnect),
        key: 'disconnect',
        onClick: () => {
          setProfileOpen(false);
          onDisconnectClick?.();
        },
        icon: <LoginOutlined />,
      },
    ],
    [account?.address, messageApi, onDisconnectClick],
  );

  const mergedMenuItems = useMemo<MenuItemType[]>(() => {
    if (!actionsMenu) {
      return [];
    }

    if (typeof actionsMenu === 'boolean') {
      return account ? defaultMenuItems : [];
    }

    if (actionsMenu.items) {
      return actionsMenu.items;
    }

    const combinedItems = account
      ? actionsMenu.extraItems
        ? [...actionsMenu.extraItems, ...defaultMenuItems]
        : defaultMenuItems
      : actionsMenu.extraItems || [];

    return combinedItems;
  }, [actionsMenu, defaultMenuItems, account]);

  const content =
    mergedMenuItems.length > 0 ? (
      <Dropdown
        open={showMenu}
        onOpenChange={setShowMenu}
        menu={{
          items: mergedMenuItems,
          onClick: onMenuItemClick,
        }}
      >
        {buttonContent}
      </Dropdown>
    ) : (
      buttonContent
    );

  let tooltipTitle: string = tooltip && account?.address ? fillWith0x(account?.address) : '';
  if (typeof tooltip === 'object' && typeof tooltip.title === 'string') {
    tooltipTitle = tooltip.title;
  }
  const getConnectButtonTooltipProps: () => ConnectButtonTooltipProps & { intl: IntlType } = () => {
    const mergedTooltipCopyable: ConnectButtonTooltipProps['copyable'] =
      typeof tooltip === 'object' ? tooltip.copyable !== false : !!tooltip;
    return {
      intl,
      copyable: mergedTooltipCopyable,
      title: tooltipTitle,
      prefixCls,
      __hashId__: hashId,
      ...(typeof tooltip === 'object' ? tooltip : {}),
    };
  };

  const main = (
    <>
      {contextHolder}
      {tooltipTitle ? (
        <ConnectButtonTooltip {...getConnectButtonTooltipProps()}>{content}</ConnectButtonTooltip>
      ) : (
        content
      )}
      <ProfileModal {...profileModalProps} />
    </>
  );

  return wrapSSR(main);
};

ConnectButton.displayName = 'ConnectButton';
