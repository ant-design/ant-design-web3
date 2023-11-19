import { Tooltip } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
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
    <>
      {title} <CopyOutlined />
    </>
  ) : (
    title
  );
  return (
    <Tooltip title={content} {...restProps}>
      {children}
    </Tooltip>
  );
};
