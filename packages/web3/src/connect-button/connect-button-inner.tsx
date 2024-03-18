import React, { useContext, useMemo, useState } from 'react';
import type { ButtonProps } from 'antd';
import { Avatar, Button, ConfigProvider, Divider, Dropdown, message, Space } from 'antd';

export const ConnectButtonInner: React.FC<
  ButtonProps & {
    preContent: React.ReactNode;
  }
> = (props) => {
  const { preContent, content, ...restProps } = props;

  const buttonContent = preContent ? (
    <Space.Compact>
      {preContent}
      <Button {...restProps} />
    </Space.Compact>
  ) : (
    <Button {...restProps} />
  );

  return buttonContent;
};

ConnectButtonInner.displayName = 'ConnectButtonInner';
