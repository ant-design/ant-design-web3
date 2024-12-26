// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/stx-circle-colorful.svg';

/**![StxCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1zdHgtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTU5LjggMTU5LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1OS44IDE1OS44OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Y2lyY2xlIGN4PSI3OS45IiBjeT0iNzkuOSIgcj0iNzkuOSIgc3R5bGU9ImZpbGw6ICM1NTQ2RkY7Ii8+CjxwYXRoIGQ9Ik0xMTIuNSwxMjJMOTUuMyw5NUgxMjBWODQuOEgzOXYxMC4yaDI0LjdMNDYuNSwxMjJoMTIuOGwyMC4yLTMxLjdMOTkuNywxMjJIMTEyLjV6IE0xMjAsNzQuOVY2NC43SDk1LjgKCWwxNy0yNi43SDk5LjlMNzkuNSw3MC4yTDU5LjEsMzhINDYuMmwxNywyNi43SDM5Vjc1TDEyMCw3NC45TDEyMCw3NC45eiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+Cjwvc3ZnPgo=) */
export const StxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-stx-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

StxCircleColorful.displayName = 'StxCircleColorful';
