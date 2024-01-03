import type { ReactNode } from 'react';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import type { Locale } from '@ant-design/web3-common';
import type { TooltipProps } from 'antd';
import { ConfigProvider, Space, Tooltip } from 'antd';
import classNames from 'classnames';

import useIntl from '../hooks/useIntl';
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
  locale?: Locale['Address'];
}

export const Address: React.FC<React.PropsWithChildren<AddressProps>> = (props) => {
  const { ellipsis, address, copyable, tooltip, format = false, children, locale } = props;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-address');
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
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

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!address) {
    return null;
  }

  const filledAddress = fillWith0x(address);

  const formattedAddress = mergedFormat(filledAddress);
  const displayTooltip = tooltip === undefined || tooltip === true ? filledAddress : tooltip;

  return wrapSSR(
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
        <>
          {copied ? (
            <CheckOutlined title={messages.copiedTips} />
          ) : (
            <CopyOutlined
              title={messages.copyTips}
              onClick={() => {
                writeCopyText(filledAddress).then(() => {
                  setCopied(true);
                  timerRef.current = setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                });
              }}
            />
          )}
        </>
      )}
    </Space>,
  );
};
