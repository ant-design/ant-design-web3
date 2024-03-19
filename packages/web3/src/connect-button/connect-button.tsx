import React, { useContext, useMemo, useState } from 'react';
import { CopyOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Wallet, type Chain } from '@ant-design/web3-common';
import type { ButtonProps } from 'antd';
import { Avatar, ConfigProvider, Divider, Dropdown, message } from 'antd';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import classNames from 'classnames';

import { Address } from '../address';
import { CryptoPrice } from '../crypto-price';
import { useProvider } from '../hooks';
import useIntl from '../hooks/useIntl';
import { fillWithPrefix, writeCopyText } from '../utils';
import { ChainSelect } from './chain-select';
import type { ChainSelectProps } from './chain-select';
import { ConnectButtonInner } from './connect-button-inner';
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
    availableWallets,
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
    quickConnect,
    addressPrefix: addressPrefixProp,
    ...restProps
  } = props;
  const intl = useIntl('ConnectButton', locale);
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { addressPrefix: addressPrefixContext } = useProvider();
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
        <Address
          tooltip={false}
          ellipsis
          address={account.address}
          addressPrefix={addressPrefixProp}
        >
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
    addressPrefix: addressPrefixProp,
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

  const buttonContent = (
    <ConnectButtonInner
      intl={intl}
      {...buttonProps}
      preContent={chainSelect}
      showQuickConnect={quickConnect && !account}
      availableWallets={availableWallets}
      onConnectClick={(wallet?: Wallet) => {
        if (!account) {
          onConnectClick?.(wallet);
        }
      }}
      __hashId__={hashId}
    >
      {buttonInnerText}
    </ConnectButtonInner>
  );

  const defaultMenuItems: MenuItemType[] = useMemo(
    () => [
      {
        label: intl.getMessage(intl.messages.copyAddress),
        key: 'copyAddress',
        onClick: () => {
          setProfileOpen(false);
          if (account?.address) {
            writeCopyText(account?.address).then(() => {
              messageApi.success(intl.messages.copied);
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

  const mergedTooltipCopyable: ConnectButtonTooltipProps['copyable'] =
    typeof tooltip === 'object' ? tooltip.copyable !== false : !!tooltip;

  let tooltipTitle: string =
    tooltip && account?.address
      ? fillWithPrefix(account?.address, addressPrefixProp, addressPrefixContext)
      : '';
  if (typeof tooltip === 'object' && typeof tooltip.title === 'string') {
    tooltipTitle = tooltip.title;
  }

  const main = (
    <>
      {contextHolder}
      {tooltipTitle ? (
        <ConnectButtonTooltip
          intl={intl}
          copyable={mergedTooltipCopyable}
          title={tooltipTitle}
          prefixCls={prefixCls}
          __hashId__={hashId}
          {...(typeof tooltip === 'object' ? tooltip : {})}
        >
          {content}
        </ConnectButtonTooltip>
      ) : (
        content
      )}
      <ProfileModal {...profileModalProps} />
    </>
  );

  return wrapSSR(main);
};

ConnectButton.displayName = 'ConnectButton';
