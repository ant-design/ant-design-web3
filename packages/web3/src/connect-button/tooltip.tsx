import { Space, Tooltip } from 'antd';
import { CopyFilled } from '@ant-design/icons';
import type { ConnectButtonTooltipProps } from './interface';
import type { PropsWithChildren } from 'react';

export const ConnectButtonTooltip: React.FC<PropsWithChildren<ConnectButtonTooltipProps>> = ({
  title,
  copyable,
  children,
  ...restProps
}) => {
  if (!title) return null;
  const content = copyable ? (
    <Space style={{ width: 200 }}>
      {title} <CopyFilled />
    </Space>
  ) : (
    title
  );
  return (
    <Tooltip title={content} {...restProps}>
      {children}
    </Tooltip>
  );
};
