// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/wing-colorful.svg';

/**![WingColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi13aW5nLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDM3LjggMjk4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MzcuOCAyOTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHRpdGxlPmxvZ29fUjAyPC90aXRsZT4KPHBhdGggZD0iTTI4Ni4zLDEwMC4xbC0zOC4xLDY2bC0zOC4xLDY2TDE3Mi4xLDI5OEwxMzQsMjMyLjFsMzguMS02NmwzOC4xLTY1LjlMMTUyLjQsMGg3Ni4xbDE5LjgsMzQuMkwyODYuMywxMDAuMXogTTc2LjIsMEgwCglsOTUuOSwxNjYuMWwzOC4xLTY1LjlMNzYuMiwweiBNMzk5LjcsMzQuMkwzNzkuOSwwaC03Ni4xbDU3LjgsMTAwLjFsLTM4LjEsNjZsLTM4LjEsNjZsMzguMSw2NS45bDM4LjEtNjUuOWwzOC4xLTY2bDM4LjEtNjUuOQoJTDM5OS43LDM0LjJ6Ii8+Cjwvc3ZnPgo=) */
export const WingColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-wing-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

WingColorful.displayName = 'WingColorful';
