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
          {intl.getMessage(intl.messages.walletAddress)}{' '}
          <CopyOutlined
            title={intl.getMessage(intl.messages.copyAddress)}
            onClick={() => {
              writeCopyText(String(title)).then(() => {
                messageApi.success(intl.getMessage(intl.messages.copied));
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
          title={intl.getMessage(intl.messages.copyAddress)}
          onClick={() => {
            writeCopyText(String(title)).then(() => {
              messageApi.success(intl.getMessage(intl.messages.copied));
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
