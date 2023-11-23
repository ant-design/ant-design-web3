import React, { useContext, useState } from 'react';
import { Button, ConfigProvider } from 'antd';
import classNames from 'classnames';
import { Address } from '../address';
import type { ConnectButtonProps, ConnectButtonTooltipProps } from './interface';
import { ConnectButtonTooltip } from './tooltip';
import { ChainSelect } from './chain-select';
import { ProfileModal } from './profile-modal';
import { useStyle } from './style';

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
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button');
  const [profileOpen, setProfileOpen] = useState(false);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  let buttonText: React.ReactNode = 'Connect Wallet';
  if (connected) {
    buttonText = name ?? <Address ellipsis address={address} />;
  }
  const buttonProps = {
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

  const content = (
    <Button {...buttonProps}>
      {renderChainSelect()}
      <ProfileModal
        open={profileOpen}
        hashId={hashId}
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
          if (connected) {
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

  const mergedTooltipCopyable: ConnectButtonTooltipProps['copyable'] =
    typeof tooltip === 'object' ? tooltip.copyable !== false : !!tooltip;

  const customTooltipTitle = typeof tooltip === 'object' && tooltip.title !== undefined;

  const tooltipTitle = customTooltipTitle ? (
    tooltip.title
  ) : (
    <Address
      ellipsis={{
        headClip: 8,
        tailClip: 6,
      }}
      copyable={mergedTooltipCopyable}
      tooltip={false}
      address={address}
    />
  );

  return wrapSSR(
    tooltip || (!customTooltipTitle && !!address) ? (
      <ConnectButtonTooltip
        copyable={customTooltipTitle && mergedTooltipCopyable}
        title={tooltipTitle}
        {...(typeof tooltip === 'object' ? tooltip : {})}
      >
        {content}
      </ConnectButtonTooltip>
    ) : (
      content
    ),
  );
};

ConnectButton.displayName = 'ConnectButton';
