import React, { useContext, useState } from 'react';
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

export enum BuildInMenuItemKey {
  CopyAddress = 'copyAddress',
  Disconnect = 'disconnect',
}

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const {
    address,
    connected,
    onConnectClick,
    onDisconnectClick,
    chains,
    onSwitchChain,
    tooltip,
    currentChain,
    name,
    avatar,
    menuItems,
    clickActionType,
    onMenuClick,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [profileOpen, setProfileOpen] = useState(false);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const [messageApi, contextHolder] = message.useMessage();
  let buttonText: React.ReactNode = 'Connect Wallet';
  if (connected) {
    buttonText = name ?? <Address tooltip={false} ellipsis address={address} />;
  }

  const buttonProps: ButtonProps = {
    style: props.style,
    className: classNames(props.className, hashId, prefixCls),
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    ...restProps,
  };

  const renderChainSelect = () => {
    if (chains && chains.length > 1) {
      return (
        <ChainSelect
          hashId={hashId}
          onSwitchChain={onSwitchChain}
          currentChain={currentChain}
          chains={chains}
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
        address={address}
        name={name}
        avatar={
          avatar ?? {
            src: currentChain?.icon,
          }
        }
      />
      <div
        className={classNames(`${prefixCls}-text`, hashId)}
        onClick={() => {
          if (clickActionType !== 'showMenu' && connected && !profileOpen) {
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

  if (menuItems && menuItems.length > 0 && clickActionType === 'showMenu') {
    content = (
      <Dropdown
        trigger={['click']}
        menu={{
          items: menuItems,
          onClick: (e) => {
            if (e.key === BuildInMenuItemKey.Disconnect) {
              setProfileOpen(false);
              onDisconnectClick?.();
            } else if (e.key === BuildInMenuItemKey.CopyAddress && address) {
              writeCopyText(address).then(() => {
                messageApi.success('Address Copied!');
              });
            } else if (onMenuClick) {
              onMenuClick(e);
            }
          },
        }}
      >
        {content}
      </Dropdown>
    );
  }

  const mergedTooltipCopyable: ConnectButtonTooltipProps['copyable'] =
    typeof tooltip === 'object' ? tooltip.copyable !== false : !!tooltip;

  let tooltipTitle: string = tooltip && address ? fillWith0x(address) : '';
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
