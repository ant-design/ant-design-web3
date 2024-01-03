import type { ReactNode } from 'react';
import React, { useContext, useMemo } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import type { TooltipProps } from 'antd';
import { ConfigProvider, message, Space, Tooltip } from 'antd';
import classNames from 'classnames';

import { fillWith0x, formatAddress, writeCopyText } from '../utils';
import { useStyle } from './style';

export interface AddressProps {
  ellipsis?:
    | boolean
    | {
        headClip?: number;
        tailClip?: number;
      };
  address?: string;
  copyable?: boolean;
  tooltip?: boolean | TooltipProps['title'];
  format?: boolean | ((address: string) => ReactNode);
}

export const Address: React.FC<React.PropsWithChildren<AddressProps>> = (props) => {
  const { ellipsis, address, copyable, tooltip, format = false, children } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-address');
  const { wrapSSR, hashId } = useStyle(prefixCls);

  const mergedFormat = useMemo(() => {
    if (typeof format === 'function') {
      return format;
    }
    if (format) {
      return formatAddress;
    }
    return (input: string) => input;
  }, [format]);

  const isEllipsis = !!ellipsis;
  const { headClip = 6, tailClip = 4 } =
    typeof ellipsis !== 'object'
      ? {
          headClip: 6,
          tailClip: 4,
        }
      : ellipsis;

  if (!address) {
    return null;
  }

  const filledAddress = fillWith0x(address);

  const formattedAddress = mergedFormat(filledAddress);
  const displayTooltip = tooltip === undefined || tooltip === true ? filledAddress : tooltip;

  return wrapSSR(
    <>
      {contextHolder}
      <Space className={classNames(prefixCls, hashId)}>
        <Tooltip title={displayTooltip}>
          <span className={`${prefixCls}-text`}>
            {children ??
              (isEllipsis
                ? `${filledAddress.slice(0, headClip)}...${filledAddress.slice(-tailClip)}`
                : formattedAddress)}
          </span>
        </Tooltip>
        {copyable && (
          <CopyOutlined
            title="Copy Address"
            onClick={() => {
              writeCopyText(filledAddress).then(() => {
                messageApi.success('Address Copied!');
              });
            }}
          />
        )}
      </Space>
    </>,
  );
};
