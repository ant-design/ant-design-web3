// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/tel-circle-colorful.svg';

/**![TelCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIGZpbGw9IiMxNGM4ZmYiIHI9IjE2Ii8+PHBhdGggZD0iTTI1LjA4IDExLjQ3OGMuNjMzLjUxMyAxLjAzMiAxLjU3NC44OTIgMi4zNTNsLTEuMzYgNy41MjRjLS4xNDIuNzg0LS44OTIgMS42NDctMS42NjQgMS45MThsLTcuNDE5IDIuNjA1Yy0uNzcyLjI3MS0xLjkyLjA3NS0yLjU1Mi0uNDM4bC02LjA1OC00LjkxN2MtLjYzMy0uNTEzLTEuMDMzLTEuNTY5LS44OS0yLjM1M2wxLjM2LTcuNTI0QzcuNTMgOS44NjIgOC4yOCA5IDkuMDUzIDguNzI4bDcuNDItMi42MDZjLjc3My0uMjcyIDEuOTItLjA3NCAyLjU1My40Mzh6bS02LjMxMSAzLjM3OGwuMzAyLTEuNTMtMi44MzIuMDA1LjQtMi4wMTZoLS45MTVhNS43NTkgNS43NTkgMCAwIDEtMi43NDggMi4yMjVsLS4yNTcgMS4zMTloMS4yMzhzLS40MTkgMS44OTQtLjU2IDIuNTkzYy0uMzUgMS43OC41MyAzLjA0MiAxLjg4MiAzLjA0MmgyLjI4OGwuNC0xLjY5aC0xLjkxNGMtLjg1IDAtLjgwNS0uNDY1LS42NC0xLjI5bC41MjctMi42NjJ6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+) */
export const TelCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-tel-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TelCircleColorful.displayName = 'TelCircleColorful';
