import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { type Wallet } from '@ant-design/web3-common';
import type { ButtonProps, MenuProps } from 'antd';
import { Button, ConfigProvider, Dropdown, Space } from 'antd';
import classNames from 'classnames';

import type { IntlType } from '../hooks/useIntl';

export interface ConnectButtonInnerProps extends ButtonProps {
  /** @internal */
  __hashId__: string;
  preContent: React.ReactNode;
  showQuickConnect?: boolean;
  availableWallets?: Wallet[];
  needSign?: boolean;
  onConnectClick?: (wallet?: Wallet) => void;
  onDisconnectClick?: () => void;
  onOpenProfileClick?: () => void;
  onSignInClick?: () => void;
  intl: IntlType;
}

export const ConnectButtonInner: React.FC<ConnectButtonInnerProps> = (props) => {
  const {
    preContent,
    showQuickConnect,
    availableWallets,
    content,
    children,
    onClick,
    onConnectClick,
    onDisconnectClick,
    onOpenProfileClick,
    onSignInClick,
    intl,
    __hashId__,
    className,
    needSign,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [firstInstallWallet, setFirstInstallWallet] = useState<Wallet | undefined>(undefined);
  const [items, setItems] = useState<MenuProps['items']>([]);

  const getWalletIcon = useCallback(
    (wallet: Wallet) => {
      const icon = wallet.icon;

      return (
        <span className={classNames(__hashId__, `${prefixCls}-quick-connect-icon`)}>
          {typeof icon === 'string' ? <img src={icon} alt={`${wallet.name} Icon`} /> : icon}
        </span>
      );
    },
    [__hashId__, prefixCls],
  );

  const generateQuickConnectItems = async (wallets: Wallet[] = []) => {
    if (!showQuickConnect) {
      setFirstInstallWallet(undefined);
      setItems([]);
      return;
    }
    const filterNotInstallWallets = await Promise.all(
      wallets.map(async (wallet) => {
        try {
          if (await wallet.hasExtensionInstalled?.()) {
            return wallet;
          }
        } catch (e) {
          console.error(`Check wallet ${wallet.name} hasExtensionInstalled error:`, e);
        }
        return null;
      }),
    );
    const installedWallets: Wallet[] = filterNotInstallWallets.filter(
      (item) => item !== null,
    ) as Wallet[];

    // Add universal protocol wallets to the list
    const allQuickWallets = installedWallets.concat(
      wallets.filter((item) => item.universalProtocol && !installedWallets.includes(item)),
    );

    setFirstInstallWallet(allQuickWallets.shift());
    const newItems = allQuickWallets.map((item) => {
      return {
        key: item.name,
        icon: getWalletIcon(item),
        label: item.name,
        onClick: () => {
          onConnectClick?.(item);
        },
      };
    });

    newItems.push({
      key: '__more__',
      icon: <MoreOutlined />,
      label: intl.getMessage(intl.messages.moreWallets),
      onClick: () => {
        onConnectClick?.();
      },
    });
    setItems(newItems);
  };

  useEffect(() => {
    generateQuickConnectItems(availableWallets);
  }, [availableWallets, showQuickConnect]);

  const buttonContent = useMemo(() => {
    // if ( account?.status === ConnectStatus.Connected) {
    if (needSign) {
      return (
        <Dropdown.Button
          onClick={(e) => {
            onClick?.(e);
            onSignInClick?.();
          }}
          menu={{
            items: [
              {
                key: 'profile',
                label: intl.getMessage(intl.messages.profile),
                onClick: onOpenProfileClick,
              },
              {
                key: 'disconnect',
                label: intl.getMessage(intl.messages.disconnect),
                onClick: onDisconnectClick,
              },
            ],
          }}
          {...restProps}
          className={className}
        >
          {children}
        </Dropdown.Button>
      );
    }

    if (showQuickConnect && firstInstallWallet) {
      return (
        <Dropdown.Button
          {...restProps}
          menu={{
            items,
          }}
          className={classNames(className, `${prefixCls}-quick-connect`)}
          onClick={(e) => {
            onClick?.(e);
            onConnectClick?.(firstInstallWallet);
          }}
        >
          {children}
          {getWalletIcon(firstInstallWallet)}
        </Dropdown.Button>
      );
    }

    return (
      <Button
        {...restProps}
        className={className}
        onClick={(e) => {
          onClick?.(e);
          onConnectClick?.();
        }}
      >
        {children}
      </Button>
    );
  }, [
    firstInstallWallet,
    items,
    needSign,
    onClick,
    onConnectClick,
    onOpenProfileClick,
    onDisconnectClick,
    showQuickConnect,
  ]);

  return preContent ? (
    <Space.Compact>
      {preContent}
      {buttonContent}
    </Space.Compact>
  ) : (
    buttonContent
  );
};

ConnectButtonInner.displayName = 'ConnectButtonInner';
