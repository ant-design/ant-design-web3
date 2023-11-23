import React from 'react';
import { Button, Dropdown } from 'antd';
import { Address } from '../address';
import type { ConnectButtonProps, ConnectButtonTooltipProps } from './interface';
import { ConnectButtonTooltip } from './tooltip';
import { c } from 'vitest/dist/reporters-5f784f42';

export const ConnectButton: React.FC<ConnectButtonProps> = (props) => {
  const {
    address,
    connected,
    onConnectClick,
    onDisconnectClick,
    chains,
    currentChain,
    onSwitchChain,
    tooltip,
    menuItems,
    ...restProps
  } = props;

  const buttonProps = {
    style: props.style,
    className: props.className,
    size: props.size,
    type: props.type,
    ghost: props.ghost,
    onClick: () => {
      if (connected) {
        onDisconnectClick?.();
      } else {
        onConnectClick?.();
      }
    },
    children: connected ? <Address ellipsis address={address} /> : 'Connect Wallet',
    ...restProps,
  };

  let content = <Button {...buttonProps} />;

  if (chains && chains.length > 1) {
    content = (
      <Dropdown.Button
        icon={currentChain?.icon}
        menu={{
          items: chains.map((item) => {
            return {
              onClick: () => {
                onSwitchChain?.(item);
              },
              icon: item.icon,
              label: item.name,
              key: item.id,
            };
          }),
        }}
        {...buttonProps}
      />
    );
  }

  if (menuItems && menuItems.length > 0) {
    content = (
      <Dropdown
        menu={{
          items: menuItems,
        }}
      >
        <Button {...buttonProps} />
      </Dropdown>
    );
  }

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

  return tooltip || (!customTooltipTitle && !!address) ? (
    <ConnectButtonTooltip
      copyable={customTooltipTitle && mergedTooltipCopyable}
      title={tooltipTitle}
      {...(typeof tooltip === 'object' ? tooltip : {})}
    >
      {content}
    </ConnectButtonTooltip>
  ) : (
    content
  );
};

ConnectButton.displayName = 'ConnectButton';
