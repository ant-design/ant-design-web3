import { Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import type { ConnectButtonTooltipProps } from './interface';
import type { PropsWithChildren } from 'react';
import { writeCopyText } from '../utils';

export const ConnectButtonTooltip: React.FC<PropsWithChildren<ConnectButtonTooltipProps>> = ({
  title,
  copyable,
  children,
  ...restProps
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  if (!title) return null;
  const content = copyable ? (
    <>
      {title}{' '}
      <CopyOutlined
        title="Copy Address"
        onClick={() => {
          writeCopyText(String(title)).then(() => {
            messageApi.success('Address Copied!');
          });
        }}
      />
    </>
  ) : (
    title
  );
  return (
    <>
      {contextHolder}
      <Tooltip title={content} {...restProps}>
        {children}
      </Tooltip>
    </>
  );
};
