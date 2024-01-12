import { useMemo, type PropsWithChildren } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import classNames from 'classnames';

import type { IntlType } from '../hooks/useIntl';
import { formatAddress, writeCopyText } from '../utils';
import type { ConnectButtonTooltipProps } from './interface';

export const ConnectButtonTooltip: React.FC<
  PropsWithChildren<
    ConnectButtonTooltipProps & {
      intl: IntlType;
    }
  >
> = ({ title, intl, copyable, children, format, prefixCls, __hashId__, ...restProps }) => {
  const {
    messages: { copyAddress, addressCopied, walletAddress },
    getMessage,
  } = intl;
  const [messageApi, contextHolder] = message.useMessage();
  const mergedFormat = useMemo(() => {
    if (typeof format === 'function') {
      return format;
    }
    if (format) {
      return formatAddress;
    }
    return (input: string) => input;
  }, [format]);

  const mergedTitle = typeof title === 'string' ? mergedFormat(title) : title;

  if (!mergedTitle) return null;
  const content = copyable ? (
    format ? (
      <>
        <div className={`${prefixCls}-tooltip-title`}>
          {getMessage(walletAddress)}{' '}
          <CopyOutlined
            title={getMessage(copyAddress)}
            onClick={() => {
              writeCopyText(String(title)).then(() => {
                messageApi.success(getMessage(addressCopied));
              });
            }}
          />
        </div>
        <div className={`${prefixCls}-tooltip-content`}>{mergedTitle}</div>
      </>
    ) : (
      <>
        {mergedTitle}{' '}
        <CopyOutlined
          title={getMessage(copyAddress)}
          onClick={() => {
            writeCopyText(String(title)).then(() => {
              messageApi.success(getMessage(addressCopied));
            });
          }}
        />
      </>
    )
  ) : (
    mergedTitle
  );
  return (
    <>
      {contextHolder}
      <Tooltip
        rootClassName={classNames(`${prefixCls}-tooltip`, __hashId__)}
        title={content}
        {...restProps}
      >
        {children}
      </Tooltip>
    </>
  );
};
