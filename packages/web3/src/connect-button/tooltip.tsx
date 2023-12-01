import { Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import type { ConnectButtonTooltipProps } from './interface';
import { useMemo, type PropsWithChildren } from 'react';
import { formatAddress, writeCopyText } from '../utils';
import classNames from 'classnames';
import { useStyle } from './style';

export const ConnectButtonTooltip: React.FC<PropsWithChildren<ConnectButtonTooltipProps>> = ({
  title,
  copyable,
  children,
  format,
  prefixCls,
  __hashId__,
  ...restProps
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { wrapSSR, hashId } = useStyle(prefixCls!);
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
          Wallet address{' '}
          <CopyOutlined
            title="Copy Address"
            onClick={() => {
              writeCopyText(String(title)).then(() => {
                messageApi.success('Address Copied!');
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
          title="Copy Address"
          onClick={() => {
            writeCopyText(String(title)).then(() => {
              messageApi.success('Address Copied!');
            });
          }}
        />
      </>
    )
  ) : (
    mergedTitle
  );
  return wrapSSR(
    <>
      {contextHolder}
      <Tooltip
        rootClassName={classNames(`${prefixCls}-tooltip`, hashId)}
        title={content}
        {...restProps}
      >
        {children}
      </Tooltip>
    </>,
  );
};
