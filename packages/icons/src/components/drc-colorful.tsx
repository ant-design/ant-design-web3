// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/drc-colorful.svg';

/**![DrcColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1kcmMtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CjxwYXRoIGQ9Ik0xNzQuMSw5NS45TDE4OSw3OGw2Ni45LDgwLjVMMzIyLjcsNzhsMTQuOSwxNy45TDIwMy44LDI1N2w1Mi4xLDYyLjdsNTIuMS02Mi43bC0zOS41LTQ3LjVsMTQuOS0xNy45bDQ2LjgsNTYuNAoJYzAuMywwLjQsMC42LDAuNywwLjgsMS4xbDYuNiw4bC02Ni45LDgwLjVsNjYuOSw4MC41TDMyMi43LDQzNkwxNzQuMSwyNTcuMWwyLjctMy4zYzAuMi0wLjMsMC4zLTAuNSwwLjUtMC44bDYzLjYtNzYuNkwxNzQuMSw5NS45egoJIi8+CjxwYXRoIGQ9Ik0xNzQuMiw0MTguMWw1NS45LTY3LjNsMTQuOSwxNy45TDE4OSw0MzZMMTc0LjIsNDE4LjF6Ii8+Cjwvc3ZnPgo=) */
export const DrcColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-drc-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

DrcColorful.displayName = 'DrcColorful';
