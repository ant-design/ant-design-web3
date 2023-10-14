import { CopyOutlined } from '@ant-design/icons';
import type { TooltipProps } from 'antd';
import { Space, Tooltip, message } from 'antd';
import React from 'react';

export interface AddressProps {
<<<<<<< Updated upstream
  ellipsis?: boolean | {
    headClip?: number;
    tailClip?: number;
  };
=======
  ellipsis?:
    | boolean
    | {
        showHead?: number;
        showTail?: number;
      };
>>>>>>> Stashed changes
  address?: string;
  copyable?: boolean;
  tooltip?: boolean | TooltipProps['title'];
}

export const Address: React.FC<AddressProps> = (props) => {
  const { ellipsis, address, copyable, tooltip } = props;

  const isEllipsis = !!ellipsis;
<<<<<<< Updated upstream
  const {
    headClip = 6,
    tailClip = 4,
  } = typeof ellipsis !== 'object' ? {
    headClip: 6,
    tailClip: 4,
  } : ellipsis;
=======
  const { showHead = 6, showTail = 4 } =
    typeof ellipsis !== 'object'
      ? {
          showHead: 6,
          showTail: 4,
        }
      : ellipsis;
>>>>>>> Stashed changes

  if (!address) {
    return null;
  }

  const filledAddress = address.startsWith('0x') ? address : `0x${address}`;
  const displayTooltip = tooltip === undefined || tooltip === true ? filledAddress : tooltip;

  return (
    <Space>
      <Tooltip title={displayTooltip}>
<<<<<<< Updated upstream
        {isEllipsis ? `${filledAddress.slice(0, headClip)}...${filledAddress.slice(-tailClip)}` : filledAddress}
=======
        {isEllipsis
          ? `${filledAddress.slice(0, showHead)}...${filledAddress.slice(-showTail)}`
          : filledAddress}
>>>>>>> Stashed changes
      </Tooltip>
      {copyable && (
        <CopyOutlined
          title="Copy Address"
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
