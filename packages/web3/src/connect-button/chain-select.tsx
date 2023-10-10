import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import type { ChainSelectProps } from './interface';
import { DownOutlined } from '@ant-design/icons';

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
      <Button
        onClick={(e) => e.preventDefault()}
        style={props.style}
        className={props.className}
        size={props.size}
        type={props.type}
        ghost={props.ghost}
      >
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};
ChainSelect.displayName = 'ChainSelect';
