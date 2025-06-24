import React, { useContext, useMemo, useState } from 'react';
import { CopyOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { ConnectStatus, type Chain, type Wallet } from '@ant-design/web3-common';
import type { ButtonProps } from 'antd';
import { Avatar, Badge, ConfigProvider, Divider, Dropdown, message } from 'antd';
import classNames from 'classnames';

import { Address } from '../address';
import { CryptoPrice } from '../crypto-price';
import { useConnection, useProvider } from '../hooks';
import useIntl from '../hooks/useIntl';
import { fillWithPrefix, writeCopyText } from '../utils';
import { ChainSelect } from './chain-select';
import type { ChainSelectProps } from './chain-select';
import { ConnectButtonInner } from './connect-button-inner';
import {
  type ConnectButtonProps,
  type ConnectButtonTooltipProps,
  type MenuItemType,
} from './interface';
import type { ProfileModalProps } from './profile-modal';
import { ProfileModal } from './profile-modal';
import { useStyle } from './style';
import { ConnectButtonTooltip } from './tooltip';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const {
    chainSelect = true,
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
    sign,
    signBtnTextRender,
    children,
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
  const [signed, setSigned] = useState(false);

  const { coverAddress = true } = typeof balance !== 'object' ? { coverAddress: true } : balance;
  const needSign = !!(sign?.signIn && account?.status === ConnectStatus.Connected && account);
  let buttonText: React.ReactNode = children || intl.getMessage(intl.messages.connect);
  if (account) {
    buttonText = (
      <>
        {(!balance || !coverAddress) &&
          (account?.name ? (
            account.name
          ) : (
            <Address
              tooltip={false}
              ellipsis
              address={account.address}
              addressPrefix={addressPrefixProp}
            />
          ))}
        {balance && !coverAddress && <Divider type="vertical" />}
        {balance && <CryptoPrice icon {...balance} />}
      </>
    );
  }

  const buttonProps: ButtonProps = {
    style: props.style,
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    loading,
    className: classNames(className, prefixCls, hashId),
    onClick: async (e) => {
      setShowMenu(false);
      if (account && !profileOpen && profileModal && !needSign) {
        setProfileOpen(true);
      }
      onClick?.(e);

      try {
        if (needSign) {
          await sign?.signIn?.(account?.address);
          setSigned(true);
        }
      } catch (error: any) {
        messageApi.error(error.message);
      }
    },
    ...restProps,
  };

  const chainProps: ChainSelectProps = {
    hashId,
    onSwitchChain,
    currentChain: chain,
    chains: availableChains as Chain[],
    buttonProps: {
      size: props.size,
      type: props.type,
    },
  };

  const chainIcon = account?.avatar ?? chain?.icon;
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
    avatar: {
      className: chainIcon
        ? `${prefixCls}-chain-icon`
        : `${prefixCls}-chain-icon ${prefixCls}-default-icon`,
      src: chainIcon,
      icon: !chainIcon && <UserOutlined />,
      ...avatar,
    },
    balance,
    modalProps: typeof profileModal === 'object' ? profileModal : undefined,
    addressPrefix: addressPrefixProp,
    size: props.size,
  };

  const chainSelectRender =
    chainSelect && availableChains && availableChains.length > 1 ? (
      <ChainSelect {...chainProps} />
    ) : null;

  if (needSign) {
    buttonText = signBtnTextRender ? (
      signBtnTextRender(buttonText, account)
    ) : (
      <>
        {`${intl.getMessage(intl.messages.sign)}: `}
        {account?.address.slice(0, 6)}...{account?.address.slice(-4)}
      </>
    );
  }

  const unsigned = needSign && !signed;

  console.log('unsigned:', unsigned, account?.status);

  const buttonInnerText = (
    <div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-content-inner`}>
        {needSign && account.status !== ConnectStatus.Signed && <Badge status="error" />}
        <div className={`${prefixCls}-text`}>{buttonText}</div>
        {(account?.avatar || avatar) && (
          <>
            <Divider type="vertical" />
            <div className={`${prefixCls}-avatar`}>
              <Avatar {...{ src: account?.avatar ?? avatar?.src, ...avatar }} />
            </div>
          </>
        )}
      </div>
    </div>
  );

  console.log('signIn:', typeof sign?.signIn, account?.status);

  const buttonContent = (
    <ConnectButtonInner
      intl={intl}
      {...buttonProps}
      preContent={chainSelectRender}
      showQuickConnect={quickConnect && !account}
      availableWallets={availableWallets}
      needSign={needSign}
      onConnectClick={(wallet?: Wallet) => {
        if (!account) {
          onConnectClick?.(wallet);
        }
      }}
      onDisconnectClick={onDisconnectClick}
      onOpenProfileClick={() => setProfileOpen(true)}
      onSignInClick={() => {
        if (!sign?.signIn) {
          return;
        }

        console.log('onSignInClick:', account, needSign, signed);
        if (signed) {
          return;
        }

        if (account?.status === ConnectStatus.Signed) {
          setSigned(true);
          return;
        }

        // If account is not connected, we need to sign in
        // If account is connected but not signed, we also need to sign in
        console.log('signIn:', account?.address, needSign);
        if (account?.status === ConnectStatus.Connected && signed) {
          return;
        }

        // If account is not connected, we need to sign in
        // If account is connected but not signed, we also need to sign in
        console.log('signIn:', account?.address, needSign);
        if (account && needSign) {
          sign
            .signIn?.(account.address!)
            .then(() => {
              setSigned(true);
            })
            .catch((error) => {
              messageApi.error(error.message);
            });
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
