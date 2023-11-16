import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import type { Chain } from '@ant-design/web3-common';
import { DownOutlined } from '@ant-design/icons';

export interface ChainSelectProps {
  className?: string;
  chains: Chain[];
  style?: React.CSSProperties;
}

export const ChainSelect: React.FC<ChainSelectProps> = (props) => {
  return (
    <Dropdown
      menu={{
        items: props.chains.map((chain) => ({
          key: chain.id,
          label: chain.name,
          icon: chain.icon,
        })),
        onClick: console.log,
      }}
      trigger={['click']}
    >
      <Button onClick={(e) => e.preventDefault()} style={props.style} className={props.className}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};
ChainSelect.displayName = 'ChainSelect';
