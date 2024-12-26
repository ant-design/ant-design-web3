// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/mir-colorful.svg';

/**![MirColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1taXItY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMC4xIDE4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMC4xIDE4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQ2LjkzIC0yMDMuOTYpIj4KCTxwYXRoIGQ9Ik0yNTQuNSwyMDcuNHYtMi45TDI1MiwyMDR2Mi45bC0yLjUtMC42djIuOWwtMi41LTAuNnY5LjNsMi41LDAuNnYyLjlsMi41LDAuNnYtMi45bDIuNSwwLjZ2LTIuOWwyLjUsMC42di05LjMKCQlMMjU0LjUsMjA3LjR6IE0yNTIuNSwyMTcuM2wtMy41LTAuOHYtNS41bDMuNSwwLjhWMjE3LjN6IiBzdHlsZT0iZmlsbDogIzIzMkM0NTsiLz4KPC9nPgo8L3N2Zz4K) */
export const MirColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-mir-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

MirColorful.displayName = 'MirColorful';
