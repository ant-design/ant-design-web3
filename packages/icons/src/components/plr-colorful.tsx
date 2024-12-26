// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/plr-colorful.svg';

/**![PlrColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1wbHItY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNDc0LjMgMjQ3NC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDc0LjMgMjQ3NC4zOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8cGF0aCBkPSJNMCwwaDI0NzQuM3YyNDc0LjNIMFYweiIgc3R5bGU9ImZpbGw6ICMwMEZGMjQ7Ii8+CjxnIHRyYW5zZm9ybT0ibWF0cml4KC4xIDAgMCAtLjEgMCA4MDEpIj4KCTxwYXRoIGQ9Ik0xNTA3NC4yLTIxNjJ2LTQ3NzguN2gtMzgzMC4zSDc0MTMuNnYtMTQzMC4yVi05Nzk4bDE0MzAuMi0xNDMwLjJjNzg0LjYtNzg0LjYsMTQzNi40LTE0MjcuMSwxNDUxLjgtMTQyNy4xCgkJYzEyLjQsMCwyMS42LDYzOS40LDIxLjYsMTQyMC45djE0MjAuOWgzODE0LjlIMTc5NDd2NDc4MS43Vi0yNTNsLTE0MzYuNCwxNDM2LjRsLTE0MzYuNCwxNDM2LjRMMTUwNzQuMi0yMTYyeiIvPgoJPHBhdGggZD0iTTc0MTMuNi0xMTk1LjJ2LTE5MTUuMmgxOTMwLjZoMTkzMC42djE5MTUuMlY3MjBIOTM0NC4ySDc0MTMuNlYtMTE5NS4yeiIvPgo8L2c+Cjwvc3ZnPgo=) */
export const PlrColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-plr-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

PlrColorful.displayName = 'PlrColorful';
