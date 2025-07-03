import type { ReactNode } from 'react';
import React, { isValidElement, useContext, useMemo } from 'react';
import { ChainType, checksumAddress, type Locale } from '@ant-design/web3-common';
import type { TooltipProps } from 'antd';
import { ConfigProvider, Tooltip, Typography } from 'antd';
import type { TextProps } from 'antd/lib/typography/Text';
import classNames from 'classnames';

import { useProvider } from '../hooks';
import useIntl from '../hooks/useIntl';
import { fillWithPrefix, formatAddress } from '../utils';
import { useStyle } from './style';

/**
 * Props for the Address component.
 */
export interface AddressProps extends Omit<TextProps, 'ellipsis'> {
  /**
   * Address ellipsis configuration.
   * If true, the address will be clipped with default head and tail values.
   * If an object, you can specify custom headClip and tailClip values.
   */
  ellipsis?:
    | boolean
    | {
        headClip?: number;
        tailClip?: number;
      };
  /**
   * The address to display.
   */
  address?: string;
  /**
   * The prefix to use for the address.
   * If false, no prefix will be used.
   */
  addressPrefix?: string | false;
  /**
   * Whether the address is copyable.
   */
  copyable?: boolean;
  /**
   * WWhether to use checksum processing.
   */
  checksum?: ChainType;
  /**
   * Tooltip configuration.
   * If true, the address will be shown in a tooltip.
   * If a string or ReactNode, it will be used as the tooltip content.
   */
  tooltip?: boolean | TooltipProps['title'];
  /**
   * Address format configuration.
   * If true, the address will be formatted.
   * If a function, it will be used to format the address.
   */
  format?: boolean | ((address: string) => ReactNode);
  /**
   * Locale configuration for the Address component.
   */
  locale?: Locale['Address'];
}

export const Address: React.FC<React.PropsWithChildren<AddressProps>> = (props) => {
  const {
    ellipsis,
    addressPrefix: addressPrefixProp,
    address,
    checksum,
    copyable = false,
    tooltip = true,
    format = false,
    children,
    locale,
    className,
    ...restProps
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

  let filledAddress = fillWithPrefix(address, addressPrefixProp, addressPrefixContext);
  if (checksum) {
    filledAddress = checksumAddress(filledAddress, checksum);
  }

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
    <Typography.Text
      copyable={
        copyable
          ? {
              text: checksum ? checksumAddress(filledAddress, checksum) : filledAddress,
              tooltips: [messages.copyTips, messages.copiedTips],
            }
          : false
      }
      className={classNames(prefixCls, hashId, className)}
      {...restProps}
    >
      <Tooltip title={mergedTooltip()}>
        {children ??
          (isEllipsis
            ? `${filledAddress.slice(0, headClip)}...${filledAddress.slice(-tailClip)}`
            : formattedAddress)}
      </Tooltip>
    </Typography.Text>,
  );
};
