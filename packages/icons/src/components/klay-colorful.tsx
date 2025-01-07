// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/klay-colorful.svg';

/**![KlayColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1rbGF5LWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwMCAxOTc1LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMDAgMTk3NS4xOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Zz4KCTxwYXRoIGQ9Ik0xMDQ3LjQsOTgyLjVsNjgzLjMsNjc4LjNjMzU5LjEtMzgwLjksMzU5LjEtOTc1LjcsMC0xMzU2LjYiIHN0eWxlPSJmaWxsOiAjNEY0NzNCOyIvPgoJPHBhdGggZD0iTTk5Ny41LDEwMjcuNGwtNjczLjMsNjY4LjNsNjczLjMsMjc5LjNsNjczLjMtMjc5LjMiIHN0eWxlPSJmaWxsOiAjNEY0NzNCOyIvPgoJPHBhdGggZD0iTTk3Mi42LDk1Ny42bDY5OC4zLTY5My4zTDEwMjcuNCwwTDM4OSwxNTQxLjJMOTcyLjYsOTU3LjZ6IiBzdHlsZT0iZmlsbDogIzRGNDczQjsiLz4KCTxwYXRoIGQ9Ik0wLDk4Mi41Yy0wLjUsMjUyLjMsOTUuOSw0OTUuMSwyNjkuMyw2NzguM2w2NjguMy0xNjExIiBzdHlsZT0iZmlsbDogIzRGNDczQjsiLz4KPC9nPgo8L3N2Zz4K) */
export const KlayColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-klay-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

KlayColorful.displayName = 'KlayColorful';
