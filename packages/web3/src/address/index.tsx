import type { ReactNode } from 'react';
import React, { isValidElement, useContext, useMemo } from 'react';
import { type Locale } from '@ant-design/web3-common';
import type { TooltipProps } from 'antd';
import { ConfigProvider, Space, Tooltip, Typography } from 'antd';
import classNames from 'classnames';

import { useProvider } from '../hooks';
import useIntl from '../hooks/useIntl';
import { fillWithPrefix, formatAddress } from '../utils';
import { useStyle } from './style';

export interface AddressProps {
  ellipsis?:
    | boolean
    | {
        headClip?: number;
        tailClip?: number;
      };
  address?: string;
  addressPrefix?: string | false;
  copyable?: boolean;
  tooltip?: boolean | TooltipProps['title'];
  format?: boolean | ((address: string) => ReactNode);
  locale?: Locale['Address'];
}

export const Address: React.FC<React.PropsWithChildren<AddressProps>> = (props) => {
  const {
    ellipsis,
    addressPrefix: addressPrefixProp,
    address,
    copyable,
    tooltip = true,
    format = false,
    children,
    locale,
  } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { addressPrefix: addressPrefixContext } = useProvider();
  const prefixCls = getPrefixCls('web3-address');
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const { messages } = useIntl('Address', locale);

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

  const filledAddress = fillWithPrefix(address, addressPrefixProp, addressPrefixContext);

  const mergedTooltip = () => {
    if (isValidElement(tooltip) || typeof tooltip === 'string') {
      return tooltip;
    }
    if (tooltip) {
      return filledAddress;
    }
    return tooltip;
  };

  const formattedAddress = mergedFormat(filledAddress);

  return wrapSSR(
    <Space className={classNames(prefixCls, hashId)}>
      <Typography.Text
        copyable={
          copyable
            ? {
                text: filledAddress,
                tooltips: [messages.copyTips, messages.copiedTips],
              }
            : false
        }
      >
        <Tooltip title={mergedTooltip()}>
          {children ??
            (isEllipsis
              ? `${filledAddress.slice(0, headClip)}...${filledAddress.slice(-tailClip)}`
              : formattedAddress)}
        </Tooltip>
      </Typography.Text>
    </Space>,
  );
};
