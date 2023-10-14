import { CopyOutlined } from '@ant-design/icons';
import { Space, message } from 'antd';
import React from 'react';

export interface AddressProps {
  ellipsis?: boolean | {
    showHead?: number;
    showTail?: number;
  };
  address?: string;
  copyable?: boolean;
}

export const Address: React.FC<AddressProps> = (props) => {
  const { ellipsis, address, copyable } = props;

  const isEllipsis = !!ellipsis;
  const {
    showHead = 6,
    showTail = 4,
  } = typeof ellipsis !== 'object' ? {
    showHead: 6,
    showTail: 4,
  } : ellipsis;

  if (!address) {
    return null;
  }

  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;

  return (
    <Space>
      <span>
        {isEllipsis ? `${filledAddress.slice(0, showHead)}...${filledAddress.slice(-showTail)}` : filledAddress}
      </span>
      {copyable && (
        <CopyOutlined
          title='Copy Address'
          onClick={() => {
            navigator.clipboard.writeText(filledAddress).then(() => {
              message.success('Address Copied');
            });
          }}
        />
      )}
    </Space>
  );
};
