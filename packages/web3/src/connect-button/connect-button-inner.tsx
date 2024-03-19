import React, { useContext, useEffect, useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import type { Wallet } from '@ant-design/web3-common';
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
  onConnectClick?: (wallet?: Wallet) => void;
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
    intl,
    __hashId__,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [firstInstallWallet, setFirstInstallWallet] = useState<Wallet | undefined>(undefined);
  const [items, setItems] = useState<MenuProps['items']>([]);

  const getWalletIcon = (icon?: string | React.ReactNode) => {
    return typeof icon === 'string' ? (
      <img className={classNames(__hashId__, `${prefixCls}-quick-connect-icon`)} src={icon} />
    ) : (
      icon
    );
  };

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
        icon: getWalletIcon(item.icon),
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

  const buttonContent =
    showQuickConnect && firstInstallWallet ? (
      <Dropdown.Button
        {...restProps}
        menu={{
          items,
        }}
        onClick={(e) => {
          onClick?.(e);
          onConnectClick?.(firstInstallWallet);
        }}
      >
        <Space>
          {children}
          {getWalletIcon(firstInstallWallet?.icon)}
        </Space>
      </Dropdown.Button>
    ) : (
      <Button
        {...restProps}
        onClick={(e) => {
          onClick?.(e);
          onConnectClick?.();
        }}
      >
        {children}
      </Button>
    );

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
