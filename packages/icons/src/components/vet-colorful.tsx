// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/vet-colorful.svg';

/**![VetColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi12ZXQtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDAuOSA0NTYuMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAwLjkgNDU2LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxnIGlkPSJhbnQtd2ViMy1pY29uLXZldC1jb2xvcmZ1bC1MaXZlbGxvXzIiPgoJPGcgaWQ9ImFudC13ZWIzLWljb24tdmV0LWNvbG9yZnVsLUxpdmVsbG9fMS0yIj4KCQk8cGF0aCBkPSJNNTAwLjksMGgtNDQuN2MtMTAuOSwwLTIwLjksNi4zLTI1LjYsMTYuMUwzMTMsMjYwLjhsLTAuMS0wLjNsLTMxLjMsNjUuMmwwLjEsMC4zbC0zMS4zLDY1LjJMOTQsNjUuM2g0NC42CgkJCWMxMC45LDAsMjAuOSw2LjMsMjUuNiwxNi4xbDEwMi4xLDIxMS40bDMxLjMtNjUuMkwyMTUuMiw1N2MtMTYuNy0zNC44LTUxLjktNTctOTAuNS01N0gwbDMxLjIsNjUuM2gwLjFsMTg3LjcsMzkxaDYyLjZMNTAwLjksMHoiIHN0eWxlPSJmaWxsOiAjODJCRTAwOyIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=) */
export const VetColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-vet-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

VetColorful.displayName = 'VetColorful';
