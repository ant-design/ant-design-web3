// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/ckb-colorful.svg';

/**![CkbColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1ja2ItY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMDcuNyAyMDYuMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjA3LjcgMjA2LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGcgaWQ9ImFudC13ZWIzLWljb24tY2tiLWNvbG9yZnVsLWxvZ29NYXJrIj4KCTxwb2x5Z29uIGlkPSJhbnQtd2ViMy1pY29uLWNrYi1jb2xvcmZ1bC1sb2dvTWFya19QYXRoSXRlbV8iIHBvaW50cz0iMCwwIDAsMjA2LjMgNTMuMiwyMDYuMyA1My4yLDkzLjkgOTMuOSw5My45IAkiLz4KCTxwb2x5Z29uIGlkPSJhbnQtd2ViMy1pY29uLWNrYi1jb2xvcmZ1bC1sb2dvTWFya19QYXRoSXRlbV8yIiBwb2ludHM9IjE1NC41LDAgMTU0LjUsMTEyLjQgMTEzLjgsMTEyLjQgMjA3LjcsMjA2LjMgMjA3LjcsMCAJIi8+CjwvZz4KPC9zdmc+Cg==) */
export const CkbColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ckb-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

CkbColorful.displayName = 'CkbColorful';
