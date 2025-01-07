// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/t-colorful.svg';

/**![TColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi10LWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjkgNDYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY5IDQ2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8cGF0aCBkPSJNNjksMEg0NnY3LjdoMjNWMHogTTMwLjcsNy43SDIzdjcuN2g3LjdWNy43eiBNMjMsNDZoNy43VjIzSDIzVjQ2eiBNMzguMyw3Ljd2Ny43SDQ2VjcuN0gzOC4zeiBNMzguMyw0Nkg0NlYyMwoJaC03LjdWNDZ6IE0zOC4zLDBoLTcuN3Y3LjdoNy43VjB6IE0wLDB2Ny43aDIzVjBIMHogTTY5LDIzdi03LjdINDZWMjNINjl6IE0zMC43LDE1LjNWMjNoNy43di03LjdIMzAuN3ogTTAsMTUuM1YyM2gyM3YtNy43SDB6IiBzdHlsZT0iZmlsbDogIzdDNDdFRTsiLz4KPC9zdmc+Cg==) */
export const TColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-t-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

TColorful.displayName = 'TColorful';
