import React, { useContext, useMemo, useState } from 'react';
import type { ButtonProps } from 'antd';
import { Button, ConfigProvider, Dropdown, message } from 'antd';
import classNames from 'classnames';
import { Address } from '../address';
import type { ConnectButtonProps, ConnectButtonTooltipProps } from './interface';
import { ConnectButtonTooltip } from './tooltip';
import { ChainSelect } from './chain-select';
import { ProfileModal } from './profile-modal';
import { useStyle } from './style';
import { fillWith0x, writeCopyText } from '../utils';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { CopyOutlined, LoginOutlined } from '@ant-design/icons';

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
    onMenuClick,
    actionsMenu = false,
    _loading = false,
    loading,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [profileOpen, setProfileOpen] = useState(false);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const [messageApi, contextHolder] = message.useMessage();
  const [showMenu, setShowMenu] = useState(false);
  let buttonText: React.ReactNode = 'Connect Wallet';
  if (account) {
    buttonText = account?.name ?? <Address tooltip={false} ellipsis address={account.address} />;
  }

  const buttonProps: ButtonProps = {
    style: props.style,
    className: classNames(props.className, hashId, prefixCls),
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    loading: loading ?? _loading,
    ...restProps,
  };

  const renderChainSelect = () => {
    if (availableChains && availableChains.length > 1) {
      return (
        <ChainSelect
          hashId={hashId}
          onSwitchChain={onSwitchChain}
          currentChain={chain}
          chains={availableChains}
        />
      );
    }
    return null;
  };

  let content = (
    <Button {...buttonProps}>
      {renderChainSelect()}
      <ProfileModal
        open={profileOpen}
        __hashId__={hashId}
        onDisconnect={() => {
          setProfileOpen(false);
          onDisconnectClick?.();
        }}
        onClose={() => {
          setProfileOpen(false);
        }}
        address={account?.address}
        name={account?.name}
        avatar={
          avatar ?? {
            src: chain?.icon,
          }
        }
        modalProps={typeof profileModal === 'object' ? profileModal : undefined}
      />
      <div
        className={classNames(`${prefixCls}-text`, hashId)}
        onClick={() => {
          setShowMenu(false);
          if (account && !profileOpen && profileModal) {
            setProfileOpen(true);
          } else {
            onConnectClick?.();
          }
        }}
      >
        {buttonText}
      </div>
    </Button>
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
              messageApi.success('Address Copied!');
            });
          }
        },
        icon: <CopyOutlined />,
      },
      {
        label: 'Disconnect',
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
      return defaultMenuItems;
    }
    if (actionsMenu.items) {
      return actionsMenu.items;
    }
    return [...(actionsMenu.extraItems ?? []), ...defaultMenuItems];
  }, [actionsMenu, defaultMenuItems]);

  if (mergedMenuItems.length > 0) {
    content = (
      <Dropdown
        open={showMenu}
        onOpenChange={setShowMenu}
        menu={{
          items: mergedMenuItems,
          onClick: onMenuClick,
        }}
      >
        {content}
      </Dropdown>
    );
  }

  const mergedTooltipCopyable: ConnectButtonTooltipProps['copyable'] =
    typeof tooltip === 'object' ? tooltip.copyable !== false : !!tooltip;

  let tooltipTitle: string = tooltip && account?.address ? fillWith0x(account?.address) : '';
  if (typeof tooltip === 'object' && typeof tooltip.title === 'string') {
    tooltipTitle = tooltip.title;
  }

  const main = (
    <>
      {contextHolder}
      {tooltipTitle ? (
        <ConnectButtonTooltip
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
    </>
  );

  return wrapSSR(main);
};

ConnectButton.displayName = 'ConnectButton';
