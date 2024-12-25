// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/bond-colorful.svg';

/**![BondColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1ib25kLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjguNCAyNy40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOC40IDI3LjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0xNC4yLDEyLjNoLTAuMWMtMS44LDAtMy4zLDEuNS0zLjMsMy40djMuN2wzLjMtMi41bDMuMywyLjV2LTMuN0MxNy41LDEzLjgsMTYsMTIuMywxNC4yLDEyLjN6IiBzdHlsZT0iZmlsbDogI0ZGNDMzOTsiLz4KPHBhdGggZD0iTTAsMHYyNy40bDguNS02LjN2LTcuMkw3LDEyLjZsNy4yLTUuNWw3LjIsNS41bC0xLjYsMS4ydjcuMmw4LjUsNi4zVjBIMHoiIHN0eWxlPSJmaWxsOiAjRkY0MzM5OyIvPgo8L3N2Zz4K) */
export const BondColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-bond-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

BondColorful.displayName = 'BondColorful';
