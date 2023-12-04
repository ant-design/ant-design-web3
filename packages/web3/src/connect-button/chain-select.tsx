import React, { useContext } from 'react';
import { Dropdown, Space, ConfigProvider, Divider, Button } from 'antd';
import type { Chain } from '@ant-design/web3-common';
import classNames from 'classnames';
import { DownOutlined } from '@ant-design/icons';

export interface ChainSelectProps {
  className?: string;
  hashId: string;
  chains: Chain[];
  onSwitchChain?: (chain: Chain) => void;
  currentChain?: Chain;
  style?: React.CSSProperties;
}

export const ChainSelect: React.FC<ChainSelectProps> = ({
  className,
  onSwitchChain,
  style,
  chains,
  hashId,
  currentChain,
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-connect-button-chain-select');

  return (
    <Button>
      <Dropdown
        className={classNames(className, hashId, prefixCls)}
        menu={{
          items: chains.map((chain) => ({
            key: chain.id,
            label: chain.name,
            icon: chain.icon,
            onClick: () => {
              onSwitchChain?.(chain);
            },
          })),
        }}
        trigger={['click']}
      >
        <div style={style}>
          <Space>
            {currentChain?.icon}
            {currentChain?.name}
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
    </Button>
  );
};
ChainSelect.displayName = 'ChainSelect';
