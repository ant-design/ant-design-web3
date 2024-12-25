// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/fei-circle-colorful.svg';

/**![FeiCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1mZWktY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Y2lyY2xlIGN4PSI5IiBjeT0iOSIgcj0iOSIgc3R5bGU9ImZpbGw6ICMyMjk5NkU7Ii8+CjxwYXRoIGQ9Ik05LDEzSDQuMWMtMC43LDAtMS4xLTAuNy0wLjctMS4zbDIuOC00LjRDNi40LDcsNi43LDYuOCw3LjEsNi44aDMuOGMwLjQsMCwwLjcsMC4yLDAuOSwwLjVsMi44LDQuNAoJYzAuNCwwLjYsMCwxLjMtMC43LDEuM0g5eiIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CjxwYXRoIGQ9Ik05LjUsM2wxLjIsMS44YzAuMiwwLjQsMCwwLjktMC41LDAuOUg3LjhjLTAuNSwwLTAuNy0wLjUtMC41LTAuOWwxLjItMS44QzguOCwyLjYsOS4zLDIuNiw5LjUsM3oiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8L3N2Zz4K) */
export const FeiCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-fei-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

FeiCircleColorful.displayName = 'FeiCircleColorful';
