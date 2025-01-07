// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xvg-colorful.svg';

/**![XvgColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi14dmctY29sb3JmdWwtTGFnXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjE4LjkgMjUxLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxOC45IDI1MS45OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8Zz4KCTxwb2x5Z29uIHBvaW50cz0iMTg0LjIsMCAxMDkuNCwxNzIgMzQuNywwIDAsMCAxMDkuNCwyNTEuOSAyMTguOSwwIAkiIHN0eWxlPSJmaWxsOiAjMzdCREUyOyIvPgoJPHBvbHlnb24gcG9pbnRzPSIxMDkuNCw5Mi42IDE0OC42LDAgNzAuMiwwIAkiIHN0eWxlPSJmaWxsOiAjMzdCREUyOyIvPgo8L2c+Cjwvc3ZnPgo=) */
export const XvgColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xvg-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XvgColorful.displayName = 'XvgColorful';
